import { addMinutes } from 'date-fns';
import responses from '../constants/responses';
import CartModel from '../models/Cart';
import UserModel from '../models/User';
import CustomError from '../types/CustomError';
import asaas from './external/asaas';
import createCode from '../utils/createCode';
import OrderModel, { OrderStatusEnum, PaymentTypeEnum } from '../models/Order';

const createOrder = async (userId: string) => {
  const user = await UserModel.findOne({ _id: userId });
  if (!user) {
    const { message, status } = responses.NOT_FOUND;
    throw new CustomError(message, status);
  }

  const cart = await CartModel.findOne({ userId });
  if (!cart) {
    const { message, status } = responses.NOT_FOUND;
    throw new CustomError(message, status);
  }

  if (!user.customerId) {
    const { message, status } = responses.BAD_REQUEST;
    throw new CustomError(message, status);
  }

  const code = createCode(8);
  const { data: charge, error: chargeError } = await asaas.createPixCharge({
    value: cart.totalPrice,
    billingType: 'PIX',
    customer: user.customerId,
    dueDate: addMinutes(new Date(), 5),
    description: `Pedido #${code}`,
    externalReference: code,
  });

  if (chargeError) {
    console.log({ chargeError });
    const { message, status } = responses.INTERNAL_SERVER_ERROR;
    throw new CustomError(message, status);
  }

  const { data: pix } = await asaas.getPixQRCode(charge.id);
  const order = await OrderModel.create({
    code,
    userId,
    deliveryAddress: cart.deliveryAddress,
    products: cart.products,
    status: OrderStatusEnum.PENDING,
    totalPrice: cart.totalPrice,
    payment: {
      type: PaymentTypeEnum.PIX,
      value: charge.value,
      status: charge.status,
      dueDate: charge.dueDate,
      externalId: charge.id,
      invoiceUrl: charge.invoiceUrl,
      pixPayload: pix || undefined,
    },
  });

  await CartModel.deleteOne({ userId });

  return {
    code: order.code,
    status: order.status,
    totalPrice: order.totalPrice,
    products: order.products,
    deliveryAddress: order.deliveryAddress,
    pixPayload: order.payment.pixPayload,
  };
};

const OrderService = {
  createOrder,
};

export default OrderService;

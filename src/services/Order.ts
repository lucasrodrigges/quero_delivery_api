import { addMinutes } from 'date-fns';
import responses from '../constants/responses';
import CartModel from '../models/Cart';
import UserModel from '../models/User';
import CustomError from '../types/CustomError';
import asaas from './external/asaas';
import createCode from '../utils/createCode';
import OrderModel, { OrderStatusEnum, PaymentTypeEnum } from '../models/Order';

const findOrderByCode = async (code: string) => {
  const order = await OrderModel.findOne({ code });
  if (!order) {
    const { message, status } = responses.NOT_FOUND;
    throw new CustomError(message, status);
  }
  return order;
};

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
    restaurantId: cart.restaurantId,
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

interface IUpdateOrderAndPaymentStatus {
  code: string;
  orderStatus: OrderStatusEnum;
  paymentStatus: string;
}

const updateOrderAndPaymentStatus = async ({
  code,
  orderStatus,
  paymentStatus,
}: IUpdateOrderAndPaymentStatus) => {
  const order = await OrderModel.findOne({ code });
  if (!order) {
    const { message, status } = responses.NOT_FOUND;
    throw new CustomError(message, status);
  }

  if (order.status === OrderStatusEnum.CONFIRMED) {
    const { message, status } = responses.CONFLICT;
    throw new CustomError(message, status);
  }

  await OrderModel.findOneAndUpdate({
    code,
  }, {
    status: orderStatus,
    payment: {
      status: paymentStatus,
    },
  });
};

const getOrdersStats = async (userId: string) => {
  const orders = await OrderModel.find({ userId });
  if (!orders || !orders.length) {
    const { message, status } = responses.NOT_FOUND;
    throw new CustomError(message, status);
  }

  const restaurantIdS: {
    [key: string]: number
  } = {};
  const productIds: {
    [key: string]: number
  } = {};
  const orderPrices: {
    [key: string]: number
  } = {};

  const statistc = orders.reduce((acc, order) => {
    acc.general.pendingOrders += order.status === OrderStatusEnum.PENDING ? 1 : 0;
    acc.general.confirmedOrders += order.status === OrderStatusEnum.CONFIRMED ? 1 : 0;
    acc.general.deliveredOrders += order.status === OrderStatusEnum.DELIVERED ? 1 : 0;
    acc.general.canceledOrders += order.status === OrderStatusEnum.CANCELED ? 1 : 0;
    acc.general.failedOrders += order.status === OrderStatusEnum.FAILED ? 1 : 0;

    restaurantIdS[order.restaurantId] = (restaurantIdS[order.restaurantId] || 0) + 1;
    order.products.forEach(({ productId, quantity }) => {
      productIds[productId] = (productIds[productId] || 0) + quantity;
    });

    acc.financialSummary.totalSpent += order.totalPrice;
    orderPrices[order.code] = order.totalPrice;

    return acc;
  }, {
    general: {
      pendingOrders: 0,
      confirmedOrders: 0,
      deliveredOrders: 0,
      canceledOrders: 0,
      failedOrders: 0,
    },
    financialSummary: {
      totalSpent: 0,
    },
  });

  const [[mostPurchasedProductId]] = Object.entries(productIds).sort((a, b) => b[1] - a[1]);
  const [[mostPurchasedRestaurantId]] = Object.entries(restaurantIdS).sort((a, b) => b[1] - a[1]);
  const averagePerOrder = statistc.financialSummary.totalSpent / orders.length;
  const mostExpensiveOrder = Math.max(...Object.values(orderPrices));

  const {
    confirmedOrders, canceledOrders, failedOrders, deliveredOrders,
  } = statistc.general;
  const conversionPercent = ((confirmedOrders + deliveredOrders) / orders.length) * 100;
  const cancellationPercent = ((canceledOrders + failedOrders) / orders.length) * 100;

  return {
    ...statistc,
    general: {
      ...statistc.general,
      mostPurchasedProductId,
      mostPurchasedRestaurantId,
      totalOrders: orders.length,
    },
    financialSummary: {
      ...statistc.financialSummary,
      averagePerOrder,
      mostExpensiveOrder,
    },
    orderConversion: {
      conversionPercent,
      cancellationPercent,
    },
  };
};

const OrderService = {
  findOrderByCode,
  createOrder,
  updateOrderAndPaymentStatus,
  getOrdersStats,
};

export default OrderService;

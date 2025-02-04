import mongoose from 'mongoose';
import dbSchemas from './schemas';

export enum OrderStatusEnum {
  PENDING = 'PENDING',
  CONFIRMED = 'CONFIRMED',
  DELIVERED = 'DELIVERED',
  CANCELED = 'CANCELED',
  FAILED = 'FAILED',
}

export enum PaymentTypeEnum {
  CREDIT_CARD = 'CREDIT_CARD',
  DEBIT_CARD = 'DEBIT_CARD',
  PIX = 'PIX',
}

export enum PaymentStatusEnum {
  PENDING = 'PENDING',
  CONFIRMED = 'CONFIRMED',
  CANCELED = 'CANCELED',
  FAILED = 'FAILED',
  REFUNDED = 'REFUNDED',
}

export const orderSchema = new mongoose.Schema({
  code: { type: String, required: true, unique: true },
  userId: { type: String, required: true },
  totalPrice: { type: Number, required: true },
  status: { type: String, required: true },
  payment: {
    type: dbSchemas.payment,
    required: true,
  },
  deliveryAddress: {
    type: dbSchemas.address,
    required: true,
  },
  products: {
    type: [dbSchemas.orderItems],
    required: true,
  },
});

const OrderModel = mongoose.model('Order', orderSchema);

export default OrderModel;

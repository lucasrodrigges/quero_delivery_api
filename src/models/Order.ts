import mongoose from 'mongoose';

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

const orderSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  totalPrice: {
    type: Number,
    required: true,
  },
  status: {
    type: OrderStatusEnum,
    required: true,
  },
  payment: {
    type: {
      type: {
        type: PaymentTypeEnum,
        required: true,
      },
      value: {
        type: Number,
        required: true,
      },
      status: {
        type: String,
        required: true,
      },
      externalId: {
        type: String,
        required: true,
      },
      invoiceUrl: {
        type: String,
        required: true,
      },
      pixPayload: {
        type: {
          payload: {
            type: String,
            required: true,
          },
          encodedImage: {
            type: String,
            required: true,
          },
          expirationDate: {
            type: String,
            required: true,
          },
        },
      },
    },
    required: true,
  },
  deliveryAddress: {
    type: {
      zipCode: {
        type: String,
        required: true,
      },
      street: {
        type: String,
        required: true,
      },
      number: {
        type: String,
        required: true,
      },
      complement: {
        type: String,
        required: true,
      },
      district: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
      state: {
        type: String,
        required: true,
      },
    },
    required: true,
  },
  products: {
    type: [{
      productId: {
        type: String,
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
    }],
    required: true,
  },
});

const OrderModel = mongoose.model('Order', orderSchema);

export default OrderModel;

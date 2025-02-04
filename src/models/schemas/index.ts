import mongoose from 'mongoose';

const address = new mongoose.Schema({
  zipCode: { type: String, required: true },
  street: { type: String, required: true },
  number: { type: String, required: true },
  complement: { type: String },
  district: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
});

const product = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },
});

const orderItems = new mongoose.Schema({
  productId: { type: String, required: true },
  quantity: { type: Number, required: true },
  userObservation: { type: String },
});

const payment = new mongoose.Schema({
  type: {
    type: {
      type: String,
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
    dueDate: {
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
});

const dbSchemas = {
  address,
  product,
  orderItems,
  payment,
};

export default dbSchemas;

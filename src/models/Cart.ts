import mongoose from 'mongoose';

const cartSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
    unique: true,
  },
  restaurantId: {
    type: String,
    required: true,
  },
  totalPrice: {
    type: Number,
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
      userObservation: {
        type: String,
      },
    }],
    required: true,
  },
});

const CartModel = mongoose.model('Cart', cartSchema);

export default CartModel;

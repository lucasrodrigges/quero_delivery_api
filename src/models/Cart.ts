import mongoose from 'mongoose';
import dbSchemas from './schemas';

export const cartSchema = new mongoose.Schema({
  userId: { type: String, required: true, unique: true },
  restaurantId: { type: String, required: true },
  totalPrice: { type: Number, required: true },
  deliveryAddress: {
    type: dbSchemas.address,
    required: true,
  },
  products: {
    type: [dbSchemas.orderItems],
    required: true,
  },
});

const CartModel = mongoose.model('Cart', cartSchema);

export default CartModel;

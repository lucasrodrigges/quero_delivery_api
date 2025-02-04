import { z } from 'zod';
import CartModel from '../models/Cart';
import { createCartSchema } from '../schemas/cart';

const createCart = async (values: z.infer<typeof createCartSchema>) => {
  await CartModel.create(values);
};

const CartService = {
  createCart,
};

export default CartService;

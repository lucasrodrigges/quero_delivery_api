import { z } from 'zod';
import CartModel from '../models/Cart';
import { createCartSchema } from '../schemas/cart';
import responses from '../constants/responses';
import CustomError from '../types/CustomError';
import { RestaurantModel } from '../models/Restaurant';
import UserModel from '../models/User';

const getCart = async (userId: string) => {
  const cart = await CartModel.findOne({ userId });
  if (!cart) {
    const { message, status } = responses.NOT_FOUND;
    throw new CustomError(message, status);
  }

  return cart;
};

const createCart = async (userId: string, values: z.infer<typeof createCartSchema>) => {
  const user = await UserModel.findOne({ _id: userId });
  if (!user) {
    const { message, status } = responses.NOT_FOUND;
    throw new CustomError(message, status);
  }

  const cart = await CartModel.findOne({ userId });
  if (cart) {
    const { message, status } = responses.CONFLICT;
    throw new CustomError(message, status);
  }

  const restaurant = await RestaurantModel.findById(values.restaurantId);
  if (!restaurant) {
    const { message, status } = responses.NOT_FOUND;
    throw new CustomError(message, status);
  }

  const cartProducts = restaurant.products.filter(
    (product) => values.products.some((cartProduct) => (
      cartProduct.productId === product._id.toString()
    )),
  );
  if (!cartProducts.length || cartProducts.length !== values.products.length) {
    const { message, status } = responses.BAD_REQUEST;
    throw new CustomError(message, status);
  }

  const totalPrice = values.products.reduce((acc, { quantity, productId }) => {
    const product = restaurant.products.find((thisProduct) => (
      thisProduct._id.toString() === productId
    ));
    return acc + (product!.price * quantity);
  }, 0);

  await CartModel.create({
    ...values,
    userId,
    totalPrice,
  });
};

const removeCart = async (userId: string) => {
  const cart = await CartModel.findOneAndDelete({ userId });
  if (!cart) {
    const { message, status } = responses.NOT_FOUND;
    throw new CustomError(message, status);
  }
};

const CartService = {
  getCart,
  createCart,
  removeCart,
};

export default CartService;

import * as express from 'express';
import validateBody from '../middleware/validateBody';
import { createCartSchema } from '../schemas/cart';
import CartController from '../controllers/Cart';

const CartRoutes = express.Router();

CartRoutes.get(
  '/',
  CartController.getCartByUserId,
);

CartRoutes.post(
  '/upsert',
  validateBody(createCartSchema),
  CartController.upsertCartByUserId,
);

CartRoutes.delete(
  '/delete',
  CartController.removeCartByUserId,
);

export default CartRoutes;

import * as express from 'express';
import { Request, Response, NextFunction } from 'express';
import validateBody from '../middleware/validateBody';
import { createCartSchema } from '../schemas/cart';
import CartService from '../services/CartService';
import responses from '../constants/responses';

const CartRoutes = express.Router();

CartRoutes.get(
  '/',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const cart = await CartService.getCart(req.user!.id);
      res.json(cart);
    } catch (error) {
      next(error);
    }
  },
);

CartRoutes.post(
  '/create',
  validateBody(createCartSchema),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await CartService.createCart(req.user!.id, req.body);

      const { status, message } = responses.CREATED;
      res.status(status).json({ message });
    } catch (error) {
      next(error);
    }
  },
);

export default CartRoutes;

import * as express from 'express';
import validateBody from '../middleware/validateBody';
import { createCartSchema } from '../schemas/cart';
import CartService from '../services/CartService';

const CartRoutes = express.Router();

CartRoutes.post(
  '/',
  validateBody(createCartSchema),
  async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
      const token = await CartService.createCart(req.body);
      res.json(token);
    } catch (error) {
      next(error);
    }
  },
);

export default CartRoutes;

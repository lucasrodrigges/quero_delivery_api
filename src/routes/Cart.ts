import * as express from 'express';
import validateBody from '../middleware/validateBody';
import { createCartSchema } from '../schemas/cart';
import CartService from '../services/CartService';
import responses from '../constants/responses';

const CartRoutes = express.Router();

CartRoutes.post(
  '/create',
  validateBody(createCartSchema),
  async (req: express.Request, res: express.Response, next: express.NextFunction) => {
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

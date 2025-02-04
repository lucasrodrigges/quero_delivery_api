import * as express from 'express';
import { NextFunction, Request, Response } from 'express';
import OrderService from '../services/Order';
import responses from '../constants/responses';

const OrderRoutes = express.Router();

OrderRoutes.post(
  '/create',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const response = await OrderService.createOrder(req.user!.id);

      const { status } = responses.CREATED;
      res.status(status).json(response);
    } catch (error) {
      next(error);
    }
  },
);

export default OrderRoutes;

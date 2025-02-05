import { Request, Response, NextFunction } from 'express';
import OrderService from '../services/Order';
import responses from '../constants/responses';

const createOrderByUserId = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const response = await OrderService.createOrderByUserId(req.user!.id);

    const { status } = responses.CREATED;
    res.status(status).json(response);
  } catch (error) {
    next(error);
  }
};

const getOrderStatsByUserId = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const response = await OrderService.getOrderStatsByUserId(req.user!.id);
    res.json(response);
  } catch (error) {
    next(error);
  }
};

const OrderController = {
  createOrderByUserId,
  getOrderStatsByUserId,
};

export default OrderController;

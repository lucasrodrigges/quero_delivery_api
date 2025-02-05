import { NextFunction, Request, Response } from 'express';
import CartService from '../services/Cart';
import responses from '../constants/responses';

const getCartByUserId = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const response = await CartService.getCartByUserId(req.user!.id);
    res.json(response);
  } catch (error) {
    next(error);
  }
};

const upsertCartByUserId = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await CartService.upsertCartByUserId(req.user!.id, req.body);

    const { status, message } = responses.OK;
    res.status(status).json({ message });
  } catch (error) {
    next(error);
  }
};

const removeCartByUserId = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await CartService.removeCartByUserId(req.user!.id);

    const { status, message } = responses.OK;
    res.status(status).json({ message });
  } catch (error) {
    next(error);
  }
};

const CartController = {
  getCartByUserId,
  upsertCartByUserId,
  removeCartByUserId,
};

export default CartController;

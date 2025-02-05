import { Request, Response, NextFunction } from 'express';
import RestaurantService from '../services/Restaurant';

const getRestaurantProducts = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const response = await RestaurantService.getRestaurantProducts(req.params.restaurantId);
    res.json(response);
  } catch (error) {
    next(error);
  }
};

const RestaurantController = {
  getRestaurantProducts,
};

export default RestaurantController;

import * as express from 'express';
import RestaurantService from '../services/Restaurant';

const RestaurantRoutes = express.Router();

RestaurantRoutes.get(
  '/:restaurantId/products',
  async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
      const response = await RestaurantService.getRestaurantProducts(req.params.restaurantId);
      res.json(response);
    } catch (error) {
      next(error);
    }
  },
);

export default RestaurantRoutes;

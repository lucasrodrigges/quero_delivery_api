import * as express from 'express';
import RestaurantController from '../controllers/Restaurant';

const RestaurantRoutes = express.Router();

RestaurantRoutes.get(
  '/:restaurantId/products',
  RestaurantController.getRestaurantProducts,
);

export default RestaurantRoutes;

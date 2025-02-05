import * as express from 'express';
import OrderController from '../controllers/Order';

const OrderRoutes = express.Router();

OrderRoutes.post(
  '/create',
  OrderController.createOrderByUserId,
);

OrderRoutes.get(
  '/stats',
  OrderController.getOrderStatsByUserId,
);

export default OrderRoutes;

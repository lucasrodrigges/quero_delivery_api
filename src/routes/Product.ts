import * as express from "express";
import RestaurantService from "../services/Product";

const ProductRoutes = express.Router();

ProductRoutes.get(
  "/restaurant/:restaurantId",
  (req: express.Request, res: express.Response, next: express.NextFunction) => {
  try {
    const products = RestaurantService.getRestaurantProducts(req.params.restaurantId, req.query);
    res.json(products);
  } catch (error) {
    next(error);
  }
});

export default ProductRoutes;
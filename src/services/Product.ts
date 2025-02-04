import responses from "../constants/responses";
import ProductModel from "../models/Product";
import CustomError from "../types/CustomError";

const getRestaurantProducts = async (restaurantId: string, {
  limit = 10,
  skip = 0
}) => {
  const products = await ProductModel
    .find({ restaurantId })
    .skip(skip)
    .limit(limit);
  
  if (!products) {
    const {message, status } = responses.NOT_FOUND;
    throw new CustomError(message, status);
  }

  return {
    limit,
    skip,
    products
  }
}

const RestaurantService = {
  getRestaurantProducts
}

export default RestaurantService
import responses from '../constants/responses';
import { RestaurantModel } from '../models/Restaurant';
import CustomError from '../types/CustomError';

const getRestaurantProducts = async (restaurantId: string) => {
  const restaurant = await RestaurantModel.findById(restaurantId);

  if (!restaurant) {
    const { message, status } = responses.NOT_FOUND;
    throw new CustomError(message, status);
  }

  return restaurant.products;
};

const RestaurantService = {
  getRestaurantProducts,
};

export default RestaurantService;

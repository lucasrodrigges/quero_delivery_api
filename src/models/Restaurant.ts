import mongoose from 'mongoose';
import dbSchemas from './schemas';

export const restaurantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  stars: { type: Number, required: true },
  address: { type: dbSchemas.address, required: true },
  logoImage: { type: String },
  products: {
    type: [dbSchemas.product],
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

export const RestaurantModel = mongoose.model('Restaurant', restaurantSchema);

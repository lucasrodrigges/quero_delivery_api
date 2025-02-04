import mongoose from 'mongoose';

export const restaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  stars: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  logoImage: {
    type: String,
  },
  products: {
    type: [{
      name: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      category: {
        type: String,
        required: true,
      },
      stock: {
        type: Number,
        required: true,
      },
      description: {
        type: String,
      },
      image: {
        type: String,
      },
    }],
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

import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const { MONGO_URL } = process.env;

export const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URL!);
    console.log('MongoDB conected!');
  } catch (error) {
    console.error('Error connecting to MongoDB', error);
    process.exit(1);
  }
};

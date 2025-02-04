import mongoose from 'mongoose';
import dbSchemas from './schemas';

export const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, unique: true },
  cpf: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  customerId: { type: String },
  addresses: {
    type: [dbSchemas.address],
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

const UserModel = mongoose.model('User', userSchema);

export default UserModel;

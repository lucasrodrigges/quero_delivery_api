import { z } from 'zod';
import responses from '../constants/responses';
import UserModel from '../models/User'
import CustomError from '../types/CustomError';
import bcrypt from '../utils/bcrypt';
import { createUserSchema,  } from '../schemas/user';

const createUser = async (values: z.infer<typeof createUserSchema>) => {
  const user = await UserModel.findOne({ email: values.email });
  if (user) {
    const {message, status } = responses.CONFLICT;
    throw new CustomError(message, status);
  }

  const password = await bcrypt.hashPassword(values.password);
  await UserModel.create({
    ...values,
    name: values.name.trim(),
    email: values.email.toLowerCase().trim(),
    password,
  });
}

const UserService = {
  createUser,
}

export default UserService;
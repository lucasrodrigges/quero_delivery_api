import { z } from 'zod';
import responses from '../constants/responses';
import UserModel from '../models/User';
import CustomError from '../types/CustomError';
import bcrypt from '../utils/bcrypt';
import { createUserSchema } from '../schemas/auth';
import jose from '../utils/jose';

const createUser = async (values: z.infer<typeof createUserSchema>) => {
  const user = await UserModel.findOne({
    $or: [
      { cpf: values.cpf },
      { email: values.email.toLocaleLowerCase().trim() },
      { phone: values.phone },
    ],
  });
  if (user) {
    const { message, status } = responses.CONFLICT;
    throw new CustomError(message, status);
  }

  const password = await bcrypt.hashPassword(values.password);
  const createdUser = await UserModel.create({
    ...values,
    email: values.email.toLowerCase().trim(),
    password,
  });

  const token = await jose.encrypt({
    user: {
      name: createdUser.name,
      email: createdUser.email,
      id: createdUser._id,
    },
  });

  return { token };
};

const UserService = {
  createUser,
};

export default UserService;

import { z } from 'zod';
import { addressSchema } from './address';

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export const createUserSchema = z.object({
  name: z.string().min(3),
  cpf: z.string().length(11),
  email: z.string().email(),
  password: z.string().min(6),
  confirmPassword: z.string().min(6),
  addresses: z.array(addressSchema).min(1),
  phone: z.string().length(11).optional(),
}).refine((data) => data.password === data.confirmPassword, {
  message: 'Passwords do not match',
  path: ['confirmPassword'],
});

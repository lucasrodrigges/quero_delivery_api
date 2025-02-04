import { z } from 'zod';

export const createUserSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(6),
  confirmPassword: z.string().min(6),
  address: z.array(z.object({
    zipCode: z.string(),
    street: z.string(),
    number: z.string(),
    district: z.string(),
    city: z.string(),
    state: z.string(),
    complement: z.string().optional(),
  })).min(1),
}).refine((data) => data.password === data.confirmPassword, {
  message: 'Passwords do not match',
  path: ['confirmPassword'],
});

export const updateUserSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  address: z.string().min(3),
});

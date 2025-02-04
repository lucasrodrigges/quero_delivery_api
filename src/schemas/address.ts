import { z } from 'zod';

export const addressSchema = z.object({
  zipCode: z.string(),
  street: z.string(),
  number: z.string(),
  district: z.string(),
  city: z.string(),
  state: z.string().length(2),
  complement: z.string().optional(),
});

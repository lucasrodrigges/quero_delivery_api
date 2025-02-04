import { isValidObjectId } from 'mongoose';
import { z } from 'zod';

export const createCartSchema = z.object({
  restaurantId: z.string().refine((id) => isValidObjectId(id)),
  deliveryAddress: z.object({
    zipCode: z.string(),
    street: z.string(),
    number: z.string(),
    complement: z.string().optional(),
    district: z.string(),
    city: z.string(),
    state: z.string().length(2),
  }),
  products: z.array(z.object({
    productId: z.string().refine((id) => isValidObjectId(id)),
    quantity: z.number(),
    userObservation: z.string().optional(),
  })).min(1),
});

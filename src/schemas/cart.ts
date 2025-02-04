import { z } from 'zod';

export const createCartSchema = z.object({
  userId: z.string(),
  restaurantId: z.string(),
  totalPrive: z.number(),
  deliveryAddress: z.object({
    zipCode: z.string(),
    street: z.string(),
    number: z.string(),
    complement: z.string().optional(),
    district: z.string(),
    city: z.string(),
    state: z.string(),
  }),
  products: z.array(z.object({
    productId: z.string(),
    quantity: z.number(),
    userObservation: z.string().optional(),
  })).min(1),
});

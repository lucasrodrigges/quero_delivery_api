import * as express from 'express';
import * as dotenv from 'dotenv';
import { connectDB } from './config/database';
import errorMiddleware from './middleware/errorMiddleware';
import AuthRoutes from './routes/Auth';
import authMiddleware from './middleware/authMiddleware';
import { RestaurantModel } from './models/Restaurant';
import seed from './config/seed';
import RestaurantRoutes from './routes/Restaurant';
import CartRoutes from './routes/Cart';
import OrderRoutes from './routes/Order';
import AsaasRoutes from './webhooks/Asaas';
import UserModel from './models/User';
import bcrypt from './utils/bcrypt';
import OrderModel from './models/Order';
import createCode from './utils/createCode';

dotenv.config();

const app = express.default();
app.use(express.json());

// not protected routes
app.use('/auth', AuthRoutes);

// protected routes
app.use('/restaurant', authMiddleware, RestaurantRoutes);
app.use('/cart', authMiddleware, CartRoutes);
app.use('/order', authMiddleware, OrderRoutes);

// webhooks
app.use('/webhooks/asaas', AsaasRoutes);

// root route
app.get('/', (_req: express.Request, res: express.Response) => {
  res.json({
    message: 'Quero Delivery API v0.1',
  });
});

app.post('/seed', async (_req: express.Request, res: express.Response) => {
  try {
    await RestaurantModel.deleteMany({});
    await UserModel.deleteMany({});
    await OrderModel.deleteMany({});

    await RestaurantModel.insertMany(seed.restaurants);
    await UserModel.insertMany(await Promise.all(seed.users.map(async (user) => ({
      ...user,
      password: await bcrypt.hashPassword(user.password),
    }))));
    await OrderModel.insertMany(seed.orders.map((order) => ({
      ...order,
      code: createCode(),
    })));

    res.json({
      message: 'Database seeded',
    });
  } catch (error) {
    console.log({ seedError: error });
    res.status(500).json({ message: 'Error seeding database' });
  }
});

app.use(errorMiddleware);

const { PORT } = process.env;

app.listen(PORT, async () => {
  await connectDB();
  console.log(`Server running on ${PORT}`);
});

export default app;

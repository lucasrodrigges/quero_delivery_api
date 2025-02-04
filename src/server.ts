import * as express from "express";
import * as dotenv from "dotenv";
import { connectDB } from "./config/database";
import errorMiddleware from "./middleware/errorMiddleware";
import ProductRoutes from "./routes/Product";
import AuthRoutes from "./routes/Auth";
import authMiddleware from "./middleware/authMiddleware";
import { RestaurantModel } from "./models/Restaurant";
import seed from "./config/seed";

dotenv.config();

const app = express.default();
app.use(express.json());

// not protected routes
app.use("/auth", AuthRoutes);

// protected routes
app.use('/product', authMiddleware, ProductRoutes)

// root route
app.get("/", (req: express.Request, res: express.Response) => {
  res.json({
    message: "Quero Delivery API v0.1",
  });
});

app.get("/seed", async (req: express.Request, res: express.Response) => {
  try {
    await RestaurantModel.deleteMany({});
    await RestaurantModel.insertMany(seed.restaurants);
    res.json({
      message: "Database seeded",
    });
  } catch (error) {
    console.log({seedError: error});    
    res.status(500).json({ message: "Error seeding database" });
  }
})

app.use(errorMiddleware);

const { PORT } = process.env || 3000;

app.listen(PORT, async () => {
  await connectDB();
  console.log(`Server running on ${PORT}`);
});

export default app;
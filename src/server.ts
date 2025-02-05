import app from './app';
import { connectDB } from './config/database';

const { PORT } = process.env;

const server = app.listen(
  process.env.NODE_ENV === 'test' ? 0 : PORT,
  async () => {
    await connectDB();
    console.log(`Server running on port ${PORT}`);
  },
);

export default server;

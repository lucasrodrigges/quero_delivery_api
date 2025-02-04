import { Request, Response, NextFunction } from 'express';
import CustomError from '../types/CustomError';

const errorMiddleware = (
  err: CustomError,
  _req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _next: NextFunction,
): void => {
  const status = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';

  res.status(status).json({ message });
};

export default errorMiddleware;

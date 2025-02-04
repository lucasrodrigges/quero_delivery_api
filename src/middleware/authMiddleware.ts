import { NextFunction, Request, Response } from 'express';
import responses from '../constants/responses';
import jose from '../utils/jose';

declare module 'express' {
  interface Request {
    user?: {
      id: string
      name: string,
      email: string,
    }
  }
}

export default async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      const { status, message } = responses.UNAUTHORIZED;
      res.status(status).json({ message });
    } else {
      const payload = await jose.decrypt(token);
      req.user = payload.user;
    }

    next();
  } catch {
    const { status, message } = responses.INTERNAL_SERVER_ERROR;
    res.status(status).json({ message });
  }
};

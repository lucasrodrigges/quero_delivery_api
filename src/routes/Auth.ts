import * as express from 'express';
import { NextFunction, Request, Response } from 'express';
import AuthService from '../services/Auth';
import { createUserSchema } from '../schemas/user';
import responses from '../constants/responses';
import UserService from '../services/User';
import validateBody from '../middleware/validateBody';
import { loginSchema } from '../schemas/auth';

const AuthRoutes = express.Router();

AuthRoutes.post(
  '/login',
  validateBody(loginSchema),
  async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
      const response = await AuthService.login(req.body.email, req.body.password);
      res.json(response);
    } catch (error) {
      next(error);
    }
  },
);

AuthRoutes.post(
  '/create',
  validateBody(createUserSchema),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await UserService.createUser(req.body);

      const { status, message } = responses.CREATED;
      res.status(status).json({ message });
    } catch (error) {
      next(error);
    }
  },
);

export default AuthRoutes;

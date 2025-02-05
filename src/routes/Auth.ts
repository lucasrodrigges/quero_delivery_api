import * as express from 'express';
import validateBody from '../middleware/validateBody';
import { createUserSchema, loginSchema } from '../schemas/auth';
import AuthController from '../controllers/Auth';

const AuthRoutes = express.Router();

AuthRoutes.post(
  '/login',
  validateBody(loginSchema),
  AuthController.login,
);

AuthRoutes.post(
  '/create',
  validateBody(createUserSchema),
  AuthController.createUser,
);

export default AuthRoutes;

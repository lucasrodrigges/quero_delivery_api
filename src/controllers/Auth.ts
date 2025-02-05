import { Request, Response, NextFunction } from 'express';
import AuthService from '../services/Auth';
import responses from '../constants/responses';
import UserService from '../services/User';

export const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const response = await AuthService.login(req.body.email, req.body.password);
    res.json(response);
  } catch (error) {
    next(error);
  }
};

export const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const response = await UserService.createUser(req.body);

    const { status } = responses.CREATED;
    res.status(status).json(response);
  } catch (error) {
    next(error);
  }
};

const AuthController = {
  login,
  createUser,
};

export default AuthController;

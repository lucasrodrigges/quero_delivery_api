import * as express from "express";
import AuthService from "../services/Auth";
import { NextFunction, Request, Response } from "express";
import middleware from "../middleware/validateBody";
import { createUserSchema } from "../schemas/user";
import responses from "../constants/responses";
import UserService from "../services/User";


const AuthRoutes = express.Router();

AuthRoutes.post(
  "/login",
  async (req: express.Request, res: express.Response, next: express.NextFunction) => {
  try {
    const token = await AuthService.login(req.body.email, req.body.password);
    res.json(token);
  } catch (error) {
    next(error);
  }
});

AuthRoutes.post(
  "/create",
  middleware(createUserSchema),
  async (req: Request, res: Response, next: NextFunction) => {
 try {
  await UserService.createUser(req.body);

  const { status, message } = responses.CREATED;
  res.status(status).json({ message });
 } catch (error) {
  next(error);
 }
});

export default AuthRoutes;
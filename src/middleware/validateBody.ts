import { NextFunction, Request, Response } from "express";
import { z } from "zod";
import responses from "../constants/responses";

export default (schema: z.Schema) => (req: Request, res: Response, next: NextFunction) => {
  try {
    const {success, error} = schema.safeParse(req.body);
    if (!success) {
      console.log('middleware error => ', error);
      const {status, message } = responses.INVALID_VALUES;
       res.status(status).json({message});
    }

    next();
  } catch {
    const {status, message } = responses.INTERNAL_SERVER_ERROR;
     res.status(status).json({message});
  }
}
import { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import * as Service from './auth.service';

dotenv.config();

export const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password } = req.body;

    const result = await Service.loginAndGetToken(email, password);

    return res.status(200).json(result);
  } catch (err) {
    return next(err);
  }
};

export const register = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password } = req.body;

    const result = await Service.register({ email, password });

    return res.status(200).json(result);
  } catch (err) {
    return next(err);
  }
};

export const resetPasswordRequest = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email } = req.body;

    const result = await Service.resetPasswordRequest(email);

    return res.status(200).json({ token: result });
  } catch (err) {
    return next(err);
  }
};

export const resetPassword = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password, token } = req.body;

    const result = await Service.resetPassword(email, token, password);

    return res.status(200).json(result);
  } catch (err) {
    return next(err);
  }
};

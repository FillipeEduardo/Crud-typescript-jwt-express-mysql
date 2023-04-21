import { NextFunction, Request, Response } from 'express';
import User from '../types/user';

const loginMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body as User;
  if (!email || !password) {
    return res
      .status(400)
      .json({ message: 'email and password is required' });
  }
  next();
};

export default loginMiddleware;
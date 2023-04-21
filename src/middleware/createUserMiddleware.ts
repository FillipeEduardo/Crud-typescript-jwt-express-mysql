import { NextFunction, Request, Response } from 'express';
import User from '../types/user';

const MESSAGE_ERROR = 'Empty fields [email, name, password]';

const createUserMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const { email, name, password } = req.body as User;
  if (!email || !name || !password) return res.status(400).json({ message: MESSAGE_ERROR });
  next();
};

export default createUserMiddleware;
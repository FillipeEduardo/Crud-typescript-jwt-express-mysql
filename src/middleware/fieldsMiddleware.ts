import { NextFunction, Request, Response } from 'express';
import User from '../types/user';

const fieldsMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const { email, name, password } = req.body as User;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (password.length < 6 || password.length > 12) {
    return res.status(400).json('A senha precisa ter entre 6 e 12 caracteres.');
  }
  if (!emailRegex.test(email)) {
    return res.status(400).json('Email inválido.');
  }
  if (name.length < 3) {
    return res.status(400).json('the field name must to be 3 or more caracters.');
  }
  next();
};

export default fieldsMiddleware;
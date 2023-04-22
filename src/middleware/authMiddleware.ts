import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;
  if (!authorization) return res.status(401).json('Unauthorized');
  try {
    jwt.verify(authorization, process.env.SECRET as jwt.Secret);
    next();
  } catch (Error) {
    return res.status(401).json('Unauthorized');
  }
};

export default authMiddleware;
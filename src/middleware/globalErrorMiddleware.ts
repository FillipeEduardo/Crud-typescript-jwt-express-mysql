import { NextFunction, Request, Response } from 'express';

const ErrorMiddleware = (_err: unknown, _req: Request, res: Response, _next: NextFunction) => {
  res.status(500).json({ message: 'Erro Inerperado' });
};

export default ErrorMiddleware;
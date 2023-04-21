import { NextFunction, Request, Response } from 'express';

const ErrorMiddleware = (err: unknown, _req: Request, res: Response, _next: NextFunction) => {
  if (err instanceof Error && err.message === 'EMAIL_ALREADY_USED') {
    return res.status(400).json({ message: 'O Email ja está em uso' });
  }
  if (err instanceof Error && err.message === 'UNAUTHORIZED') {
    return res.status(401).json({ message: 'Email ou senha inválida!' });
  }
  return res.status(500).json({ message: 'Erro Inerperado' });
};

export default ErrorMiddleware;
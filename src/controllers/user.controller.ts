import { Request, Response } from 'express';
import userService from '../services/user.service';

const getAllUsers = async (_req: Request, res: Response) => {
  const result = await userService.getAllUsers();
  return res.status(200).json(result);
};

export default {
  getAllUsers,
};
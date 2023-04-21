import { Request, Response } from 'express';
import userService from '../services/user.service';
import User from '../types/user';

const getAllUsers = async (_req: Request, res: Response) => {
  const result = await userService.getAllUsers();
  return res.status(200).json(result);
};

const CreateUser = async (req: Request, res: Response) => {
  const user = req.body as User;
  const result = await userService.CreateUser(user);
  return res.status(201).json(result);
};

export default {
  getAllUsers,
  CreateUser,
};
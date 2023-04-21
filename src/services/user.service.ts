import userModel from '../models/user.model';
import User from '../types/user';

const getAllUsers = async (): Promise<User[]> => {
  const result = await userModel.getAllUsers();
  return result;
};

const CreateUser = async (user: User): Promise<User> => {
  const result = await userModel.CreateUser(user);
  return result;
};

export default {
  getAllUsers,
  CreateUser,
};
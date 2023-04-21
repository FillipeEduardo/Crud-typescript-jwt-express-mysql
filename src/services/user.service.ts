import userModel from '../models/user.model';
import User from '../types/user';

const getAllUsers = async (): Promise<User[]> => {
  const result = await userModel.getAllUsers();
  return result;
};

const CreateUser = async (user: User): Promise<User> => {
  const getUser = await userModel.getUserByEmail(user.email);
  if (getUser) throw new Error('EMAIL_ALREADY_USED');
  const result = await userModel.createUser(user);
  return result;
};

export default {
  getAllUsers,
  CreateUser,
};
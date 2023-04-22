import userModel from '../models/user.model';
import User from '../types/user';
import createJwt from '../utils/createJwt';

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

const login = async (email: string, password: string): Promise<string> => {
  const user = await userModel.getUserByEmail(email);
  if (!user || user.password !== password) throw new Error('UNAUTHORIZED');
  return createJwt(user.id.toString(), email);
};

const updateUser = async (user: User, id: number): Promise<User> => {
  const result = await userModel.updateUser(id, user);
  return result;
};

const getUserById = async (id: string): Promise<User> => {
  const result = await userModel.getUserById(id);
  if (!result) throw new Error('NOT_FOUND');
  return result;
};

const deleteUserById = async (id: string): Promise<void> => {
  await userModel.deleteUserById(id);
};

export default {
  getAllUsers,
  CreateUser,
  login,
  updateUser,
  getUserById,
  deleteUserById,
};
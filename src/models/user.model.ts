import { OkPacket, RowDataPacket } from 'mysql2';
import User from '../types/user';
import db from './connection';

const getAllUsers = async (): Promise<User[]> => {
  const [result] = await db.execute<RowDataPacket[]>('SELECT * FROM Users;');
  return result as User[];
};

const CreateUser = async (user: User): Promise<User> => {
  const { email, name, password } = user;
  const [result] = await db
    .execute<OkPacket>(
    'INSERT INTO Users(name, email, password) VALUES (?, ?, ?);',
    [name, email, password],
  );
  return {
    ...user,
    id: result.insertId,
  };
};

export default {
  getAllUsers,
  CreateUser,
};
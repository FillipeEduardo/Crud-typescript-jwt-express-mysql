import { OkPacket, RowDataPacket } from 'mysql2';
import User from '../types/user';
import db from './connection';

const getAllUsers = async (): Promise<User[]> => {
  const [result] = await db.execute<RowDataPacket[]>('SELECT * FROM Users;');
  return result as User[];
};

const createUser = async (user: User): Promise<User> => {
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

const updateUser = async (id: number, user: User): Promise<User> => {
  const [rows] = await db.execute<RowDataPacket[]>('SELECT * FROM Users WHERE id = ?', [id]);
  const getUser = rows[0] as User;
  if (!getUser) throw new Error('NOT_FOUND');
  const atualized: User = {
    ...getUser,
    ...user,
  };
  await db
    .execute<OkPacket>(
    'UPDATE Users SET name = ?, password = ? WHERE id = ?;',
    [atualized.name, atualized.password, id],
  );
  return atualized;
};

const getUserByEmail = async (email: string): Promise<User> => {
  const [result] = await db
    .execute<RowDataPacket[]>('SELECT * FROM Users WHERE email = ?', [email]);
  return result[0] as User;
};

const getUserById = async (id: string): Promise<User> => {
  const [result] = await db
    .execute<RowDataPacket[]>('SELECT * FROM Users WHERE id = ?', [id]);
  return result[0] as User;
};

const deleteUserById = async (id: string): Promise<void> => {
  const [result] = await db.execute<OkPacket>('DELETE FROM Users WHERE id = ?;', [id]);
  if (result.affectedRows === 0) throw new Error('NOT_FOUND');
};

export default {
  getAllUsers,
  createUser,
  getUserByEmail,
  updateUser,
  getUserById,
  deleteUserById,
};
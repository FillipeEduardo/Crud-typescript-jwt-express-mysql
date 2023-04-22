import { Router } from 'express';
import userController from '../controllers/user.controller';
import authMiddleware from '../middleware/authMiddleware';
import createUserMiddleware from '../middleware/createUserMiddleware';
import fieldsMiddleware from '../middleware/fieldsMiddleware';
import loginMiddleware from '../middleware/loginMiddleware';
import updateMiddleware from '../middleware/updateMiddleware';

const userRouter = Router();

userRouter
  .route('/users')
  .get(userController.getAllUsers)
  .post(createUserMiddleware, fieldsMiddleware, userController.CreateUser);

userRouter.post('/login', loginMiddleware, userController.login);

userRouter
  .route('/users/:id')
  .get(authMiddleware, userController.getUserById)
  .delete(authMiddleware, userController.deleteUserById)
  .put(authMiddleware, updateMiddleware, userController.updateUser);

export default userRouter;
import { Router } from 'express';
import userController from '../controllers/user.controller';
import createUserMiddleware from '../middleware/createUserMiddleware';

const userRouter = Router();

userRouter.get('/users', userController.getAllUsers);
userRouter.post('/users', createUserMiddleware, userController.CreateUser);

export default userRouter;
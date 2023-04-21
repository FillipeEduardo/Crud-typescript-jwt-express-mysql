import { Router } from 'express';
import userController from '../controllers/user.controller';
import createUserMiddleware from '../middleware/createUserMiddleware';
import loginMiddleware from '../middleware/loginMiddleware';

const userRouter = Router();

userRouter.get('/users', userController.getAllUsers);
userRouter.post('/users', createUserMiddleware, userController.CreateUser);
userRouter.post('/login', loginMiddleware, userController.login);

export default userRouter;
import express from 'express';
import { editUser } from '../controllers/userController';
import { deleteUser } from '../controllers/userController';

const userRouter = express.Router();

userRouter.get('/edit', editUser);
userRouter.get('/delete', deleteUser);

export default userRouter;

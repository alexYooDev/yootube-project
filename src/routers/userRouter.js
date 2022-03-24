import express from 'express';
import {
  viewUser,
  editUser,
  deleteUser,
  logout,
} from '../controllers/userController';

const userRouter = express.Router();

userRouter.get(':id', viewUser);
userRouter.get('/edit', editUser);
userRouter.get('/delete', deleteUser);
userRouter.get('/logout', logout);

export default userRouter;

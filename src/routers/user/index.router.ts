import express from 'express';
import registerController from '../../controllers/user/register.controller';
import loginController from '../../controllers/user/login.controller';

const userRouter = express.Router();

userRouter.post('/register', registerController);
userRouter.post('/login', loginController);

export default userRouter;

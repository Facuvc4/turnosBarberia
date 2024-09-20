import express from 'express';
import dateRouter from './date/index.router';
import shiftRouter from './shift/index.router';
import userRouter from './user/index.router';
import homeRouter from './home/index.router';

const router = express.Router();

router.use('/',homeRouter)
router.use('/date', dateRouter);
router.use('/shift', shiftRouter);
router.use('/user', userRouter);

export default router;

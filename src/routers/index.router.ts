import express from 'express';
import dateRouter from './date/index.router';

const router = express.Router();

router.use('/date', dateRouter);

export default router;

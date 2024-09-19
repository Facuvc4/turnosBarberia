import express from 'express';
import createController from '../../controllers/shift/create.controller';

const shiftRouter = express.Router();

shiftRouter.post('/create', createController);

export default shiftRouter;

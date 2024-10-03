import express from 'express';
import createController from '../../controllers/shift/create.controller';
import deleteAllController from '../../controllers/shift/delete.all.controller';

const shiftRouter = express.Router();

shiftRouter.post('/create', createController);
shiftRouter.post('/delete_all', deleteAllController);

export default shiftRouter;

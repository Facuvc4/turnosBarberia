import express from 'express';
import createController from '../../controllers/date/create.controller';
import getAllController from '../../controllers/date/get.all.controller';
import deleteController from '../../controllers/date/delete.controller';

const dateRouter = express.Router();

dateRouter.post('/create', createController);
dateRouter.post('/delete', deleteController);
dateRouter.get('/', getAllController);

export default dateRouter;

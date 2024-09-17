import express from 'express';
import createController from '../../controllers/date/create.controller';
import getAllController from '../../controllers/date/get.all.controller';

const dateRouter = express.Router();

dateRouter.post('/create', createController);
dateRouter.get('/get', getAllController);

export default dateRouter;

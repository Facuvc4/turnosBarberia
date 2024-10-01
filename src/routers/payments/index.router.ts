import express from 'express';

import createOrderController from '../../controllers/payments/create.order.controller';
import webhookController from '../../controllers/payments/webhook.controller';

const paymentRouter = express.Router();

paymentRouter.post('/create_order', createOrderController);
paymentRouter.post('/webhook', webhookController);

export default paymentRouter;

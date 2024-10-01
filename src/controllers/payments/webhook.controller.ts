import { Request, Response, NextFunction } from 'express';
import webhookService from '../../services/payments/webhook.service';
import createShiftService from '../../services/shift/create.service';

const main = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const paymentID = req.query['data.id'];
    const data = await webhookService(paymentID as string);
    const [idDate, idUser] = data.external_reference.split('+');
    console.log(idDate, '+', idUser);
    await createShiftService(idDate, idUser);
    res.status(200).json({ message: 'ok' });
  } catch (error) {
    next(error);
  }
};

export default main;

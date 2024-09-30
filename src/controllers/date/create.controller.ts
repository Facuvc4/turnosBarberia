import { Response, Request, NextFunction } from 'express';
import createService from '../../services/date/create.service';

const main = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { date, initHour, endHour, barber } = req.body;
    await createService(date, initHour, endHour, barber);
    res.status(200).send('Horario guardado correctamente');
  } catch (error) {
    next(error);
  }
};

export default main;

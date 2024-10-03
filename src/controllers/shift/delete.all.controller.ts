import { Request, Response, NextFunction } from 'express';
import deleteAllService from '../../services/shift/delete.all.service';

const main = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await deleteAllService();
    res.status(200).send('Turnos eliminados correctamente');
  } catch (error) {
    next(error);
  }
};

export default main;

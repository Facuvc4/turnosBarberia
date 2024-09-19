import { Request, Response, NextFunction } from 'express';
import createService from '../../services/shift/create.service';

const main = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { idDate, idUser } = req.body;
    await createService(idDate, idUser);
    res.status(200).send('Turno guardado correctamente');
  } catch (error) {
    next(error);
  }
};

export default main;

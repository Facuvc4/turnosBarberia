import { Request, Response, NextFunction } from 'express';
import registerService from '../../services/user/register.service';
import errorHelper from '../../helpers/error.helper';

const main = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, phone, username, password } = req.body;
    const user = await registerService(name, phone, username, password);
    if (!user) errorHelper.internalServerError('Error al registrar el usuario');
    res.status(200).send('Usuario creado correctamente');
  } catch (error) {
    next(error);
  }
};

export default main;

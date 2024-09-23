import { Request, Response, NextFunction } from 'express';
import createService from '../../services/shift/create.service';
import jwt, { JwtPayload } from 'jsonwebtoken';

const main = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { idDate } = req.body;
    const token = req.cookies.token;
    if (!token) res.redirect('/login');
    const decoded = jwt.verify(
    token,
    process.env.JWT_SECRET as string
  ) as JwtPayload;
    await createService(idDate, decoded.id);
    res.status(200).send('Turno guardado correctamente');
  } catch (error) {
    next(error);
  }
};

export default main;

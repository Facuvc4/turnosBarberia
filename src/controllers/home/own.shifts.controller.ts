import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import ownShiftsService from '../../services/home/own.shifts.service';

const main = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies.token;
  if (!token) res.redirect('/login');
  const decoded = jwt.verify(
    token,
    process.env.JWT_SECRET as string
  ) as JwtPayload;
  const idUser = decoded.id;
  const dates = await ownShiftsService(idUser);
  res.render('ownShifts', { dates });
};

export default main;

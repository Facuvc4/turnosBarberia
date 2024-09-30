import { Request, Response, NextFunction } from 'express';
import allDatesService from '../../services/home/all.dates.service';
import jwt, { JwtPayload } from 'jsonwebtoken';
import userModel from '../../models/user.model';

const main = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies.token;
  if (!token) return res.redirect('/login');
  const decoded = jwt.verify(
    token,
    process.env.JWT_SECRET as string
  ) as JwtPayload;
  const idUser = decoded.id;
  const isAdmin = await userModel.findOne({ _id: idUser, role: 'admin' });
  if (isAdmin) return res.redirect('/');
  const dates = await allDatesService();
  res.render('all-dates', { dates, hideNavbar: false });
};

export default main;

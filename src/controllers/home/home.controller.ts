import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import userModel from '../../models/user.model';
import allShiftsService from '../../services/home/all.shifts.service';

const main = async (req: Request, res: Response, next: NextFunction) => {
  if (!req.cookies.token) return res.redirect('/login');
  const token = req.cookies.token;
  const decoded = jwt.verify(
    token,
    process.env.JWT_SECRET as string
  ) as JwtPayload;
  const idUser = decoded.id;
  const isAdmin = await userModel.findOne({ _id: idUser, role: 'admin' });
  if (isAdmin) {
    const datas = await allShiftsService();
    return res.render('./admin/admin', { datas, hideNavbar: false });
  }
  res.render('home', { hideNavbar: false });
};

export default main;

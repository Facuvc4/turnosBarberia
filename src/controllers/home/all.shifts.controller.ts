import { Request, Response, NextFunction } from 'express';
import allShiftsService from '../../services/home/all.shifts.service';

const main = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies.token;
  if (!token) res.redirect('/login');
  const dates = await allShiftsService();
  res.render('all-shifts', { dates, hideNavbar: false });
};

export default main;

import { Request, Response, NextFunction } from 'express';
import getDates from '../../helpers/date/get.all.helper';

const main = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies.token;
  if (!token) res.redirect('/login');
  const dates = await getDates();
  res.render('home', { dates });
};

export default main;

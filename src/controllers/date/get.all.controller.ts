import { Response, Request, NextFunction } from 'express';
import getAllDates from '../../helpers/date/get.all.helper';

const main = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = await getAllDates();
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

export default main;

import { Request, Response, NextFunction } from 'express';
import loginService from '../../services/user/login.service';

const main = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { username, password } = req.body;
    const token = await loginService(username, password);
    res.cookie('token', token, { httpOnly: true }).json({ token }).status(200);
  } catch (error) {
    next(error);
  }
};

export default main;

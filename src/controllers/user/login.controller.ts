import { Request, Response, NextFunction } from 'express';
import loginService from '../../services/user/login.service';
import userModel from '../../models/user.model';

const main = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { username, password } = req.body;
    const token = await loginService(username, password);
    res.cookie('token', token, { httpOnly: true }).status(200).json({ message: 'Sesión iniciada' });
  } catch (error) {
    next(error);
  }
};

export default main;

import { Request, Response, NextFunction } from 'express';
import registerService from '../../services/user/register.service';
import loginService from '../../services/user/login.service';

const main = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, phone, username, password } = req.body;
    await registerService(name, phone, username, password);
    const token = await loginService(username, password);
    res
      .cookie('token', token, { httpOnly: true })
      .status(200)
      .json({ message: 'Sesión iniciada' });
  } catch (error) {
    next(error);
  }
};

export default main;

import { Request, Response, NextFunction } from 'express';
import createOrderService from '../../services/payments/create.order.service';
import jwt, { JwtPayload } from 'jsonwebtoken';

const main = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { title, quantity, unit_price, idDate } = req.body;
    const token = req.cookies.token;
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET as string
    ) as JwtPayload;
    const idUser = decoded.id;
    const data = await createOrderService(
      title,
      parseInt(quantity),
      parseInt(unit_price),
      idDate,
      idUser
    );
    res.status(200).json({
      id: data?.id,
    });
  } catch (error) {
    next(error);
  }
};

export default main;

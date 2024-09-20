import userModel from '../../models/user.model';
import errorHelper from '../../helpers/error.helper';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const main = async (username: string, password: string) => {
  const user = await userModel.findOne({ username });
  if (!user) errorHelper.notFoundError('Usuario no encontrado');
  const isValid = await bcrypt.compare(password, user?.password ?? '');
  if (!isValid) errorHelper.badRequestError('Contraseña incorrecta');
  const durationToken = user?.role === 'admin' ? '1d' : '1h';
  const token = jwt.sign({ id: user?._id }, process.env.JWT_SECRET as string, {
    expiresIn: durationToken,
  });
  return token;
};

export default main;

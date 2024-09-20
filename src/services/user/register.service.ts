import usedrModel from '../../models/user.model';
import errorHelper from '../../helpers/error.helper';
import bcrypt from 'bcrypt';

const main = async (
  name: string,
  phone: number,
  username: string,
  password: string
) => {
  const alredyExist = await usedrModel.findOne({ username });
  if (alredyExist)
    errorHelper.badRequestError('El nombre de usuario ya existe');
  if (password.length < 6)
    errorHelper.badRequestError('La contraseña es muy corta');

  const hashPassword = await bcrypt.hash(password, 10);
  const newUser = await usedrModel.create({
    name,
    phone,
    username,
    password: hashPassword,
    role: 'user',
  });

  if (!newUser) errorHelper.internalServerError('Error al crear el usuario');
};

export default main;

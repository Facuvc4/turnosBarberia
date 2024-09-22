import errorHelper from '../../helpers/error.helper';
import shiftModel from '../../models/shift.model';
import getDate from '../../helpers/date/get.helper';
import mongoose from 'mongoose';
import dateModel from '../../models/date.model';

const main = async (
  idDate: mongoose.Schema.Types.ObjectId,
  idUser: mongoose.Schema.Types.ObjectId
) => {
  const date = await getDate(idDate);
  if (!date) errorHelper.badRequestError('Fecha no encontrada');

  const shift = await shiftModel.findOne({ idDate });
  if (shift) errorHelper.badRequestError('El turno ya existe');

  const newShift = await shiftModel.create({
    idDate,
    idUser,
  });
  await dateModel.updateOne({ _id: idDate }, { $set: { status: false } });
  if (!newShift) errorHelper.internalServerError('Error al crear el turno');
};

export default main;

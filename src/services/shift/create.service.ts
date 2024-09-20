import errorHelper from '../../helpers/error.helper';
import shiftModel from '../../models/shift.model';
import getDate from '../../helpers/date/get.helper';
import mongoose from 'mongoose';

const main = async (
  idDate: mongoose.Schema.Types.ObjectId,
  idUser: mongoose.Schema.Types.ObjectId
) => {
  const date = getDate(idDate);
  if (!date) errorHelper.badRequestError('Fecha no encontrada');

  const newDate = await shiftModel.updateOne(
    {
      idDate,
    },
    { $setOnInsert: { idUser } },
    { upsert: true }
  );
  if (!newDate) errorHelper.internalServerError('Error al crear el turno');
};

export default main;

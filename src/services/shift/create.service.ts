import errorHelper from '../../helpers/error.helper';
import shiftModel from '../../models/shift.model';
import getDate from '../../helpers/date/get.helper';
import mongoose from 'mongoose';

const main = async (
  idDate: mongoose.Schema.Types.ObjectId,
  idUser: mongoose.Schema.Types.ObjectId
) => {
  try {
    const date = getDate(idDate);
    if (!date) errorHelper.badRequestError('Fecha no encontrada');

    await shiftModel.updateOne(
      {
        idDate,
      },
      { $setOnInsert: { idUser } },
      { upsert: true }
    );
  } catch (error) {
    errorHelper.internalServerError('Error al crear el turno');
  }
};

export default main;

import errorHelper from '../../helpers/error.helper';
import dateModel from '../../models/date.model';
import mongoose from 'mongoose';
import shiftModel from '../../models/shift.model';

const main = async (idDate: mongoose.Schema.Types.ObjectId) => {
    const shift = await shiftModel.findOne({ idDate });
    if (shift) errorHelper.badRequestError('No se puede borrar el horario porque tiene un turno asignado');
    const result = await dateModel.deleteOne({ _id: idDate });
    if (result.deletedCount === 0) errorHelper.internalServerError('Error al borrar el horario');
}

export default main;
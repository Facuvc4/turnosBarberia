import mongoose from 'mongoose';
import shiftModel from '../../models/shift.model';
import dateModel from '../../models/date.model';

const main = async (idUser: mongoose.Schema.Types.ObjectId) => {
    const shifts = await shiftModel.find({ idUser: idUser });
    const dates = await dateModel.find({ _id: { $in: shifts.map(shift => shift.idDate) } });
    const formattedDates = dates.map(dateModel => {
        return {
          date: dateModel.date,
          initHour: dateModel.initHour,
          endHour: dateModel.endHour,
          status: dateModel.status,
          formattedDate: dateModel.date.toLocaleDateString('es-ES', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })
        };
      });

    return formattedDates;
}


export default main
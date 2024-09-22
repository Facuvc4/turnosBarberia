import mongoose from 'mongoose';
import shiftModel from '../../models/shift.model';
import dateModel from '../../models/date.model';
import moment from 'moment-timezone';

moment.locale('es');
const main = async (idUser: mongoose.Schema.Types.ObjectId) => {
  const shifts = await shiftModel.find({ idUser: idUser });
  const actualDate = moment().utc().startOf('day').toDate();

  const dates = await dateModel.find({
    _id: { $in: shifts.map((shift) => shift.idDate) },
    date: { $gte: actualDate },
  });
  const formattedDates = dates.map((dateModel) => {
    const localDate = moment
      .utc(dateModel.date)
      .format('D [de] MMMM [de] YYYY');
    return {
      date: dateModel.date,
      initHour: dateModel.initHour,
      endHour: dateModel.endHour,
      status: dateModel.status,
      formattedDate: localDate,
    };
  });

  return formattedDates;
};

export default main;

import shiftModel from '../../models/shift.model';
import dateModel from '../../models/date.model';
import moment from 'moment-timezone';

const main = async () => {
  const actualDate = moment().utc().startOf('day').toDate();
  const idDates = await dateModel.find({ date: { $lt: actualDate } }, '_id');
  for (const idDate of idDates) {
    await shiftModel.deleteMany({ idDate: idDate._id });
    await dateModel.deleteOne({ _id: idDate._id });
  }
};

export default main;

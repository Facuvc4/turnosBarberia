import shiftModel from '../../models/shift.model';
import dateModel from '../../models/date.model';
import moment from 'moment-timezone';

const main = async () => {
  const actualDate = moment().utc().startOf('day').toDate();
  await shiftModel.deleteMany({
    date: { $lt: actualDate },
  });
  await dateModel.deleteMany({
    date: { $lt: actualDate },
  });
};

export default main;

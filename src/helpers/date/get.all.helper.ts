import moment from 'moment-timezone';
import dateModel from '../../models/date.model';

const main = async () => {
  const actualDate = moment()
    .zone('America/Argentina/Buenos_Aires')
    .startOf('day')
    .toDate();

  const result = await dateModel
    .find({
      date: { $gte: actualDate },
    })
    .sort({ date: 1 });

  return result;
};

export default main;

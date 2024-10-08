import moment from 'moment-timezone';
import shiftModel from '../../models/shift.model';
import userModel from '../../models/user.model';
import allDatesService from './all.dates.service';

moment.locale('es');

const main = async () => {
  let datas = [];
  const formattedDates = await allDatesService();
  for (const date of formattedDates) {
    const shift = await shiftModel.findOne({ idDate: date.id });
    const user = await userModel.findOne({ _id: shift?.idUser });

    datas.push({
      date: {
        ...date,
      },
      user: {
        name: user?.name,
        phone: user?.phone,
      },
    });
  }

  return datas;
};

export default main;

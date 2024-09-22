import getDates from '../../helpers/date/get.all.helper';
import moment from 'moment-timezone';

moment.locale('es');

const main = async () => {
  const dates = await getDates();
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

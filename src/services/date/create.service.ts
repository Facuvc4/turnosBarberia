import errorHelper from '../../helpers/error.helper';
import dateModel from '../../models/date.model';
import moment from 'moment-timezone';

const main = async (
  date: string,
  initHour: number,
  endHour: number,
  barber: string
) => {
  try {
    const newDate = moment.tz(date, 'America/Argentina/Buenos_Aires');

    await dateModel.create({
      date: newDate,
      initHour: initHour,
      endHour: endHour,
      status: true,
      barber: barber,
    });
  } catch (error) {
    errorHelper.internalServerError('Error al crear el horario');
  }
};

export default main;

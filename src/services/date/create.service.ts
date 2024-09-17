import errorHelper from '../../helpers/error.helper';
import dateModel from '../../models/date.model';

const main = async (date: string, initHour: number, endHour: number) => {
  try {
    const newDate = new Date(date);
    const result = await dateModel.updateOne(
      {
        date: newDate,
        initHour: initHour,
        endHour: endHour,
        status: true,
      },
      { $set: { initHour, endHour, status: true } },
      { upsert: true }
    );

    console.log(result); // Log para ver si se crea correctamente
  } catch (error) {
    errorHelper.badRequestError('Error al crear el horario');
  }
};

export default main;

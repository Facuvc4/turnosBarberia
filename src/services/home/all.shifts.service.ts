import  getDates  from '../../helpers/date/get.all.helper';

const main = async () => {
    const dates = await getDates();
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
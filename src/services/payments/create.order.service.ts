import { Preference, MercadoPagoConfig } from 'mercadopago';
import errorHelper from '../../helpers/error.helper';

const main = async (
  title: string,
  quantity: number,
  unit_price: number,
  idDate: string,
  idUser: string
) => {
  try {
    const client = new MercadoPagoConfig({
      accessToken: process.env.MERCADO_PAGO_ACCESS_TOKEN as string,
    });
    const body = {
      items: [
        {
          id: idDate,
          title: title,
          quantity: quantity,
          currency_id: 'ARS',
          unit_price: unit_price,
        },
      ],
      back_urls: {
        success: 'https://www.facebook.com/',
        failure: 'https://www.instagram.com/?hl=es',
        pending: 'https://x.com/home',
      },
      auto_return: 'approved',
      external_reference: `${idDate}+${idUser}`,
      notification_url: process.env.MERCADO_PAGO_NOTIFICATION_URL as string,
    };

    const preference = new Preference(client);
    const result = await preference.create({ body });

    return result;
  } catch (error) {
    errorHelper.internalServerError('Error al crear la orden de pago');
  }
};

export default main;

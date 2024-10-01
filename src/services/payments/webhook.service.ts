import errorHelper from '../../helpers/error.helper';

const main = async (paymentID: string) => {
  const response = await fetch(
    `https://api.mercadopago.com/v1/payments/${paymentID}`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${process.env.MERCADO_PAGO_ACCESS_TOKEN}`,
      },
    }
  );
  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    errorHelper.internalServerError(
      'Error al obtener los datos de Mercado Pago'
    );
  }
};

export default main;

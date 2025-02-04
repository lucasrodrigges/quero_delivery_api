import axios from 'axios';

const { ASAAS_API_URL, ASAAS_API_KEY } = process.env;

const specialErrors = [{
  description: 'excede seu limite diário de saque disponível para hoje',
  label: 'Limite de saque diário excedido. Tente novamente amanhã.',
}];

const asaasErrors = {
  invalid_action: 'Não foi possível realizar esta ação. Tente novamente mais tarde.',
  invalid_cpfCnpj: 'CPF inválido. Verifique os dados e tente novamente.',
  'O CPF/CNPJ informado é inválido.': 'CPF inválido. Verifique os dados e tente novamente.',
  'O campo cpfCnpj informado é inválido.': 'CPF inválido. Verifique os dados e tente novamente.',
  'O mês de vencimento do cartão é invalido.': 'Mês de vencimento inválido.',
  'O cartão informado está expirado.': 'Cartão expirado.',
};

const fetchAsaas = async (
  url: string,
  method: 'GET' | 'PUT' | 'POST' | 'DELETE',
  body: any = undefined,
) => {
  console.log(url);

  try {
    const response = await axios({
      url: ASAAS_API_URL + url,
      method,
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        access_token: `$${ASAAS_API_KEY}`,
      },
      data: body,
    });

    return {
      data: response.data,
    };
  } catch (error) {
    console.log('fetchAsaas status =>', (error as any).response.status);

    const { data } = (error as any).response;

    console.log('fetchAsaas treated error =>', data);

    if (data && data.errors) {
      const [{ code, description }] = data.errors;
      console.log({ code, description });

      return {
        data: null,
        error: asaasErrors[description as keyof typeof asaasErrors]
          || asaasErrors[code as keyof typeof asaasErrors]
          || specialErrors.find((specialError) => (
            description.includes(specialError.description)
          ))?.label
          || 'Ocorreu um erro desconhecido. Tente novamente mais tarde.',
      };
    }

    return { error: 'Ocorreu um erro desconhecido. Tente novamente mais tarde.' };
  }
};

export interface CreateCustomerParams {
  name: string;
  email: string;
  cpfCnpj: string;
  mobilePhone: string;
  address: string;
  addressNumber: string;
  postalCode: string;
}

const createCustomer = async (body: CreateCustomerParams) => (
  fetchAsaas('/customers', 'POST', {
    ...body,
    notificationDisabled: true,
  })
);

const updateCustomer = async (id: string, body: CreateCustomerParams) => (
  fetchAsaas(`/customers/${id}`, 'PUT', {
    ...body,
    notificationDisabled: true,
  })
);

interface CreateChargeParams {
  customer: string;
  billingType: 'PIX' | 'CREDIT_CARD';
  value: number;
  dueDate: Date;
  description: string;
  externalReference: string;
}

const createPixCharge = async (body: CreateChargeParams) => (
  fetchAsaas('/payments', 'POST', body)
);

const getPixQRCode = async (id: string) => (
  fetchAsaas(`/payments/${id}/pixQrCode`, 'GET')
);

const getCustomerByCpfCnpj = async (cpfCnpj: string) => (
  fetchAsaas(`/customers?cpfCnpj=${cpfCnpj}`, 'GET')
);

export interface CreditCard {
  holderName: string;
  number: string;
  expiryMonth: string;
  expiryYear: string;
  ccv: string;
}

export interface CreditCardHolderInfo {
  name: string;
  email: string;
  cpfCnpj: string;
  postalCode: string;
  addressNumber: string;
  phone: string;
}

const deletePayment = async (id: string) => (
  fetchAsaas(`/payments/${id}`, 'DELETE')
);

interface CreateAsaasRefundParams {
  value: number;
  description: string;
}

const createAsaasRefund = async (id: string, data: CreateAsaasRefundParams) => (
  fetchAsaas(`/payments/${id}/refund`, 'POST', data)
);

export default {
  createCustomer,
  updateCustomer,
  createPixCharge,
  getPixQRCode,
  getCustomerByCpfCnpj,
  deletePayment,
  createAsaasRefund,
};

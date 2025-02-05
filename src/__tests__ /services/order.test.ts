import request from 'supertest';
import app from '../../app';
import {
  mockAllOrdersStats,
  mockCart, mockOrderInDB, mockPayment, mockTokenUser, mockUser,
} from '../mocks';
import server from '../../server';
import UserModel from '../../models/User';
import jose from '../../utils/jose';
import responses from '../../constants/responses';
import CartModel from '../../models/Cart';
import createCode from '../../utils/createCode';
import asaas from '../../services/external/asaas';
import OrderModel from '../../models/Order';
import allDbOrders from '../mocks/allDbOrders';

jest.mock('../../models/Order');
jest.mock('../../models/Cart');
jest.mock('../../models/User');
jest.mock('../../utils/bcrypt');
jest.mock('../../utils/jose');
jest.mock('../../utils/createCode');
jest.mock('../../services/external/asaas');

describe('OrderService', () => {
  beforeAll(() => {
    jest.clearAllMocks();
  });

  beforeEach(() => {
    (jose.decrypt as jest.Mock).mockResolvedValue({ user: mockTokenUser });
  });

  afterEach(() => {
    server.close();
  });

  describe('createOrderByUserId', () => {
    it('deve criar pedido para usuário autenticado com sucesso', async () => {
      (UserModel.findOne as jest.Mock).mockResolvedValue(mockUser);
      (CartModel.findOne as jest.Mock).mockResolvedValue(mockCart);
      (createCode as jest.Mock).mockReturnValue(mockOrderInDB.code);
      (asaas.createPixCharge as jest.Mock).mockResolvedValue({
        data: {
          id: mockPayment.externalId,
          value: mockPayment.value,
          status: mockPayment.status,
          dueDate: mockPayment.dueDate,
          invoiceUrl: mockPayment.invoiceUrl,
        },
      });
      (asaas.getPixQRCode as jest.Mock).mockResolvedValue({
        data: {
          payload: 'pix_payload_123',
          encodedImage: 'encoded_image_123',
          expirationDate: '2023-10-10T12:00:00Z',
        },
      });
      (CartModel.deleteOne as jest.Mock).mockResolvedValue(undefined);
      (OrderModel.create as jest.Mock).mockResolvedValue({
        ...mockOrderInDB,
        payment: {
          ...mockPayment,
        },
      });

      const res = await request(app)
        .post('/order/create')
        .set('Authorization', 'fake-token');

      expect(res.status).toBe(responses.CREATED.status);
      expect(res.body).toEqual({
        code: mockOrderInDB.code,
        status: mockOrderInDB.status,
        totalPrice: mockOrderInDB.totalPrice,
        products: mockOrderInDB.products,
        deliveryAddress: mockOrderInDB.deliveryAddress,
        pixPayload: mockOrderInDB.payment.pixPayload,
      });
    });

    it('deve lançar erro ao não achar usuário autenticado', async () => {
      (UserModel.findOne as jest.Mock).mockResolvedValue(null);

      const res = await request(app)
        .post('/order/create')
        .set('Authorization', 'fake-token');

      expect(res.status).toBe(responses.NOT_FOUND.status);
      expect(res.body).toEqual({ message: responses.NOT_FOUND.message });
    });

    it('deve lançar erro quando usuário ainda não criou carrinho', async () => {
      (UserModel.findOne as jest.Mock).mockResolvedValue(mockUser);
      (CartModel.findOne as jest.Mock).mockResolvedValue(null);

      const res = await request(app)
        .post('/order/create')
        .set('Authorization', 'fake-token');

      expect(res.status).toBe(responses.NOT_FOUND.status);
      expect(res.body).toEqual({ message: responses.NOT_FOUND.message });
    });

    it('deve lançar erro caso a cobrança pix não seja gerada no Asaas', async () => {
      (UserModel.findOne as jest.Mock).mockResolvedValue(mockUser);
      (CartModel.findOne as jest.Mock).mockResolvedValue(mockCart);
      (createCode as jest.Mock).mockReturnValue(mockOrderInDB.code);
      (asaas.createPixCharge as jest.Mock).mockResolvedValue({
        error: 'error',
      });

      const res = await request(app)
        .post('/order/create')
        .set('Authorization', 'fake-token');

      expect(res.status).toBe(responses.INTERNAL_SERVER_ERROR.status);
      expect(res.body).toEqual({ message: responses.INTERNAL_SERVER_ERROR.message });
    });
  });

  describe('getOrderStatsByUserId', () => {
    it('deve retornar as estatísticas dos pedidos do usuário autenticado com sucesso', async () => {
      const userId = '64f9b8a1e4b0a1a2b3c4d5e2';

      (OrderModel.find as jest.Mock).mockResolvedValue(allDbOrders
        .filter((order) => order.userId === userId));

      const res = await request(app)
        .get('/order/stats')
        .set('Authorization', 'fake-token');

      expect(res.status).toBe(responses.OK.status);
      expect(res.body).toEqual(mockAllOrdersStats);
    });

    it('deve lançar erro caso não encontre nenhuma order', async () => {
      (OrderModel.find as jest.Mock).mockResolvedValue([]);

      const res = await request(app)
        .get('/order/stats')
        .set('Authorization', 'fake-token');

      expect(res.status).toBe(responses.NOT_FOUND.status);
      expect(res.body).toEqual({ message: responses.NOT_FOUND.message });
    });
  });
});

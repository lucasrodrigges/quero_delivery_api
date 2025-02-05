import request from 'supertest';
import app from '../../app';
import {
  mockOrder, mockOrderStats, mockTokenUser,
} from '../mocks';
import jose from '../../utils/jose';
import responses from '../../constants/responses';
import CustomError from '../../types/CustomError';
import server from '../../server';
import OrderService from '../../services/Order';

jest.mock('../../services/Order');
jest.mock('../../utils/jose.ts');

describe('OrderController', () => {
  beforeAll(() => {
    jest.clearAllMocks();
  });

  beforeEach(() => {
    (jose.decrypt as jest.Mock).mockResolvedValue({ user: mockTokenUser });
  });

  afterAll(() => {
    server.close();
  });

  describe('createOrderByUserId', () => {
    it('deve criar pedido a partir do carrinho do usuário com sucesso', async () => {
      (OrderService.createOrderByUserId as jest.Mock).mockResolvedValue(mockOrder);

      const res = await request(app)
        .post('/order/create')
        .set('Authorization', 'fake-token');

      expect(res.status).toBe(responses.CREATED.status);
      expect(res.body).toEqual(mockOrder);
    });

    it('deve falhar ao criar pedido sem um carrinho existente', async () => {
      (OrderService.createOrderByUserId as jest.Mock).mockRejectedValue(
        new CustomError(responses.NOT_FOUND.message, responses.NOT_FOUND.status),
      );

      const res = await request(app)
        .post('/order/create')
        .set('Authorization', 'fake-token');

      expect(res.status).toBe(responses.NOT_FOUND.status);
      expect(res.body).toEqual({ message: responses.NOT_FOUND.message });
    });
  });

  describe('getOrderStatsByUserId', () => {
    it('deve trazer dados estatísticos sobre os pedidos do usuário autenticado', async () => {
      (OrderService.getOrderStatsByUserId as jest.Mock).mockResolvedValue(mockOrderStats);

      const res = await request(app)
        .get('/order/stats')
        .set('Authorization', 'fake-token');

      expect(res.status).toBe(responses.OK.status);
      expect(res.body).toEqual(mockOrderStats);
    });

    it('deve falhar caso o usuário ainda não tenha feito nenhum pedido', async () => {
      (OrderService.getOrderStatsByUserId as jest.Mock).mockRejectedValue(
        new CustomError(responses.NOT_FOUND.message, responses.NOT_FOUND.status),
      );

      const res = await request(app)
        .get('/order/stats')
        .set('Authorization', 'fake-token');

      expect(res.status).toBe(responses.NOT_FOUND.status);
      expect(res.body).toEqual({ message: responses.NOT_FOUND.message });
    });
  });
});

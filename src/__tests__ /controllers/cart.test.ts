import request from 'supertest';
import app from '../../app';
import CartService from '../../services/Cart';
import { mockCart, mockInsertCart, mockTokenUser } from '../mocks';
import jose from '../../utils/jose';
import responses from '../../constants/responses';
import CustomError from '../../types/CustomError';
import server from '../../server';

jest.mock('../../services/Cart');
jest.mock('../../utils/jose.ts');

describe('CartController', () => {
  beforeAll(() => {
    jest.clearAllMocks();
  });

  beforeEach(() => {
    (jose.decrypt as jest.Mock).mockResolvedValue({ user: mockTokenUser });
  });

  afterAll(() => {
    server.close();
  });

  describe('getCartByUserId', () => {
    it('deve retornar o carrinho do usuário', async () => {
      const { status } = responses.OK;

      (CartService.getCartByUserId as jest.Mock).mockResolvedValue(mockCart);

      const res = await request(app)
        .get('/cart')
        .set('Authorization', 'fake-token');

      expect(res.status).toBe(status);
      expect(res.body).toEqual(mockCart);
    });

    it('deve falhar ao tentar buscar carrinho inexistente', async () => {
      const { status, message } = responses.NOT_FOUND;

      (CartService.getCartByUserId as jest.Mock).mockRejectedValue(
        new CustomError(message, status),
      );

      const res = await request(app)
        .get('/cart')
        .set('Authorization', 'fake-token');

      expect(res.status).toBe(status);
      expect(res.body).toEqual({ message });
    });
  });

  describe('upsertCartByUserId', () => {
    it('deve atualizar ou inserir o carrinho e retornar 200', async () => {
      const { message, status } = responses.OK;

      (CartService.upsertCartByUserId as jest.Mock).mockResolvedValue(undefined);

      const res = await request(app)
        .post('/cart/upsert')
        .set('Authorization', 'fake-token')
        .send(mockInsertCart);

      expect(res.status).toBe(status);
      expect(res.body).toEqual({ message });
    });

    it('deve falhar ao tentar fazer upsert com `restaurantId` inexistente', async () => {
      (CartService.upsertCartByUserId as jest.Mock).mockRejectedValue(
        new CustomError(responses.NOT_FOUND.message, responses.NOT_FOUND.status),
      );

      const res = await request(app)
        .post('/cart/upsert')
        .set('Authorization', 'fake-token')
        .send({
          ...mockInsertCart,
          restaurantId: '64f8b4a2e4b0d12a3f8b4244',
        });

      expect(res.status).toBe(responses.NOT_FOUND.status);
      expect(res.body).toEqual({ message: responses.NOT_FOUND.message });
    });
  });

  describe('removeCartByUserId', () => {
    it('deve remover o carrinho e retornar 200', async () => {
      (CartService.removeCartByUserId as jest.Mock).mockResolvedValue(undefined);

      const res = await request(app)
        .delete('/cart/delete')
        .set('Authorization', 'fake-token');

      expect(res.status).toBe(responses.OK.status);
      expect(res.body).toEqual({ message: responses.OK.message });
    });

    it('deve falhar ao tentar remover o carrinho inexistente', async () => {
      (CartService.removeCartByUserId as jest.Mock).mockRejectedValue(
        new CustomError(responses.NOT_FOUND.message, responses.NOT_FOUND.status),
      );

      const res = await request(app)
        .delete('/cart/delete')
        .set('Authorization', 'fake-token');

      expect(res.status).toBe(responses.NOT_FOUND.status);
      expect(res.body).toEqual({ message: responses.NOT_FOUND.message });
    });
  });
});

import request from 'supertest';
import {
  mockCart, mockCartInsert, mockRestaurant, mockTokenUser, mockUser,
} from '../mocks';
import server from '../../server';
import CartModel from '../../models/Cart';
import responses from '../../constants/responses';
import app from '../../app';
import jose from '../../utils/jose';
import UserModel from '../../models/User';
import { RestaurantModel } from '../../models/Restaurant';

jest.mock('../../models/Cart');
jest.mock('../../models/User');
jest.mock('../../models/Restaurant');
jest.mock('../../utils/bcrypt');
jest.mock('../../utils/jose');

describe('CartService', () => {
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
    it('deve encontrar o carrinho do usuário com sucesso', async () => {
      (CartModel.findOne as jest.Mock).mockResolvedValue(mockCart);

      const res = await request(app)
        .get('/cart')
        .set('Authorization', 'fake-token');

      expect(res.status).toBe(responses.OK.status);
      expect(res.body).toEqual(mockCart);
      expect(CartModel.findOne).toHaveBeenCalledWith({
        userId: mockCart.userId,
      });
    });

    it('deve falhar ao não encontrar carrinho', async () => {
      (CartModel.findOne as jest.Mock).mockResolvedValue(null);

      const res = await request(app)
        .get('/cart')
        .set('Authorization', 'fake-token');

      expect(res.status).toBe(responses.NOT_FOUND.status);
      expect(res.body).toEqual({ message: responses.NOT_FOUND.message });
    });
  });

  describe('upsertCartByUserId', () => {
    it('deve criar o carrinho com sucesso', async () => {
      (UserModel.findOne as jest.Mock).mockResolvedValue(mockUser);
      (CartModel.findOne as jest.Mock).mockResolvedValue(null);
      (RestaurantModel.findById as jest.Mock).mockResolvedValue(mockRestaurant);
      (CartModel.findOneAndUpdate as jest.Mock).mockResolvedValue(undefined);

      const res = await request(app)
        .post('/cart/upsert')
        .set('Authorization', 'fake-token')
        .send(mockCartInsert);

      expect(res.status).toBe(responses.OK.status);
      expect(res.body).toEqual({ message: responses.OK.message });
      expect(UserModel.findOne).toHaveBeenCalledWith({ _id: mockTokenUser.id });
      expect(CartModel.findOne).toHaveBeenCalledWith({ userId: mockTokenUser.id });
      expect(RestaurantModel.findById).toHaveBeenCalledWith(mockCartInsert.restaurantId);
      expect(CartModel.findOneAndUpdate).toHaveBeenCalledWith(
        { userId: mockTokenUser.id },
        {
          $set: {
            ...mockCartInsert,
            userId: mockTokenUser.id,
            totalPrice: 90.8,
          },
        },
        { upsert: true },
      );
    });

    it('deve atualizar o carrinho com sucesso', async () => {
      (UserModel.findOne as jest.Mock).mockResolvedValue(mockUser);
      (CartModel.findOne as jest.Mock).mockResolvedValue(mockCart);
      (RestaurantModel.findById as jest.Mock).mockResolvedValue(mockRestaurant);
      (CartModel.findOneAndUpdate as jest.Mock).mockResolvedValue(undefined);

      const res = await request(app)
        .post('/cart/upsert')
        .set('Authorization', 'fake-token')
        .send(mockCartInsert);

      expect(res.status).toBe(responses.OK.status);
      expect(res.body).toEqual({ message: responses.OK.message });
      expect(UserModel.findOne).toHaveBeenCalledWith({ _id: mockTokenUser.id });
      expect(CartModel.findOne).toHaveBeenCalledWith({ userId: mockTokenUser.id });
      expect(RestaurantModel.findById).toHaveBeenCalledWith(mockCartInsert.restaurantId);
      expect(CartModel.findOneAndUpdate).toHaveBeenCalledWith(
        { userId: mockTokenUser.id },
        {
          $set: {
            ...mockCartInsert,
            id: mockCart._id,
            userId: mockTokenUser.id,
            totalPrice: 90.8,
          },
        },
        { upsert: true },
      );
    });

    it('deve lançar erro se não encontrar usuário autenticado', async () => {
      (UserModel.findOne as jest.Mock).mockResolvedValue(null);

      const res = await request(app)
        .post('/cart/upsert')
        .set('Authorization', 'fake-token')
        .send(mockCartInsert);

      expect(res.status).toBe(responses.NOT_FOUND.status);
      expect(res.body).toEqual({ message: responses.NOT_FOUND.message });
    });

    it('deve lançar erro se não encontrar restaurante no db', async () => {
      (UserModel.findOne as jest.Mock).mockResolvedValue(mockUser);
      (CartModel.findOne as jest.Mock).mockResolvedValue(null);
      (RestaurantModel.findById as jest.Mock).mockResolvedValue(null);

      const res = await request(app)
        .post('/cart/upsert')
        .set('Authorization', 'fake-token')
        .send(mockCartInsert);

      expect(res.status).toBe(responses.NOT_FOUND.status);
      expect(res.body).toEqual({ message: responses.NOT_FOUND.message });
    });

    it('deve lançar erro se houver algum produto que não seja daquele restaurante', async () => {
      (UserModel.findOne as jest.Mock).mockResolvedValue(mockUser);
      (CartModel.findOne as jest.Mock).mockResolvedValue(null);
      (RestaurantModel.findById as jest.Mock).mockResolvedValue({
        ...mockRestaurant,
        products: [],
      });

      const res = await request(app)
        .post('/cart/upsert')
        .set('Authorization', 'fake-token')
        .send(mockCartInsert);

      expect(res.status).toBe(responses.BAD_REQUEST.status);
      expect(res.body).toEqual({ message: responses.BAD_REQUEST.message });
    });
  });

  describe('removeCartByUserId', () => {
    it('deve remover o carrinho e retornar 200', async () => {
      (CartModel.findOneAndDelete as jest.Mock).mockResolvedValue(mockCart);

      const res = await request(app)
        .delete('/cart/delete')
        .set('Authorization', 'fake-token');

      expect(res.status).toBe(responses.OK.status);
      expect(res.body).toEqual({ message: responses.OK.message });
    });

    it('deve falhar ao tentar remover o carrinho inexistente', async () => {
      (CartModel.findOneAndDelete as jest.Mock).mockResolvedValue(null);

      const res = await request(app)
        .delete('/cart/delete')
        .set('Authorization', 'fake-token');

      expect(res.status).toBe(responses.NOT_FOUND.status);
      expect(res.body).toEqual({ message: responses.NOT_FOUND.message });
    });
  });
});

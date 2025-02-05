import request from 'supertest';
import app from '../../app';
import { mockRestaurant, mockRestaurantProducts, mockTokenUser } from '../mocks';
import jose from '../../utils/jose';
import responses from '../../constants/responses';
import server from '../../server';
import RestaurantService from '../../services/Restaurant';
import CustomError from '../../types/CustomError';

jest.mock('../../services/Restaurant');
jest.mock('../../utils/jose.ts');

describe('RestaurantController', () => {
  beforeAll(() => {
    jest.clearAllMocks();
  });

  beforeEach(() => {
    (jose.decrypt as jest.Mock).mockResolvedValue({ user: mockTokenUser });
  });

  afterAll(() => {
    server.close();
  });

  describe('getRestaurantProducts', () => {
    it('deve trazer produtos do restaurante com sucesso', async () => {
      (RestaurantService.getRestaurantProducts as jest.Mock)
        .mockResolvedValue(mockRestaurantProducts);

      const res = await request(app)
        .get(`/restaurant/${mockRestaurant._id}/products`)
        .set('Authorization', 'fake-token');

      expect(res.status).toBe(responses.OK.status);
      expect(res.body).toEqual(mockRestaurantProducts);
    });

    it('deve falhar ao tentar buscar produtos do restaurante inexistente', async () => {
      (RestaurantService.getRestaurantProducts as jest.Mock).mockRejectedValue(
        new CustomError(responses.NOT_FOUND.message, responses.NOT_FOUND.status),
      );

      const res = await request(app)
        .get('/restaurant/{INVALID_ID}/products')
        .set('Authorization', 'fake-token');

      expect(res.status).toBe(responses.NOT_FOUND.status);
      expect(res.body).toEqual({ message: responses.NOT_FOUND.message });
    });
  });
});

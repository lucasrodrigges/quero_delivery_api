import request from 'supertest';
import app from '../../app';
import { fakeToken, mockUser } from '../mocks';
import server from '../../server';
import UserModel from '../../models/User';
import bcrypt from '../../utils/bcrypt';
import jose from '../../utils/jose';
import responses from '../../constants/responses';

jest.mock('../../models/User');
jest.mock('../../utils/bcrypt');
jest.mock('../../utils/jose');

describe('AuthService', () => {
  beforeAll(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    server.close();
  });

  describe('login', () => {
    it('deve chamar corretamente as funções para regra de negócio', async () => {
      (UserModel.findOne as jest.Mock).mockResolvedValue(mockUser);
      (bcrypt.comparePassword as jest.Mock).mockResolvedValue(true);
      (jose.encrypt as jest.Mock).mockResolvedValue(fakeToken.token);

      const res = await request(app).post('/auth/login').send({
        email: mockUser.email,
        password: mockUser.password,
      });

      expect(res.status).toBe(responses.OK.status);
      expect(res.body).toEqual(fakeToken);
      expect(UserModel.findOne).toHaveBeenCalledWith({
        email: mockUser.email,
      });
      expect(bcrypt.comparePassword).toHaveBeenCalledWith(
        mockUser.password,
        mockUser.password,
      );
      expect(jose.encrypt).toHaveBeenCalledWith({
        user: {
          email: mockUser.email,
          id: mockUser._id,
          name: mockUser.name,
        },
      });
    });

    it('deve falhar ao tentar fazer login com credenciais inválidas', async () => {
      (UserModel.findOne as jest.Mock).mockResolvedValue(mockUser);
      (bcrypt.comparePassword as jest.Mock).mockResolvedValue(false);

      const res = await request(app).post('/auth/login').send({
        email: mockUser.email,
        password: mockUser.password,
      });

      expect(res.status).toBe(responses.UNAUTHORIZED.status);
      expect(res.body).toEqual({ message: responses.UNAUTHORIZED.message });
    });

    it('deve falhar caso não encontre o usuário', async () => {
      (UserModel.findOne as jest.Mock).mockResolvedValue(null);

      const res = await request(app).post('/auth/login').send({
        email: mockUser.email,
        password: mockUser.password,
      });

      expect(res.status).toBe(responses.NOT_FOUND.status);
      expect(res.body).toEqual({ message: responses.NOT_FOUND.message });
    });
  });
});

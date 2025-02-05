import request from 'supertest';
import app from '../../app';
import AuthService from '../../services/Auth';
import UserService from '../../services/User';
import responses from '../../constants/responses';
import { fakeToken, mockInsertUser } from '../mocks';
import CustomError from '../../types/CustomError';
import server from '../../server';

jest.mock('../../services/Auth.ts');
jest.mock('../../services/User');

describe('AuthController', () => {
  beforeAll(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    server.close();
  });

  describe('login', () => {
    it('deve retornar sucesso ao fazer login', async () => {
      (AuthService.login as jest.Mock).mockResolvedValue(fakeToken);

      const res = await request(app).post('/auth/login').send({
        email: mockInsertUser.email,
        password: mockInsertUser.password,
      });

      expect(res.status).toBe(200);
      expect(res.body).toEqual(fakeToken);
    });

    it('deve chamar next com erro ao falhar login', async () => {
      (AuthService.login as jest.Mock).mockRejectedValue(new Error('Invalid credentials'));

      const res = await request(app).post('/auth/login').send({
        email: mockInsertUser.email,
        password: 'senha-errada',
      });

      expect(res.status).not.toBe(200);
    });
  });

  describe('createUser', () => {
    it('deve criar um usuário e retornar 201', async () => {
      (UserService.createUser as jest.Mock).mockResolvedValue(fakeToken);

      const res = await request(app).post('/auth/create').send(mockInsertUser);

      expect(res.status).toBe(responses.CREATED.status);
      expect(res.body).toEqual(fakeToken);
    });

    it('deve chamar next com erro ao falhar na criação do usuário', async () => {
      const { status, message } = responses.INVALID_VALUES;
      (UserService.createUser as jest.Mock).mockRejectedValue(new CustomError(message, status));

      const res = await request(app).post('/auth/create').send({
        ...mockInsertUser,
        password: '123',
      });

      expect(res.status).toBe(status);
      expect(res.body).toEqual({ message });
    });
  });
});

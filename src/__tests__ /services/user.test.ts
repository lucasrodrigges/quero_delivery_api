import request from 'supertest';
import app from '../../app';
import { fakeToken, mockInsertUser, mockUser } from '../mocks';
import server from '../../server';
import UserModel from '../../models/User';
import bcrypt from '../../utils/bcrypt';
import jose from '../../utils/jose';
import responses from '../../constants/responses';
import asaas from '../../services/external/asaas';

jest.mock('../../models/User');
jest.mock('../../utils/bcrypt');
jest.mock('../../utils/jose');
jest.mock('../../services/external/asaas');

describe('UserService', () => {
  beforeAll(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    server.close();
  });

  describe('createUser', () => {
    it('deve chamar corretamente as funções para regra de negócio', async () => {
      (UserModel.findOne as jest.Mock).mockResolvedValue(null);
      (asaas.createCustomer as jest.Mock).mockResolvedValue({
        data: {
          id: mockUser.customerId,
        },
      });
      (bcrypt.hashPassword as jest.Mock).mockResolvedValue(mockUser.password);
      (UserModel.create as jest.Mock).mockResolvedValue(mockUser);
      (jose.encrypt as jest.Mock).mockResolvedValue(fakeToken.token);

      const res = await request(app)
        .post('/auth/create')
        .send(mockInsertUser);

      expect(res.status).toBe(responses.CREATED.status);
      expect(res.body).toEqual(fakeToken);
      expect(UserModel.findOne).toHaveBeenCalledWith({
        $or: [
          { cpf: mockInsertUser.cpf },
          { email: mockInsertUser.email },
          { phone: mockInsertUser.phone },
        ],
      });
      expect(bcrypt.hashPassword).toHaveBeenCalledWith(
        mockInsertUser.password,
      );
      expect(jose.encrypt).toHaveBeenCalledWith({
        user: {
          email: mockUser.email,
          id: mockUser._id,
          name: mockUser.name,
        },
      });
    });

    it('deve lançar erro ao encontrar usuário existente', async () => {
      (UserModel.findOne as jest.Mock).mockResolvedValue(mockUser);

      const res = await request(app)
        .post('/auth/create')
        .send(mockInsertUser);

      expect(res.status).toBe(responses.CONFLICT.status);
      expect(res.body).toEqual({ message: responses.CONFLICT.message });
    });

    it('deve lançar erro ao não conseguir criar cliente no Asaas', async () => {
      (UserModel.findOne as jest.Mock).mockResolvedValue(null);
      (asaas.createCustomer as jest.Mock).mockResolvedValue({
        error: 'Não foi possível criar o cliente',
      });

      const res = await request(app)
        .post('/auth/create')
        .send(mockInsertUser);

      expect(res.status).toBe(responses.BAD_REQUEST.status);
      expect(res.body).toEqual({ message: responses.BAD_REQUEST.message });
    });
  });
});

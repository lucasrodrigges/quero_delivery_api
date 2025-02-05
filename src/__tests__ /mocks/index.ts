import { z } from 'zod';
import { createUserSchema } from '../../schemas/auth';

export const fakeToken = {
  token: 'fake-token',
};

export const mockInsertUser: z.infer<typeof createUserSchema> = {
  name: 'John Doe',
  email: 'john@gmail.com',
  password: '123456',
  confirmPassword: '123456',
  addresses: [{
    zipCode: '49042430',
    street: 'Avenida Brasil',
    number: '456',
    complement: 'Casa 2',
    district: 'Centro',
    city: 'Rio de Janeiro',
    state: 'RJ',
  }],
  cpf: '76344666382',
  phone: '42984560921',
};

export const mockTokenUser = {
  id: '67a33e59209dc8f0e2d809e8',
  name: 'John Doe',
  email: 'john@gmail.com',
};

export const mockUser = {
  _id: {
    $oid: '67a33e59209dc8f0e2d809e8',
  },
  name: 'Antônia Joana Gabriela Drumond',
  cpf: '01986161471',
  email: 'antoniajoanadrumond@helponline-sti.com',
  password: '$2b$10$faF4IRihvF7httE00k2zl.E0i2RKzsJWy3Cze3ihjy9O7/.bt98V.',
  customerId: 'cus_000006492150',
  addresses: [
    {
      zipCode: '58807665',
      street: 'Rua João Rocha',
      number: '445',
      district: 'Alto do Capanema',
      city: 'Sousa',
      state: 'PB',
      _id: {
        $oid: '67a33e59209dc8f0e2d809e9',
      },
    },
  ],
  createdAt: {
    $date: '2025-02-05T10:32:57.138Z',
  },
  updatedAt: {
    $date: '2025-02-05T10:32:57.138Z',
  },
  __v: 0,
};

export const mockInsertCart = {
  restaurantId: '64f8b4a2e4b0d12a3f8b4567',
  deliveryAddress: {
    zipCode: '49042430',
    street: 'Rua Jorge Ramos da Silva',
    number: '46',
    district: 'São Conrado',
    city: 'Aracaju',
    state: 'SE',
  },
  products: [{
    productId: '64f8c1a2e4b0d12a3f8b1001',
    quantity: 2,
    userObservation: 'Trocar couve por porção de farofa',
  }, {
    productId: '64f8c1a2e4b0d12a3f8b1005',
    quantity: 1,
  }, {
    productId: '64f8c1a2e4b0d12a3f8b1004',
    quantity: 3,
  }],
};

export const mockCart = {
  _id: '67a33e77209dc8f0e2d809f4',
  userId: '67a33e59209dc8f0e2d809e8',
  restaurantId: '64f8b4a2e4b0d12a3f8b4567',
  totalPrice: 90.8,
  deliveryAddress: {
    zipCode: '49042430',
    street: 'Rua Jorge Ramos da Silva',
    number: '46',
    district: 'São Conrado',
    city: 'Aracaju',
    state: 'SE',
    _id: '67a33e77209dc8f0e2d809f5',
  },
  products: [
    {
      productId: '64f8c1a2e4b0d12a3f8b1001',
      quantity: 2,
      userObservation: 'Trocar couve por porção de farofa',
      _id: '67a33e77209dc8f0e2d809f6',
    },
    {
      productId: '64f8c1a2e4b0d12a3f8b1005',
      quantity: 1,
      _id: '67a33e77209dc8f0e2d809f7',
    },
    {
      productId: '64f8c1a2e4b0d12a3f8b1004',
      quantity: 3,
      _id: '67a33e77209dc8f0e2d809f8',
    },
  ],
  __v: 0,
};

export const mockCartInsert = {
  restaurantId: '64f8b4a2e4b0d12a3f8b4567',
  deliveryAddress: {
    zipCode: '49042430',
    street: 'Rua Jorge Ramos da Silva',
    number: '46',
    district: 'São Conrado',
    city: 'Aracaju',
    state: 'SE',
  },
  products: [{
    productId: '64f8c1a2e4b0d12a3f8b1001',
    quantity: 2,
    userObservation: 'Trocar couve por porção de farofa',
  }, {
    productId: '64f8c1a2e4b0d12a3f8b1005',
    quantity: 1,
  }, {
    productId: '64f8c1a2e4b0d12a3f8b1004',
    quantity: 3,
  }],
};

export const mockOrder = {
  code: 'SJNYWUUH',
  status: 'PENDING',
  totalPrice: 90.8,
  products: [
    {
      productId: '64f8c1a2e4b0d12a3f8b1001',
      quantity: 2,
      userObservation: 'Trocar couve por porção de farofa',
      _id: '67a33e77209dc8f0e2d809f6',
    },
    {
      productId: '64f8c1a2e4b0d12a3f8b1005',
      quantity: 1,
      _id: '67a33e77209dc8f0e2d809f7',
    },
    {
      productId: '64f8c1a2e4b0d12a3f8b1004',
      quantity: 3,
      _id: '67a33e77209dc8f0e2d809f8',
    },
  ],
  deliveryAddress: {
    zipCode: '49042430',
    street: 'Rua Jorge Ramos da Silva',
    number: '46',
    district: 'São Conrado',
    city: 'Aracaju',
    state: 'SE',
    _id: '67a33e77209dc8f0e2d809f5',
  },
  pixPayload: {
    payload: '00020101021226820014br.gov.bcb.pix2560qrpix-h.bradesco.com.br/9d36b84f-c70b-478f-b95c-12729b90ca25520400005303986540590.805802BR5905ASAAS6009JOINVILLE62070503***6304339D',
    encodedImage: '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',
    expirationDate: '2025-02-05 23:59:59',
    _id: '67a34a9d209dc8f0e2d80a06',
  },
};

export const mockOrderInDB = {
  _id: {
    $oid: '67a33e09209dc8f0e2d8097f',
  },
  code: '7YROT5',
  userId: '64f9b8a1e4b0a1a2b3c4d5e2',
  totalPrice: 53.9,
  status: 'PENDING',
  restaurantId: '64f8b4a2e4b0d12a3f8b4567',
  payment: {
    type: 'PIX',
    value: 53.9,
    status: 'PENDING',
    dueDate: '2023-10-10T12:00:00Z',
    externalId: 'pay_123456',
    invoiceUrl: 'https://example.com/invoice/123456',
    pixPayload: {
      payload: 'pix_payload_123',
      encodedImage: 'encoded_image_123',
      expirationDate: '2023-10-10T12:00:00Z',
      _id: {
        $oid: '67a33e09209dc8f0e2d80981',
      },
    },
    _id: {
      $oid: '67a33e09209dc8f0e2d80980',
    },
  },
  deliveryAddress: {
    zipCode: '01001000',
    street: 'Rua das Flores',
    number: '123',
    complement: 'Apto 101',
    district: 'Centro',
    city: 'São Paulo',
    state: 'SP',
    _id: {
      $oid: '67a33e09209dc8f0e2d80982',
    },
  },
  products: [
    {
      productId: '64f8c1a2e4b0d12a3f8b1001',
      quantity: 2,
      userObservation: 'Sem bacon, por favor.',
      _id: {
        $oid: '67a33e09209dc8f0e2d80983',
      },
    },
  ],
  __v: 0,
};

export const mockOrderStats = {
  general: {
    pendingOrders: 1,
    confirmedOrders: 0,
    deliveredOrders: 0,
    canceledOrders: 0,
    failedOrders: 0,
    mostPurchasedProductId: '64f8c1a2e4b0d12a3f8b1004',
    mostPurchasedRestaurantId: '64f8b4a2e4b0d12a3f8b4567',
    totalOrders: 1,
  },
  financialSummary: {
    totalSpent: 90.8,
    averagePerOrder: 90.8,
    mostExpensiveOrder: 90.8,
  },
  orderConversion: {
    conversionPercent: 0,
    cancellationPercent: 0,
  },
};

export const mockAllOrdersStats = {
  general: {
    pendingOrders: 4,
    confirmedOrders: 4,
    deliveredOrders: 4,
    canceledOrders: 4,
    failedOrders: 4,
    mostPurchasedProductId: '64f8c1a2e4b0d12a3f8b1001',
    mostPurchasedRestaurantId: '64f8b4a2e4b0d12a3f8b4567',
    totalOrders: 20,
  },
  financialSummary: {
    totalSpent: 1243.9,
    averagePerOrder: 62.19500000000001,
    mostExpensiveOrder: 113,
  },
  orderConversion: {
    conversionPercent: 40,
    cancellationPercent: 40,
  },
};

export const mockRestaurantProducts = {
  count: 5,
  products: [
    {
      name: 'Feijoada Completa',
      price: 25.9,
      category: 'Prato Principal',
      stock: 50,
      description: 'Feijoada completa com acompanhamentos.',
      image: 'https://example.com/feijoada.jpg',
      _id: '64f8c1a2e4b0d12a3f8b1001',
    },
    {
      name: 'Strogonoff de Frango',
      price: 22.5,
      category: 'Prato Principal',
      stock: 40,
      description: 'Strogonoff de frango com arroz e batata palha.',
      image: 'https://example.com/strogonoff.jpg',
      _id: '64f8c1a2e4b0d12a3f8b1002',
    },
    {
      name: 'Lasanha à Bolonhesa',
      price: 28,
      category: 'Prato Principal',
      stock: 30,
      description: 'Lasanha recheada com molho bolonhesa.',
      image: 'https://example.com/lasanha.jpg',
      _id: '64f8c1a2e4b0d12a3f8b1003',
    },
    {
      name: 'Suco de Laranja Natural',
      price: 8,
      category: 'Bebida',
      stock: 100,
      description: 'Suco de laranja natural.',
      image: 'https://example.com/suco.jpg',
      _id: '64f8c1a2e4b0d12a3f8b1004',
    },
    {
      name: 'Salada Caesar',
      price: 15,
      category: 'Entrada',
      stock: 20,
      description: 'Salada Caesar com frango grelhado.',
      image: 'https://example.com/salada.jpg',
      _id: '64f8c1a2e4b0d12a3f8b1005',
    },
  ],
};

export const mockRestaurant = {
  _id: '64f8b4a2e4b0d12a3f8b4567',
  name: 'Restaurante Sabor Caseiro',
  stars: 4,
  address: {
    zipCode: '12345-678',
    street: 'Rua das Flores',
    number: '123',
    district: 'Centro',
    city: 'Cidade Exemplo',
    state: 'EX',
  },
  logoImage: 'https://example.com/logo1.png',
  products: [
    {
      _id: '64f8c1a2e4b0d12a3f8b1001',
      name: 'Feijoada Completa',
      price: 25.90,
      category: 'Prato Principal',
      stock: 50,
      description: 'Feijoada completa com acompanhamentos.',
      image: 'https://example.com/feijoada.jpg',
    },
    {
      _id: '64f8c1a2e4b0d12a3f8b1002',
      name: 'Strogonoff de Frango',
      price: 22.50,
      category: 'Prato Principal',
      stock: 40,
      description: 'Strogonoff de frango com arroz e batata palha.',
      image: 'https://example.com/strogonoff.jpg',
    },
    {
      _id: '64f8c1a2e4b0d12a3f8b1003',
      name: 'Lasanha à Bolonhesa',
      price: 28.00,
      category: 'Prato Principal',
      stock: 30,
      description: 'Lasanha recheada com molho bolonhesa.',
      image: 'https://example.com/lasanha.jpg',
    },
    {
      _id: '64f8c1a2e4b0d12a3f8b1004',
      name: 'Suco de Laranja Natural',
      price: 8.00,
      category: 'Bebida',
      stock: 100,
      description: 'Suco de laranja natural.',
      image: 'https://example.com/suco.jpg',
    },
    {
      _id: '64f8c1a2e4b0d12a3f8b1005',
      name: 'Salada Caesar',
      price: 15.00,
      category: 'Entrada',
      stock: 20,
      description: 'Salada Caesar com frango grelhado.',
      image: 'https://example.com/salada.jpg',
    },
  ],
};

export const mockPayment = {
  type: 'PIX',
  value: 53.9,
  status: 'PENDING',
  dueDate: '2023-10-10T12:00:00Z',
  externalId: 'pay_123456',
  invoiceUrl: 'https://example.com/invoice/123456',
  pixPayload: {
    payload: 'pix_payload_123',
    encodedImage: 'encoded_image_123',
    expirationDate: '2023-10-10T12:00:00Z',
    _id: {
      $oid: '67a33e09209dc8f0e2d80981',
    },
  },
  _id: {
    $oid: '67a33e09209dc8f0e2d80980',
  },
};

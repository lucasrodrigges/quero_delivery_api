export default [{
  _id: {
    $oid: '67a38086e07669648cf95fdc',
  },
  code: 'UL99CA',
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
        $oid: '67a38086e07669648cf95fde',
      },
    },
    _id: {
      $oid: '67a38086e07669648cf95fdd',
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
      $oid: '67a38086e07669648cf95fdf',
    },
  },
  products: [
    {
      productId: '64f8c1a2e4b0d12a3f8b1001',
      quantity: 2,
      userObservation: 'Sem bacon, por favor.',
      _id: {
        $oid: '67a38086e07669648cf95fe0',
      },
    },
  ],
  __v: 0,
},
{
  _id: {
    $oid: '67a38086e07669648cf95fe1',
  },
  code: 'V0OU5G',
  userId: '64f9b8a1e4b0a1a2b3c4d5e2',
  totalPrice: 45.5,
  status: 'CONFIRMED',
  restaurantId: '64f8b4a2e4b0d12a3f8b4567',
  payment: {
    type: 'CREDIT_CARD',
    value: 45.5,
    status: 'CONFIRMED',
    dueDate: '2023-10-10T12:00:00Z',
    externalId: 'pay_123457',
    invoiceUrl: 'https://example.com/invoice/123457',
    _id: {
      $oid: '67a38086e07669648cf95fe2',
    },
  },
  deliveryAddress: {
    zipCode: '20040000',
    street: 'Avenida Brasil',
    number: '456',
    complement: 'Casa 2',
    district: 'Centro',
    city: 'Rio de Janeiro',
    state: 'RJ',
    _id: {
      $oid: '67a38086e07669648cf95fe3',
    },
  },
  products: [
    {
      productId: '64f8c1a2e4b0d12a3f8b1002',
      quantity: 1,
      userObservation: 'Extra molho, por favor.',
      _id: {
        $oid: '67a38086e07669648cf95fe4',
      },
    },
    {
      productId: '64f8c1a2e4b0d12a3f8b1004',
      quantity: 1,
      userObservation: 'Sem gelo.',
      _id: {
        $oid: '67a38086e07669648cf95fe5',
      },
    },
  ],
  __v: 0,
},
{
  _id: {
    $oid: '67a38086e07669648cf95fe6',
  },
  code: '2MKN8Y',
  userId: '64f9b8a1e4b0a1a2b3c4d5e2',
  totalPrice: 68,
  status: 'DELIVERED',
  restaurantId: '64f8b4a2e4b0d12a3f8b4567',
  payment: {
    type: 'DEBIT_CARD',
    value: 68,
    status: 'CONFIRMED',
    dueDate: '2023-10-10T12:00:00Z',
    externalId: 'pay_123458',
    invoiceUrl: 'https://example.com/invoice/123458',
    _id: {
      $oid: '67a38086e07669648cf95fe7',
    },
  },
  deliveryAddress: {
    zipCode: '30140000',
    street: 'Rua da Paz',
    number: '789',
    complement: 'Bloco B',
    district: 'Savassi',
    city: 'Belo Horizonte',
    state: 'MG',
    _id: {
      $oid: '67a38086e07669648cf95fe8',
    },
  },
  products: [
    {
      productId: '64f8c1a2e4b0d12a3f8b1003',
      quantity: 1,
      userObservation: 'Bem passada, por favor.',
      _id: {
        $oid: '67a38086e07669648cf95fe9',
      },
    },
    {
      productId: '64f8c1a2e4b0d12a3f8b1005',
      quantity: 1,
      userObservation: 'Sem croutons.',
      _id: {
        $oid: '67a38086e07669648cf95fea',
      },
    },
  ],
  __v: 0,
},
{
  _id: {
    $oid: '67a38086e07669648cf95feb',
  },
  code: '0W9MJ4',
  userId: '64f9b8a1e4b0a1a2b3c4d5e2',
  totalPrice: 113,
  status: 'CANCELED',
  restaurantId: '64f8b4a2e4b0d12a3f8b4568',
  payment: {
    type: 'PIX',
    value: 113,
    status: 'REFUNDED',
    dueDate: '2023-10-10T12:00:00Z',
    externalId: 'pay_123459',
    invoiceUrl: 'https://example.com/invoice/123459',
    pixPayload: {
      payload: 'pix_payload_456',
      encodedImage: 'encoded_image_456',
      expirationDate: '2023-10-10T12:00:00Z',
      _id: {
        $oid: '67a38086e07669648cf95fed',
      },
    },
    _id: {
      $oid: '67a38086e07669648cf95fec',
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
      $oid: '67a38086e07669648cf95fee',
    },
  },
  products: [
    {
      productId: '64f8c1a2e4b0d12a3f8b2001',
      quantity: 2,
      userObservation: 'Borda recheada.',
      _id: {
        $oid: '67a38086e07669648cf95fef',
      },
    },
    {
      productId: '64f8c1a2e4b0d12a3f8b2004',
      quantity: 1,
      userObservation: 'Gelada, por favor.',
      _id: {
        $oid: '67a38086e07669648cf95ff0',
      },
    },
  ],
  __v: 0,
},
{
  _id: {
    $oid: '67a38086e07669648cf95ff1',
  },
  code: '976OOH',
  userId: '64f9b8a1e4b0a1a2b3c4d5e2',
  totalPrice: 76,
  status: 'FAILED',
  restaurantId: '64f8b4a2e4b0d12a3f8b4568',
  payment: {
    type: 'CREDIT_CARD',
    value: 76,
    status: 'FAILED',
    dueDate: '2023-10-10T12:00:00Z',
    externalId: 'pay_123460',
    invoiceUrl: 'https://example.com/invoice/123460',
    _id: {
      $oid: '67a38086e07669648cf95ff2',
    },
  },
  deliveryAddress: {
    zipCode: '20040000',
    street: 'Avenida Brasil',
    number: '456',
    complement: 'Casa 2',
    district: 'Centro',
    city: 'Rio de Janeiro',
    state: 'RJ',
    _id: {
      $oid: '67a38086e07669648cf95ff3',
    },
  },
  products: [
    {
      productId: '64f8c1a2e4b0d12a3f8b2002',
      quantity: 1,
      userObservation: 'Sem cebola.',
      _id: {
        $oid: '67a38086e07669648cf95ff4',
      },
    },
    {
      productId: '64f8c1a2e4b0d12a3f8b2005',
      quantity: 1,
      userObservation: 'Extra chocolate.',
      _id: {
        $oid: '67a38086e07669648cf95ff5',
      },
    },
  ],
  __v: 0,
},
{
  _id: {
    $oid: '67a38086e07669648cf95ff6',
  },
  code: 'MVM85B',
  userId: '64f9b8a1e4b0a1a2b3c4d5e2',
  totalPrice: 40,
  status: 'PENDING',
  restaurantId: '64f8b4a2e4b0d12a3f8b4568',
  payment: {
    type: 'PIX',
    value: 40,
    status: 'PENDING',
    dueDate: '2023-10-10T12:00:00Z',
    externalId: 'pay_123461',
    invoiceUrl: 'https://example.com/invoice/123461',
    pixPayload: {
      payload: 'pix_payload_789',
      encodedImage: 'encoded_image_789',
      expirationDate: '2023-10-10T12:00:00Z',
      _id: {
        $oid: '67a38086e07669648cf95ff8',
      },
    },
    _id: {
      $oid: '67a38086e07669648cf95ff7',
    },
  },
  deliveryAddress: {
    zipCode: '30140000',
    street: 'Rua da Paz',
    number: '789',
    complement: 'Bloco B',
    district: 'Savassi',
    city: 'Belo Horizonte',
    state: 'MG',
    _id: {
      $oid: '67a38086e07669648cf95ff9',
    },
  },
  products: [
    {
      productId: '64f8c1a2e4b0d12a3f8b2003',
      quantity: 1,
      userObservation: 'Bem assada, por favor.',
      _id: {
        $oid: '67a38086e07669648cf95ffa',
      },
    },
  ],
  __v: 0,
},
{
  _id: {
    $oid: '67a38086e07669648cf95ffb',
  },
  code: '15Q201',
  userId: '64f9b8a1e4b0a1a2b3c4d5e2',
  totalPrice: 30,
  status: 'CONFIRMED',
  restaurantId: '64f8b4a2e4b0d12a3f8b4567',
  payment: {
    type: 'DEBIT_CARD',
    value: 30,
    status: 'CONFIRMED',
    dueDate: '2023-10-10T12:00:00Z',
    externalId: 'pay_123462',
    invoiceUrl: 'https://example.com/invoice/123462',
    _id: {
      $oid: '67a38086e07669648cf95ffc',
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
      $oid: '67a38086e07669648cf95ffd',
    },
  },
  products: [
    {
      productId: '64f8c1a2e4b0d12a3f8b1005',
      quantity: 2,
      userObservation: 'Sem molho Caesar.',
      _id: {
        $oid: '67a38086e07669648cf95ffe',
      },
    },
  ],
  __v: 0,
},
{
  _id: {
    $oid: '67a38086e07669648cf95fff',
  },
  code: '89C22U',
  userId: '64f9b8a1e4b0a1a2b3c4d5e2',
  totalPrice: 50,
  status: 'DELIVERED',
  restaurantId: '64f8b4a2e4b0d12a3f8b4568',
  payment: {
    type: 'CREDIT_CARD',
    value: 50,
    status: 'CONFIRMED',
    dueDate: '2023-10-10T12:00:00Z',
    externalId: 'pay_123463',
    invoiceUrl: 'https://example.com/invoice/123463',
    _id: {
      $oid: '67a38086e07669648cf96000',
    },
  },
  deliveryAddress: {
    zipCode: '20040000',
    street: 'Avenida Brasil',
    number: '456',
    complement: 'Casa 2',
    district: 'Centro',
    city: 'Rio de Janeiro',
    state: 'RJ',
    _id: {
      $oid: '67a38086e07669648cf96001',
    },
  },
  products: [
    {
      productId: '64f8c1a2e4b0d12a3f8b2004',
      quantity: 1,
      userObservation: 'Gelada, por favor.',
      _id: {
        $oid: '67a38086e07669648cf96002',
      },
    },
    {
      productId: '64f8c1a2e4b0d12a3f8b2005',
      quantity: 1,
      userObservation: 'Extra calda.',
      _id: {
        $oid: '67a38086e07669648cf96003',
      },
    },
  ],
  __v: 0,
},
{
  _id: {
    $oid: '67a38086e07669648cf96004',
  },
  code: 'DAT4QL',
  userId: '64f9b8a1e4b0a1a2b3c4d5e2',
  totalPrice: 90,
  status: 'CANCELED',
  restaurantId: '64f8b4a2e4b0d12a3f8b4567',
  payment: {
    type: 'PIX',
    value: 90,
    status: 'REFUNDED',
    dueDate: '2023-10-10T12:00:00Z',
    externalId: 'pay_123464',
    invoiceUrl: 'https://example.com/invoice/123464',
    pixPayload: {
      payload: 'pix_payload_101',
      encodedImage: 'encoded_image_101',
      expirationDate: '2023-10-10T12:00:00Z',
      _id: {
        $oid: '67a38086e07669648cf96006',
      },
    },
    _id: {
      $oid: '67a38086e07669648cf96005',
    },
  },
  deliveryAddress: {
    zipCode: '30140000',
    street: 'Rua da Paz',
    number: '789',
    complement: 'Bloco B',
    district: 'Savassi',
    city: 'Belo Horizonte',
    state: 'MG',
    _id: {
      $oid: '67a38086e07669648cf96007',
    },
  },
  products: [
    {
      productId: '64f8c1a2e4b0d12a3f8b1001',
      quantity: 3,
      userObservation: 'Extra farofa.',
      _id: {
        $oid: '67a38086e07669648cf96008',
      },
    },
  ],
  __v: 0,
},
{
  _id: {
    $oid: '67a38086e07669648cf96009',
  },
  code: '6O0QR7',
  userId: '64f9b8a1e4b0a1a2b3c4d5e2',
  totalPrice: 60,
  status: 'FAILED',
  restaurantId: '64f8b4a2e4b0d12a3f8b4568',
  payment: {
    type: 'DEBIT_CARD',
    value: 60,
    status: 'FAILED',
    dueDate: '2023-10-10T12:00:00Z',
    externalId: 'pay_123465',
    invoiceUrl: 'https://example.com/invoice/123465',
    _id: {
      $oid: '67a38086e07669648cf9600a',
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
      $oid: '67a38086e07669648cf9600b',
    },
  },
  products: [
    {
      productId: '64f8c1a2e4b0d12a3f8b2003',
      quantity: 1,
      userObservation: 'Borda recheada.',
      _id: {
        $oid: '67a38086e07669648cf9600c',
      },
    },
    {
      productId: '64f8c1a2e4b0d12a3f8b2004',
      quantity: 1,
      userObservation: 'Sem gelo.',
      _id: {
        $oid: '67a38086e07669648cf9600d',
      },
    },
  ],
  __v: 0,
},
{
  _id: {
    $oid: '67a38086e07669648cf9600e',
  },
  code: '1IKY7N',
  userId: '64f9b8a1e4b0a1a2b3c4d5e2',
  totalPrice: 45,
  status: 'PENDING',
  restaurantId: '64f8b4a2e4b0d12a3f8b4567',
  payment: {
    type: 'PIX',
    value: 45,
    status: 'PENDING',
    dueDate: '2023-10-10T12:00:00Z',
    externalId: 'pay_123466',
    invoiceUrl: 'https://example.com/invoice/123466',
    pixPayload: {
      payload: 'pix_payload_102',
      encodedImage: 'encoded_image_102',
      expirationDate: '2023-10-10T12:00:00Z',
      _id: {
        $oid: '67a38086e07669648cf96010',
      },
    },
    _id: {
      $oid: '67a38086e07669648cf9600f',
    },
  },
  deliveryAddress: {
    zipCode: '20040000',
    street: 'Avenida Brasil',
    number: '456',
    complement: 'Casa 2',
    district: 'Centro',
    city: 'Rio de Janeiro',
    state: 'RJ',
    _id: {
      $oid: '67a38086e07669648cf96011',
    },
  },
  products: [
    {
      productId: '64f8c1a2e4b0d12a3f8b1002',
      quantity: 1,
      userObservation: 'Sem creme de leite.',
      _id: {
        $oid: '67a38086e07669648cf96012',
      },
    },
    {
      productId: '64f8c1a2e4b0d12a3f8b1004',
      quantity: 1,
      userObservation: 'Sem açúcar.',
      _id: {
        $oid: '67a38086e07669648cf96013',
      },
    },
  ],
  __v: 0,
},
{
  _id: {
    $oid: '67a38086e07669648cf96014',
  },
  code: 'AI7BP8',
  userId: '64f9b8a1e4b0a1a2b3c4d5e2',
  totalPrice: 45.5,
  status: 'CONFIRMED',
  restaurantId: '64f8b4a2e4b0d12a3f8b4567',
  payment: {
    type: 'CREDIT_CARD',
    value: 45.5,
    status: 'CONFIRMED',
    dueDate: '2023-10-10T12:00:00Z',
    externalId: 'pay_123457',
    invoiceUrl: 'https://example.com/invoice/123457',
    _id: {
      $oid: '67a38086e07669648cf96015',
    },
  },
  deliveryAddress: {
    zipCode: '20040000',
    street: 'Avenida Brasil',
    number: '456',
    complement: 'Casa 2',
    district: 'Centro',
    city: 'Rio de Janeiro',
    state: 'RJ',
    _id: {
      $oid: '67a38086e07669648cf96016',
    },
  },
  products: [
    {
      productId: '64f8c1a2e4b0d12a3f8b1002',
      quantity: 1,
      userObservation: 'Extra molho, por favor.',
      _id: {
        $oid: '67a38086e07669648cf96017',
      },
    },
    {
      productId: '64f8c1a2e4b0d12a3f8b1004',
      quantity: 1,
      userObservation: 'Sem gelo.',
      _id: {
        $oid: '67a38086e07669648cf96018',
      },
    },
  ],
  __v: 0,
},
{
  _id: {
    $oid: '67a38086e07669648cf96019',
  },
  code: 'MEOXEI',
  userId: '64f9b8a1e4b0a1a2b3c4d5e2',
  totalPrice: 68,
  status: 'DELIVERED',
  restaurantId: '64f8b4a2e4b0d12a3f8b4567',
  payment: {
    type: 'DEBIT_CARD',
    value: 68,
    status: 'CONFIRMED',
    dueDate: '2023-10-10T12:00:00Z',
    externalId: 'pay_123458',
    invoiceUrl: 'https://example.com/invoice/123458',
    _id: {
      $oid: '67a38086e07669648cf9601a',
    },
  },
  deliveryAddress: {
    zipCode: '30140000',
    street: 'Rua da Paz',
    number: '789',
    complement: 'Bloco B',
    district: 'Savassi',
    city: 'Belo Horizonte',
    state: 'MG',
    _id: {
      $oid: '67a38086e07669648cf9601b',
    },
  },
  products: [
    {
      productId: '64f8c1a2e4b0d12a3f8b1003',
      quantity: 1,
      userObservation: 'Bem passada, por favor.',
      _id: {
        $oid: '67a38086e07669648cf9601c',
      },
    },
    {
      productId: '64f8c1a2e4b0d12a3f8b1005',
      quantity: 1,
      userObservation: 'Sem croutons.',
      _id: {
        $oid: '67a38086e07669648cf9601d',
      },
    },
  ],
  __v: 0,
},
{
  _id: {
    $oid: '67a38086e07669648cf9601e',
  },
  code: 'J1OFDY',
  userId: '64f9b8a1e4b0a1a2b3c4d5e2',
  totalPrice: 113,
  status: 'CANCELED',
  restaurantId: '64f8b4a2e4b0d12a3f8b4568',
  payment: {
    type: 'PIX',
    value: 113,
    status: 'REFUNDED',
    dueDate: '2023-10-10T12:00:00Z',
    externalId: 'pay_123459',
    invoiceUrl: 'https://example.com/invoice/123459',
    pixPayload: {
      payload: 'pix_payload_456',
      encodedImage: 'encoded_image_456',
      expirationDate: '2023-10-10T12:00:00Z',
      _id: {
        $oid: '67a38086e07669648cf96020',
      },
    },
    _id: {
      $oid: '67a38086e07669648cf9601f',
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
      $oid: '67a38086e07669648cf96021',
    },
  },
  products: [
    {
      productId: '64f8c1a2e4b0d12a3f8b2001',
      quantity: 2,
      userObservation: 'Borda recheada.',
      _id: {
        $oid: '67a38086e07669648cf96022',
      },
    },
    {
      productId: '64f8c1a2e4b0d12a3f8b2004',
      quantity: 1,
      userObservation: 'Gelada, por favor.',
      _id: {
        $oid: '67a38086e07669648cf96023',
      },
    },
  ],
  __v: 0,
},
{
  _id: {
    $oid: '67a38086e07669648cf96024',
  },
  code: '4PILLY',
  userId: '64f9b8a1e4b0a1a2b3c4d5e2',
  totalPrice: 76,
  status: 'FAILED',
  restaurantId: '64f8b4a2e4b0d12a3f8b4568',
  payment: {
    type: 'CREDIT_CARD',
    value: 76,
    status: 'FAILED',
    dueDate: '2023-10-10T12:00:00Z',
    externalId: 'pay_123460',
    invoiceUrl: 'https://example.com/invoice/123460',
    _id: {
      $oid: '67a38086e07669648cf96025',
    },
  },
  deliveryAddress: {
    zipCode: '20040000',
    street: 'Avenida Brasil',
    number: '456',
    complement: 'Casa 2',
    district: 'Centro',
    city: 'Rio de Janeiro',
    state: 'RJ',
    _id: {
      $oid: '67a38086e07669648cf96026',
    },
  },
  products: [
    {
      productId: '64f8c1a2e4b0d12a3f8b2002',
      quantity: 1,
      userObservation: 'Sem cebola.',
      _id: {
        $oid: '67a38086e07669648cf96027',
      },
    },
    {
      productId: '64f8c1a2e4b0d12a3f8b2005',
      quantity: 1,
      userObservation: 'Extra chocolate.',
      _id: {
        $oid: '67a38086e07669648cf96028',
      },
    },
  ],
  __v: 0,
},
{
  _id: {
    $oid: '67a38086e07669648cf96029',
  },
  code: 'Y32946',
  userId: '64f9b8a1e4b0a1a2b3c4d5e2',
  totalPrice: 40,
  status: 'PENDING',
  restaurantId: '64f8b4a2e4b0d12a3f8b4568',
  payment: {
    type: 'PIX',
    value: 40,
    status: 'PENDING',
    dueDate: '2023-10-10T12:00:00Z',
    externalId: 'pay_123461',
    invoiceUrl: 'https://example.com/invoice/123461',
    pixPayload: {
      payload: 'pix_payload_789',
      encodedImage: 'encoded_image_789',
      expirationDate: '2023-10-10T12:00:00Z',
      _id: {
        $oid: '67a38086e07669648cf9602b',
      },
    },
    _id: {
      $oid: '67a38086e07669648cf9602a',
    },
  },
  deliveryAddress: {
    zipCode: '30140000',
    street: 'Rua da Paz',
    number: '789',
    complement: 'Bloco B',
    district: 'Savassi',
    city: 'Belo Horizonte',
    state: 'MG',
    _id: {
      $oid: '67a38086e07669648cf9602c',
    },
  },
  products: [
    {
      productId: '64f8c1a2e4b0d12a3f8b2003',
      quantity: 1,
      userObservation: 'Bem assada, por favor.',
      _id: {
        $oid: '67a38086e07669648cf9602d',
      },
    },
  ],
  __v: 0,
},
{
  _id: {
    $oid: '67a38086e07669648cf9602e',
  },
  code: 'S69U15',
  userId: '64f9b8a1e4b0a1a2b3c4d5e2',
  totalPrice: 30,
  status: 'CONFIRMED',
  restaurantId: '64f8b4a2e4b0d12a3f8b4567',
  payment: {
    type: 'DEBIT_CARD',
    value: 30,
    status: 'CONFIRMED',
    dueDate: '2023-10-10T12:00:00Z',
    externalId: 'pay_123462',
    invoiceUrl: 'https://example.com/invoice/123462',
    _id: {
      $oid: '67a38086e07669648cf9602f',
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
      $oid: '67a38086e07669648cf96030',
    },
  },
  products: [
    {
      productId: '64f8c1a2e4b0d12a3f8b1005',
      quantity: 2,
      userObservation: 'Sem molho Caesar.',
      _id: {
        $oid: '67a38086e07669648cf96031',
      },
    },
  ],
  __v: 0,
},
{
  _id: {
    $oid: '67a38086e07669648cf96032',
  },
  code: 'HBZD7I',
  userId: '64f9b8a1e4b0a1a2b3c4d5e2',
  totalPrice: 50,
  status: 'DELIVERED',
  restaurantId: '64f8b4a2e4b0d12a3f8b4568',
  payment: {
    type: 'CREDIT_CARD',
    value: 50,
    status: 'CONFIRMED',
    dueDate: '2023-10-10T12:00:00Z',
    externalId: 'pay_123463',
    invoiceUrl: 'https://example.com/invoice/123463',
    _id: {
      $oid: '67a38086e07669648cf96033',
    },
  },
  deliveryAddress: {
    zipCode: '20040000',
    street: 'Avenida Brasil',
    number: '456',
    complement: 'Casa 2',
    district: 'Centro',
    city: 'Rio de Janeiro',
    state: 'RJ',
    _id: {
      $oid: '67a38086e07669648cf96034',
    },
  },
  products: [
    {
      productId: '64f8c1a2e4b0d12a3f8b2004',
      quantity: 1,
      userObservation: 'Gelada, por favor.',
      _id: {
        $oid: '67a38086e07669648cf96035',
      },
    },
    {
      productId: '64f8c1a2e4b0d12a3f8b2005',
      quantity: 1,
      userObservation: 'Extra calda.',
      _id: {
        $oid: '67a38086e07669648cf96036',
      },
    },
  ],
  __v: 0,
},
{
  _id: {
    $oid: '67a38086e07669648cf96037',
  },
  code: '57AYBS',
  userId: '64f9b8a1e4b0a1a2b3c4d5e2',
  totalPrice: 90,
  status: 'CANCELED',
  restaurantId: '64f8b4a2e4b0d12a3f8b4567',
  payment: {
    type: 'PIX',
    value: 90,
    status: 'REFUNDED',
    dueDate: '2023-10-10T12:00:00Z',
    externalId: 'pay_123464',
    invoiceUrl: 'https://example.com/invoice/123464',
    pixPayload: {
      payload: 'pix_payload_101',
      encodedImage: 'encoded_image_101',
      expirationDate: '2023-10-10T12:00:00Z',
      _id: {
        $oid: '67a38086e07669648cf96039',
      },
    },
    _id: {
      $oid: '67a38086e07669648cf96038',
    },
  },
  deliveryAddress: {
    zipCode: '30140000',
    street: 'Rua da Paz',
    number: '789',
    complement: 'Bloco B',
    district: 'Savassi',
    city: 'Belo Horizonte',
    state: 'MG',
    _id: {
      $oid: '67a38086e07669648cf9603a',
    },
  },
  products: [
    {
      productId: '64f8c1a2e4b0d12a3f8b1001',
      quantity: 3,
      userObservation: 'Extra farofa.',
      _id: {
        $oid: '67a38086e07669648cf9603b',
      },
    },
  ],
  __v: 0,
},
{
  _id: {
    $oid: '67a38086e07669648cf9603c',
  },
  code: 'TEMWXJ',
  userId: '64f9b8a1e4b0a1a2b3c4d5e2',
  totalPrice: 60,
  status: 'FAILED',
  restaurantId: '64f8b4a2e4b0d12a3f8b4568',
  payment: {
    type: 'DEBIT_CARD',
    value: 60,
    status: 'FAILED',
    dueDate: '2023-10-10T12:00:00Z',
    externalId: 'pay_123465',
    invoiceUrl: 'https://example.com/invoice/123465',
    _id: {
      $oid: '67a38086e07669648cf9603d',
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
      $oid: '67a38086e07669648cf9603e',
    },
  },
  products: [
    {
      productId: '64f8c1a2e4b0d12a3f8b2003',
      quantity: 1,
      userObservation: 'Borda recheada.',
      _id: {
        $oid: '67a38086e07669648cf9603f',
      },
    },
    {
      productId: '64f8c1a2e4b0d12a3f8b2004',
      quantity: 1,
      userObservation: 'Sem gelo.',
      _id: {
        $oid: '67a38086e07669648cf96040',
      },
    },
  ],
  __v: 0,
}];

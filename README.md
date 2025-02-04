# **Instruções Iniciais**

## **Configuração de Ambiente de Desenvolvimento**

1. Certifique-se de ter o Node.js v22 instalado.
2. Certifique-se de ter o Docker instalado.
3. Certifique-se de ter o Docker Compose instalado.
5. Certifique-se de ter o MongoDB Compass instalado.

## **Iniciar o Ambiente de Desenvolvimento**

Comando para iniciar o ambiente de desenvolvimento:
```bash
npm run docker:up-logs
```

Observação: A fim de facilitar os testes da api, usaremos um script de seed para popular o banco de dados.
Basta chamar a rota `GET => /seed` para popular o banco de dados com os dados iniciais.


# **Documentação da API - Quero Delivery**

Esta API oferece funcionalidades para o gerenciamento de usuários, restaurantes, pedidos e carrinho de compras.

## **1. Autenticação**

### **1.1. Criar Usuário**
- **Método:** `POST`
- **URL:** `/auth/create`
- **Corpo da Requisição (JSON):**
  ```json
  {
    "name": "Antônia Joana Gabriela Drumond",
    "cpf": "019.861.614-71",
    "email": "antoniajoanadrumond@helponline-sti.com",
    "password": "123456",
    "confirmPassword": "123456",
    "addresses": [
      {
        "zipCode": "58807665",
        "street": "Rua João Rocha",
        "number": "445",
        "district": "Alto do Capanema",
        "city": "Sousa",
        "state": "PB"
      }
    ]
  }
  ```

### **1.2. Login**
- **Método:** `POST`
- **URL:** `/auth/login`
- **Corpo da Requisição (JSON):**
  ```json
  {
    "email": "antoniajoanadrumond@helponline-sti.com",
    "password": "123456"
  }
  ```

---

## **2. Restaurante**

### **2.1. Obter Produtos de Restaurante**
- **Método:** `GET`
- **URL:** `/restaurant/{restaurantId}/products`
- **Headers:**
  - `Authorization`: `{{TOKEN}}`
- **Exemplo de URL:**
  ```
  /restaurant/64f8b4a2e4b0d12a3f8b4567/products
  ```

---

## **3. Carrinho**

### **3.1. Obter Meu Carrinho**
- **Método:** `GET`
- **URL:** `/cart`
- **Headers:**
  - `Authorization`: `{{TOKEN}}`

### **3.2. Deletar Meu Carrinho**
- **Método:** `DELETE`
- **URL:** `/cart/delete`
- **Headers:**
  - `Authorization`: `{{TOKEN}}`

### **3.3. Atualizar/Adicionar Produtos ao Carrinho**
- **Método:** `POST`
- **URL:** `/cart/upsert`
- **Headers:**
  - `Authorization`: `{{TOKEN}}`
- **Corpo da Requisição (JSON):**
  ```json
  {
    "restaurantId": "64f8b4a2e4b0d12a3f8b4567",
    "deliveryAddress": {
      "zipCode": "49042430",
      "street": "Rua Jorge Ramos da Silva",
      "number": "46",
      "district": "São Conrado",
      "city": "Aracaju",
      "state": "SE"
    },
    "products": [
      {
        "productId": "64f8c1a2e4b0d12a3f8b1001",
        "quantity": 2,
        "userObservation": "Trocar couve por porção de farofa"
      },
      {
        "productId": "64f8c1a2e4b0d12a3f8b1005",
        "quantity": 1
      },
      {
        "productId": "64f8c1a2e4b0d12a3f8b1004",
        "quantity": 3
      }
    ]
  }
  ```

---

## **4. Pedidos**

### **4.1. Criar Pedido**
- **Método:** `POST`
- **URL:** `/order/create`
- **Headers:**
  - `Authorization`: `{{TOKEN}}`

### **4.2. Obter Estatísticas de Pedidos**
- **Método:** `GET`
- **URL:** `/order/stats`
- **Headers:**
  - `Authorization`: `{{TOKEN}}`

---

## **5. Seed Data (Ambiente Local)**

### **5.1. Seed de Dados**
- **Método:** `POST`
- **URL:** `http://localhost:3000/seed`

---

# **Parâmetros e Explicações**

- `{{BASE_URL}}`: URL base da API.
- `{{TOKEN}}`: Token de autenticação que deve ser obtido após login.
  
---

Essa documentação resume os endpoints e as requisições disponíveis na API `quero-delivery-api`. Para interagir com ela, é necessário substituir `{{BASE_URL}}` e `{{TOKEN}}` pelos valores reais correspondentes.
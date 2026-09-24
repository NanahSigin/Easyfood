# 🍰 EasyFood

Sistema de gerenciamento de restaurantes desenvolvido como projeto acadêmico.
O EasyFood possui uma API REST para cadastro e consulta de restaurantes, autenticação de usuários com JWT e uma interface web.

Objetivo
Desenvolver uma aplicação para gerenciamento de restaurantes, aplicando conceitos de:
- API REST
- Banco de dados
- Autenticação
- Arquitetura em camadas
- Frontend e backend
- Git e GitHub

Tecnologias

Backend
- Node.js
- Express
- Prisma ORM
- PostgreSQL
- JWT
- bcryptjs
- dotenv
- CORS

Frontend
- HTML5
- CSS3
- JavaScript

Funcionalidades
- Cadastro de usuários
- Login
- Autenticação com JWT
- Listagem de restaurantes
- Cadastro de restaurantes
- Banco de dados PostgreSQL
- Proteção do cadastro de restaurantes
- Interface web

Arquitetura
Requisição
    ↓
Routes
    ↓
Controller
    ↓
Service
    ↓
Prisma
    ↓
PostgreSQL

Estrutura
easy-food/
├── docs/
│   └── adr/
├── frontend/
│   ├── index.html
│   ├── script.js
│   └── style.css
├── prisma/
│   ├── migrations/
│   ├── schema.prisma
│   └── seed.js
├── src/
│   ├── app.js
│   ├── database/
│   └── modules/
│       ├── auth/
│       └── restaurants/
├── .gitignore
├── package.json
└── server.js

Autenticação
A autenticação do sistema utiliza JSON Web Token (JWT).
O sistema possui as seguintes rotas:
POST /auth/register — cadastro de usuário
POST /auth/login — login
GET /auth/me — identificação do usuário autenticado
O cadastro de restaurantes é protegido por autenticação.
Restaurantes

O sistema possui:
GET /restaurants — listar restaurantes
POST /restaurants — cadastrar restaurante
O cadastro de restaurantes exige um token JWT válido.

Como pegar o projeto

1. Instalar o Git
Caso ainda não tenha o Git instalado, instale pelo site oficial:
https://git-scm.com/

2. Clonar o projeto
Abra o PowerShell ou o terminal e execute:
git clone https://github.com/NanahSigin/Easyfood.git

3. Entrar na pasta
cd Easyfood

4. Instalar as dependências
npm install

5. Configurar o banco de dados
Crie um arquivo .env na pasta do projeto:
DATABASE_URL="postgresql://postgres:SUA_SENHA@localhost:5432/easyfood"
JWT_SECRET="sua-chave-secreta"

6. Criar as tabelas do banco
npx prisma migrate dev

7. Popular o banco de dados
node prisma/seed.js

8. Iniciar o projeto
node server.js

9. Acessar o frontend
Abra o arquivo:
frontend/index.html

10. Utilizar o sistema

- Criar uma conta
- Fazer login
- Visualizar os restaurantes
- Cadastrar restaurantes quando estiver autenticado

Documentação

As decisões de arquitetura estão disponíveis em:

docs/adr/

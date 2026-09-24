# ADR-003 — Autenticação com JWT
## Status
Aceito
## Contexto
A EasyFood possui uma API REST desenvolvida com Node.js e Express,
utilizando Prisma e PostgreSQL para persistência dos dados.
Com a evolução do projeto, será necessário adicionar autenticação
para controlar o acesso às funcionalidades da aplicação.
Foram consideradas as seguintes alternativas:
- JWT
- AWS Cognito
- Login com Google
- Outra solução
## Decisão
Escolhemos utilizar **JWT (JSON Web Token)** como solução de
autenticação da EasyFood.
## Justificativa
O JWT é adequado ao contexto atual da EasyFood porque pode ser
utilizado diretamente em uma API REST desenvolvida com Node.js e
Express.
A solução permite que, após o login, o servidor gere um token que
pode ser enviado pelo cliente nas próximas requisições.
Também possui uma implementação relativamente simples para o
projeto atual e pode ser integrada à arquitetura em camadas que
já foi criada.
## Trade-offs
### Vantagens
- Integração simples com Node.js e Express.
- Adequado para APIs REST.
- Não exige a utilização de um serviço externo de autenticação.
- Pode ser utilizado com middleware para proteger rotas.
- Separa a autenticação das regras de negócio da aplicação.
### Desvantagens
- A aplicação precisa cuidar corretamente da criação e validação
  dos tokens.
- É necessário proteger a chave utilizada para assinar os tokens.
- O gerenciamento de usuários e senhas continua sendo responsabilidade
  da aplicação.
## Alternativas consideradas
### AWS Cognito
É uma solução de autenticação fornecida pela AWS. Pode oferecer
recursos mais completos de gerenciamento de usuários, mas adiciona
uma dependência de um serviço externo à arquitetura atual.
### Login com Google
Permite autenticação utilizando uma conta Google. É útil quando o
objetivo é oferecer login social, mas não atende sozinho a todos os
cenários de autenticação da aplicação.
### JWT
Foi escolhido por apresentar uma integração direta com a API atual
da EasyFood e por ser adequado ao objetivo desta etapa do projeto.
## Consequência
A EasyFood utilizará JWT como base para autenticação.
O módulo de autenticação ficará organizado em:
src/modules/auth
A implementação completa do login poderá ser adicionada posteriormente.
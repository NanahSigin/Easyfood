# ADR-002 - Persistência com PostgreSQL

## Contexto

Na versão anterior da EasyFood, os restaurantes eram armazenados em um array na memória da aplicação. Isso fazia com que os dados fossem perdidos sempre que o servidor era reiniciado.

Era necessário adicionar uma forma de persistência real para que os restaurantes cadastrados continuassem disponíveis mesmo após a reinicialização da aplicação.

## Alternativas consideradas

### 1. Continuar utilizando um array em memória

Manter os restaurantes armazenados diretamente na memória da aplicação.

**Problema:** os dados são perdidos quando o servidor é encerrado ou reiniciado.

### 2. Utilizar PostgreSQL

Armazenar os restaurantes em um banco de dados PostgreSQL e utilizar o Prisma para realizar o acesso aos dados.

**Vantagem:** os dados ficam persistidos e podem ser consultados mesmo após a reinicialização da aplicação.

## Decisão

Utilizar o PostgreSQL como banco de dados da EasyFood, com o Prisma como ferramenta de acesso aos dados.

A arquitetura passa a seguir o fluxo:

Cliente → API → Prisma → PostgreSQL

## Justificativa

O PostgreSQL faz sentido para a EasyFood neste momento porque precisamos de persistência real dos dados dos restaurantes.

Além disso, o PostgreSQL permite armazenar os dados de forma estruturada e mantê-los disponíveis mesmo quando o servidor da aplicação é reiniciado.

O Prisma facilita a comunicação entre a API e o banco de dados, permitindo realizar operações como consultar e cadastrar restaurantes.

## Consequências positivas

- Os dados dos restaurantes não são perdidos ao reiniciar o servidor.
- Os dados ficam armazenados em um banco de dados real.
- A aplicação passa a ter persistência.
- O Prisma facilita o acesso ao banco de dados.
- Podemos visualizar os dados utilizando o Prisma Studio.

## Consequências negativas / trade-offs

- A aplicação passou a depender de um banco de dados PostgreSQL.
- A configuração do projeto ficou mais complexa.
- É necessário manter o banco de dados disponível para a aplicação funcionar corretamente.
- Foram adicionadas novas ferramentas e configurações, como Prisma, PostgreSQL e DATABASE_URL.

## Critérios de revisão

Essa decisão poderá ser revisada caso a EasyFood cresça e necessite de mudanças na infraestrutura, no banco de dados ou na forma de acesso aos dados.

Também poderá ser revisada caso surjam necessidades de escalabilidade, disponibilidade ou outros requisitos que não sejam atendidos pela solução atual.
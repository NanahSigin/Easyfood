# ADR-001 - Armazenar restaurantes em memória

## Status

Aceita

## Data

20/08/2026

## Responsável

Equipe EasyFood

## Contexto

Estamos desenvolvendo a primeira versão da API da EasyFood.

Neste momento, a aplicação precisa permitir:

- consultar restaurantes;
- cadastrar novos restaurantes.

O produto ainda está em fase de prototipação, teste e validação.

A prioridade desta primeira versão é validar o fluxo da aplicação de forma rápida e simples antes de aumentar a complexidade da arquitetura.

## Alternativas consideradas

1. Array em memória
2. PostgreSQL
3. MongoDB
4. SQLite
5. Firebase
6. Arquivo JSON

## Decisão

Adotar um array em memória como mecanismo de armazenamento dos restaurantes na versão inicial do serviço.

## Justificativa

- Permite maior velocidade no desenvolvimento.
- Facilita os primeiros testes da API.
- Possui baixa complexidade.
- Não exige configuração de infraestrutura.
- Não possui custo adicional para esta fase do projeto.

## Consequências

### Positivas

- Desenvolvimento mais rápido.
- Facilidade para testar GET e POST.
- Menor complexidade inicial.
- Permite validar o conceito da aplicação rapidamente.

### Negativas

- Os dados são perdidos quando o servidor reinicia.
- Não existe persistência dos dados.
- Não é adequado para múltiplas instâncias da aplicação.
- Possui limitações para consultas e análises mais complexas.
- Não oferece os mesmos mecanismos de integridade disponíveis em um banco de dados.

## Critérios de revisão

Esta decisão deverá ser reavaliada quando:

1. O MVP for validado e houver decisão de avançar para produção.
2. Houver necessidade de manter os dados entre reinicializações e deploys.
3. O volume de dados ultrapassar o que é razoável manter em memória.
4. For necessário realizar consultas mais complexas.
5. Surgirem relacionamentos entre diferentes entidades da aplicação.

## Notas

Esta é uma decisão temporária para a fase inicial da EasyFood.

Antes da entrada em produção, deverá ser avaliado um mecanismo adequado de persistência.

A escolha desse mecanismo deverá gerar uma nova decisão arquitetural:

ADR-002 - Escolha do mecanismo de persistência da EasyFood.
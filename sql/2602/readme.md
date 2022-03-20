# 📖 Desafio 2602

**Veja no site do [desafio](https://www.beecrowd.com.br/judge/pt/problems/view/2602)**

Sua empresa está fazendo um levantamento de quantos clientes estão cadastrados nos estados, porém, faltou levantar os dados do estado do Rio Grande do Sul.

Então você deve Exibir o nome de todos os clientes cujo estado seja ‘RS’.

### Esquema

#### **customers**

| Coluna       | Tipo    |
| ------------ | ------- |
| id (PK)      | numeric |
| name         | varchar |
| street       | varchar |
| city         | varchar |
| state        | char    |
| credit_limit | number  |

### Tabelas

#### **customers**

| id  | name                      | street                   | city           | state | credit_limit |
| --- | ------------------------- | ------------------------ | -------------- | ----- | ------------ |
| 1   | Pedro Augusto da Rocha    | Rua Pedro Carlos Hoffman | Porto Alegre   | RS    | 700,00       |
| 2   | Antonio Carlos Mamel      | Av. Pinheiros            | Belo Horizonte | MG    | 3500,50      |
| 3   | Luiza Augusta Mhor        | Rua Salto Grande         | Niteroi        | RJ    | 4000,00      |
| 4   | Jane Ester                | Av 7 de setembro         | Erechim        | RS    | 800,00       |
| 5   | Marcos Antônio dos Santos | Av Farrapos              | Porto Alegre   | RS    | 4250,25      |

### Exemplo de Saída

| name                      |
| ------------------------- |
| Pedro Augusto da Rocha    |
| Jane Ester                |
| Marcos Antônio dos Santos |

# 📚 Solução

Neste desafio, só foi necessário um `SELECT` com a condição `WHERE` para encontrar os clientes procurados.

# 📖 Desafio 2617

**Veja no site do [desafio](https://www.beecrowd.com.br/judge/pt/problems/view/2617)**

O setor financeiro encontrou alguns problemas na entrega de um dos nossos fornecedores, a entrega dos produtos não condiz com a nota fiscal.

Seu trabalho é exibir o nome dos produtos e o nome do fornecedor, para os produtos fornecidos pelo fornecedor ‘Ajax SA’.

### Esquema

#### **providers**

| Coluna  | Tipo                    |
| ------- | ----------------------- |
| id (PK) | numeric                 |
| name    | character varying (255) |
| street  | character varying (255) |
| city    | character varying (255) |
| state   | char (2)                |

#### **products**

| Coluna            | Tipo                    |
| ----------------- | ----------------------- |
| id (PK)           | numeric                 |
| name              | character varying (255) |
| amount            | numeric                 |
| price             | numeric                 |
| id_providers (FK) | numeric                 |

### Tabelas

#### **providers**

| id  | name         | street                    | city           | state |
| --- | ------------ | ------------------------- | -------------- | ----- |
| 1   | Ajax SA      | Presidente Castelo Branco | Porto Alegre   | RS    |
| 2   | Sansul SA    | Av Brasil                 | Rio de Janeiro | RJ    |
| 3   | South Chairs | Av Moinho                 | Santa Maria    | RS    |
| 4   | Elon Electro | Apolo                     | São Paulo      | SP    |
| 5   | Mike Electro | Pedro da Cunha            | Curitiba       | PR    |

#### **products**

| id  | name            | amount | value   | id_providers |
| --- | --------------- | ------ | ------- | ------------ |
| 1   | Blue Chair      | 30     | 300.00  | 5            |
| 2   | Red Chair       | 50     | 2150.00 | 1            |
| 3   | Disney Wardrobe | 400    | 829.50  | 4            |
| 4   | Blue Toaster    | 20     | 9.90    | 3            |
| 5   | Solar Panel     | 30     | 3000.25 | 4            |

### Exemplo de Saída

| name      | name    |
| --------- | ------- |
| Red Chair | Ajax SA |

# 📚 Solução

Neste desafio, após fazer o `JOIN`, bastou usar o `WHERE` para encontrar os fornecedores chamados "Ajax SA".

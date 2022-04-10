# 📖 Desafio 2618

**Veja no site do [desafio](https://www.beecrowd.com.br/judge/pt/problems/view/2618)**

O setor de importação da nossa empresa precisa de um relatório sobre a importação de produtos do nosso fornecedor Sansul.

Sua tarefa é exibir o nome dos produtos, o nome do fornecedor e o nome da categoria, para os produtos fornecidos pelo fornecedor ‘Sansul SA’ e cujo nome da categoria seja 'Imported'.

### Esquema

#### **products**

| Coluna             | Tipo                    |
| ------------------ | ----------------------- |
| id (PK)            | numeric                 |
| name               | character varying (255) |
| amount             | numeric                 |
| price              | numeric                 |
| id_providers (FK)  | numeric                 |
| id_categories (FK) | numeric                 |

#### **providers**

| Coluna  | Tipo                    |
| ------- | ----------------------- |
| id (PK) | numeric                 |
| name    | character varying (255) |
| street  | character varying (255) |
| city    | character varying (255) |
| state   | char (2)                |

#### **categories**

| Coluna  | Tipo                    |
| ------- | ----------------------- |
| id (PK) | numeric                 |
| name    | character varying (255) |

### Tabelas

#### **products**

| id  | name            | amount | value   | id_providers | id_categories |
| --- | --------------- | ------ | ------- | ------------ | ------------- |
| 1   | Blue Chair      | 30     | 300.00  | 5            | 5             |
| 2   | Red Chair       | 50     | 2150.00 | 2            | 1             |
| 3   | Disney Wardrobe | 400    | 829.50  | 4            | 1             |
| 4   | Blue Toaster    | 20     | 9.90    | 3            | 1             |
| 5   | TV              | 30     | 3000.25 | 2            | 2             |

#### **providers**

| id  | name         | street                    | city           | state |
| --- | ------------ | ------------------------- | -------------- | ----- |
| 1   | Ajax SA      | Presidente Castelo Branco | Porto Alegre   | RS    |
| 2   | Sansul SA    | Av Brasil                 | Rio de Janeiro | RJ    |
| 3   | South Chairs | Av Moinho                 | Santa Maria    | RS    |
| 4   | Elon Electro | Apolo                     | São Paulo      | SP    |
| 5   | Mike Electro | Pedro da Cunha            | Curitiba       | PR    |

#### **categories**

| id  | name         |
| --- | ------------ |
| 1   | Super Luxury |
| 2   | Imported     |
| 3   | Tech         |
| 4   | Vintage      |
| 5   | Supreme      |

### Exemplo de Saída

| name | name      | name     |
| ---- | --------- | -------- |
| TV   | Sansul SA | Imported |

# 📚 Solução

Neste desafio, usamos 2 comandos `JOIN` para unir as 3 tabelas e o `WHERE` com o operador `AND` para buscar tanto pelo fornecedor quanto pela categoria correta.

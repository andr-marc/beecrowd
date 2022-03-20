# 📖 Desafio 2604

**Veja no site do [desafio](https://www.beecrowd.com.br/judge/pt/problems/view/2604)**

O setor financeiro da empresa precisa de um relatório que mostre o código e o nome dos produtos cujo preço são menores que 10 ou maiores que 100.

### Esquema

#### **products**

| Coluna  | Tipo    |
| ------- | ------- |
| id (PK) | numeric |
| name    | varchar |
| amount  | numeric |
| price   | numeric |

### Tabelas

#### **products**

| id  | name              | amount | price  |
| --- | ----------------- | ------ | ------ |
| 1   | Two-door wardrobe | 100    | 80     |
| 2   | Dining table      | 1000   | 560    |
| 3   | Towel holder      | 10000  | 5.50   |
| 4   | Computer desk     | 350    | 100    |
| 5   | Chair             | 3000   | 210.64 |
| 6   | Single bed        | 750    | 99     |

### Exemplo de Saída

| id  | name         |
| --- | ------------ |
| 2   | Dining table |
| 3   | Towel holder |
| 5   | Chair        |

# 📚 Solução

Neste desafio, só foi necessário um `SELECT` em id e name. Para realizar a condição foi preciso usar `OR` com a condição `WHERE` para encontrar os produtos procurados.

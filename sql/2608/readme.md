# 📖 Desafio 2608

**Veja no site do [desafio](https://www.beecrowd.com.br/judge/pt/problems/view/2608)**

O setor financeiro da nossa empresa, está querendo saber os menores e maiores valores dos produtos, que vendemos.

Para isso exiba somente o maior e o menor preço da tabela produtos.

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

| id  | name               | amount | price  |
| --- | ------------------ | ------ | ------ |
| 1   | Two-doors wardrobe | 100    | 800    |
| 2   | Dining table       | 1000   | 560    |
| 3   | Towel holder       | 10000  | 25.50  |
| 4   | Computer desk      | 350    | 320.50 |
| 5   | Chair              | 3000   | 210.64 |
| 6   | Single bed         | 750    | 460    |

### Exemplo de Saída

| price | price |
| ----- | ----- |
| 800   | 25.50 |

# 📚 Solução

Neste desafio, foi usado a função `MAX()` e `MIN()` para exibir o maior e o menor valor, respectivamente de uma coluna.

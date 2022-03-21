# 📖 Desafio 2606

**Veja no site do [desafio](https://www.beecrowd.com.br/judge/pt/problems/view/2606)**

Quando os dados foram migrados de Banco de Dados, houve um pequeno mal-entendido por parte do antigo DBA.

Seu chefe precisa que você exiba o código e o nome dos produtos, cuja categoria inicie com 'super'.

### Esquema

#### **products**

| Coluna             | Tipo    |
| ------------------ | ------- |
| id (PK)            | numeric |
| name               | varchar |
| amount             | numeric |
| price              | numeric |
| id_categories (FK) | numeric |

#### **categories**

| Coluna  | Tipo    |
| ------- | ------- |
| id (PK) | numeric |
| name    | varchar |

### Tabelas

#### **products**

| id  | name               | amount | price  | id_categories |
| --- | ------------------ | ------ | ------ | ------------- |
| 1   | Lampshade          | 100    | 800    | 4             |
| 2   | Table for painting | 1000   | 560    | 9             |
| 3   | Notebook desk      | 10000  | 25.50  | 9             |
| 4   | Computer desk      | 350    | 320.50 | 6             |
| 5   | Chair              | 3000   | 210.64 | 9             |
| 6   | Home alarm         | 750    | 460    | 4             |

#### **categories**

| id  | name         |
| --- | ------------ |
| 1   | old stock    |
| 2   | new stock    |
| 3   | modern       |
| 4   | commercial   |
| 5   | recyclable   |
| 6   | executive    |
| 7   | superior     |
| 8   | wood         |
| 9   | super luxury |
| 10  | vintage      |

### Exemplo de Saída

| id  | name               |
| --- | ------------------ |
| 2   | Table for painting |
| 3   | Notebook desk      |
| 5   | Chair              |

# 📚 Solução

Neste desafio, após selecionar as categorias referentes aos produtos cadastrados, usamos um `LIKE` para buscar apenas as categorias que iniciam com "super". Para fazer isso usamos um simbolo de porcentagem para dizer que aceitamos qualquer texto após o super: `'super%'`.

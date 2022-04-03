# 📖 Desafio 2610

**Veja no site do [desafio](https://www.beecrowd.com.br/judge/pt/problems/view/2610)**

Na empresa que você trabalha está sendo feito um levantamento sobre os valores dos produtos que são comercializados.

Para ajudar o setor que está fazendo esse levantamento você deve calcular e exibir o valor médio do preço dos produtos.

**OBS**: Mostrar o valor com dois números após o ponto.

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

| price  |
| ------ |
| 396.10 |

# 📚 Solução

Neste desafio, a média do preço dos produtos é calculada com a função `AVG()` e foi usado a função `ROUND()` para garantir que a saída tenha 2 casa decimais.

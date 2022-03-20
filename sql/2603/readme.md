# 📖 Desafio 2603

**Veja no site do [desafio](https://www.beecrowd.com.br/judge/pt/problems/view/2603)**

A empresa fará um evento comemorando os 20 anos de mercado, e para isso faremos uma grande comemoração na cidade de Porto Alegre. Queremos também convidar todos os nossos clientes que estão cadastrados nessa cidade.

O seu trabalho é nos passar os nomes e os endereços dos clientes que moram em 'Porto Alegre', para entregar os convites pessoalmente.

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

| name                      | street                   |
| ------------------------- | ------------------------ |
| Pedro Augusto da Rocha    | Rua Pedro Carlos Hoffman |
| Marcos Antônio dos Santos | Av Farrapos              |

# 📚 Solução

Neste desafio, só foi necessário um `SELECT` em name e street com a condição `WHERE` para encontrar os clientes procurados.

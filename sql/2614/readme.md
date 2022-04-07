# 📖 Desafio 2614

**Veja no site do [desafio](https://www.beecrowd.com.br/judge/pt/problems/view/2614)**

A vídeo locadora está fazendo seu relatório semestral e precisa da sua ajuda. Basta você selecionar o nome dos clientes e a data de locação, das locações realizadas no mês de setembro de 2016.

### Esquema

#### **customers**

| Coluna  | Tipo    |
| ------- | ------- |
| id (PK) | numeric |
| name    | varchar |
| street  | varchar |
| city    | varchar |

#### **rentals**

| Coluna            | Tipo           |
| ----------------- | -------------- |
| id (PK)           | numeric        |
| rentals_date      | date (ISO/YMD) |
| id_customers (FK) | numeric        |

### Tabelas

#### **customers**

| id  | name                        | street                         | city          |
| --- | --------------------------- | ------------------------------ | ------------- |
| 1   | Giovanna Goncalves Oliveira | Rua Mato Grosso                | Canoas        |
| 2   | Kauã Azevedo Ribeiro        | Travessa Ibiá                  | Uberlândia    |
| 3   | Rebeca Barbosa Santos       | Rua Observatório Meteorológico | Salvador      |
| 4   | Sarah Carvalho Correia      | Rua Antônio Carlos da Silva    | Apucarana     |
| 5   | João Almeida Lima           | Rua Rio Taiuva                 | Ponta Grossa  |
| 6   | Diogo Melo Dias             | Rua Duzentos e Cinqüenta       | Várzea Grande |

#### **rentals**

| id  | rentals_date | id_customers |
| --- | ------------ | ------------ |
| 1   | 2016-09-10   | 3            |
| 2   | 2016-02-09   | 1            |
| 3   | 2016-02-08   | 4            |
| 4   | 2016-02-09   | 2            |
| 5   | 2016-02-03   | 6            |
| 6   | 2016-04-04   | 2            |

### Exemplo de Saída

| name                  | rentals_date |
| --------------------- | ------------ |
| Rebeca Barbosa Santos | 2016-09-10   |

# 📚 Solução

Neste desafio, foi necessário o uso da função `EXTRACT()` para isolar o mês de cada data e exibir somente os alugueis que o mês for igual a setembro.

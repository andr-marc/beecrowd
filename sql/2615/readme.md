# 📖 Desafio 2615

**Veja no site do [desafio](https://www.beecrowd.com.br/judge/pt/problems/view/2615)**

A locadora tem objetivos de criar várias franquias espalhadas pelo Brasil. Para isso queremos saber em quais cidades nossos clientes moram.

Para você nos ajudar selecione o nome de todas as cidades onde a locadora tem clientes. Mas por favor, não repita o nome da cidade.

### Esquema

#### **customers**

| Coluna  | Tipo    |
| ------- | ------- |
| id (PK) | numeric |
| name    | varchar |
| street  | varchar |
| city    | varchar |

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

### Exemplo de Saída

| city          |
| ------------- |
| Uberlândia    |
| Canoas        |
| Ponta Grossa  |
| Várzea Grande |
| Salvador      |

# 📚 Solução

Neste desafio, bastou agrupar os clientes pelas cidades usando o comando `GROUP BY`.

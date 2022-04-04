# 📖 Desafio 2611

**Veja no site do [desafio](https://www.beecrowd.com.br/judge/pt/problems/view/2611)**

Uma Vídeo locadora contratou seus serviços para catalogar os filmes dela. Eles precisam que você selecione o código e o nome dos filmes cuja descrição do gênero seja 'Action'.

### Esquema

#### **movies**

| Coluna         | Tipo    |
| -------------- | ------- |
| id (PK)        | numeric |
| name           | varchar |
| id_genres (FK) | numeric |

#### **genres**

| Coluna      | Tipo    |
| ----------- | ------- |
| id (PK)     | numeric |
| description | varchar |

### Tabelas

#### **movies**

| id  | name                         | id_genres |
| --- | ---------------------------- | --------- |
| 1   | Batman                       | 3         |
| 2   | The Battle of the Dark River | 3         |
| 3   | White Duck                   | 1         |
| 4   | Breaking Barriers            | 4         |
| 5   | The Two Hours                | 2         |

#### **genres**

| id  | name      |
| --- | --------- |
| 1   | Animation |
| 2   | Horror    |
| 3   | Action    |
| 4   | Drama     |
| 5   | Comedy    |

### Exemplo de Saída

| id  | name                         |
| --- | ---------------------------- |
| 1   | Batman                       |
| 2   | The Battle of the Dark River |

# 📚 Solução

Neste desafio, foi usado o `JOIN` em conjunto com `WHERE` para encontrar os filmes com o gênero "Action".

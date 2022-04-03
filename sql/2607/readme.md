# 📖 Desafio 2607

**Veja no site do [desafio](https://www.beecrowd.com.br/judge/pt/problems/view/2607)**

Todos os meses a empresa pede um relatório das cidades que os fornecedores estão cadastrados. Dessa vez não vai ser diferente, faça uma consulta no Banco de Dados que retorne todas as cidades dos fornecedores, mas em ordem alfabética.

OBS: Você não deve mostrar cidades repetidas.

### Esquema

#### **providers**

| Coluna  | Tipo    |
| ------- | ------- |
| id (PK) | numeric |
| name    | varchar |
| street  | varchar |
| city    | varchar |
| state   | char    |

### Tabelas

#### **providers**

| id  | name             | street         | city           | state |
| --- | ---------------- | -------------- | -------------- | ----- |
| 1   | Henrique         | Av Brasil      | Rio de Janeiro | RJ    |
| 2   | Marcelo Augusto  | Rua Imigrantes | Belo Horizonte | MG    |
| 3   | Caroline Silva   | Av São Paulo   | Salvador       | BA    |
| 4   | Guilerme Staff   | Rua Central    | Porto Alegre   | RS    |
| 5   | Isabela Moraes   | Av Juiz Grande | Curitiba       | PR    |
| 6   | Francisco Accerr | Av Paulista    | São Paulo      | SP    |

### Exemplo de Saída

| city           |
| -------------- |
| Belo Horizonte |
| Curitiba       |
| Porto Alegre   |
| Rio de Janeiro |
| Salvador       |
| São Paulo      |

# 📚 Solução

Neste desafio, foi usado o `GROUP BY` para mostrar as cidades sem repetições.

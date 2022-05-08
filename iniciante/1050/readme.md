# 📖 Desafio 1050

**Veja no site do [desafio](https://www.beecrowd.com.br/judge/pt/problems/view/1050)**

Leia um número inteiro que representa um código de DDD para discagem interurbana. Em seguida, informe à qual cidade o DDD pertence, considerando a tabela abaixo:

| DDD | Destination    |
| --- | -------------- |
| 61  | Brasilia       |
| 71  | Salvador       |
| 11  | Sao Paulo      |
| 21  | Rio de Janeiro |
| 32  | Juiz de Fora   |
| 19  | Campinas       |
| 27  | Vitoria        |
| 31  | Belo Horizonte |

Se a entrada for qualquer outro DDD que não esteja presente na tabela acima, o programa deverá informar:
DDD nao cadastrado

### Entrada

A entrada consiste de um único valor inteiro.

### Saída

Imprima o nome da cidade correspondente ao DDD existente na entrada. Imprima DDD nao cadastrado caso não existir DDD correspondente ao número digitado.

| Exemplo de Entrada | Exemplo de Saída |
| ------------------ | ---------------- |
| 11                 | Sao Paulo        |

# 📚 Solução

Neste desafio, testamos o valor do DDD e comparamos com os valores conhecidos. Também informamos caso o valor não seja conhecido.

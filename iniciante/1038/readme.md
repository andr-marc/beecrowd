# 📖 Desafio 1038

**Veja no site do [desafio](https://www.beecrowd.com.br/judge/pt/problems/view/1038)**

Com base na tabela abaixo, escreva um programa que leia o código de um item e a quantidade deste item. A seguir, calcule e mostre o valor da conta a pagar.

| CODIGO | ESPECIFICAÇÃO   | PREÇO   |
| ------ | --------------- | ------- |
| 1      | Cachorro Quente | R$ 4.00 |
| 2      | X-Salada        | R$ 4.50 |
| 3      | X-Bacon         | R$ 5.00 |
| 4      | Torrada simples | R$ 2.00 |
| 5      | Refrigerante    | R$ 1.50 |

### Entrada

O arquivo de entrada contém dois valores inteiros correspondentes ao código e à quantidade de um item conforme tabela acima.

### Saída

O arquivo de saída deve conter a mensagem "Total: R$ " seguido pelo valor a ser pago, com 2 casas após o ponto decimal.

| Exemplo de Entrada | Exemplo de Saída |
| ------------------ | ---------------- |
| 3 2                | Total: R$ 10.00  |
| 4 3                | Total: R$ 6.00   |
| 2 3                | Total: R$ 13.50  |

# 📚 Solução

Neste desafio, recebo o código do pedido e a quantidade. Apenas substituo o código pelo seu respectivo valor e multiplico pela quantidade.

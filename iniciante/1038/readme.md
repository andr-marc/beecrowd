# 馃摉 Desafio 1038

**Veja no site do [desafio](https://www.beecrowd.com.br/judge/pt/problems/view/1038)**

Com base na tabela abaixo, escreva um programa que leia o c贸digo de um item e a quantidade deste item. A seguir, calcule e mostre o valor da conta a pagar.

| CODIGO | ESPECIFICA脟脙O   | PRE脟O   |
| ------ | --------------- | ------- |
| 1      | Cachorro Quente | R$ 4.00 |
| 2      | X-Salada        | R$ 4.50 |
| 3      | X-Bacon         | R$ 5.00 |
| 4      | Torrada simples | R$ 2.00 |
| 5      | Refrigerante    | R$ 1.50 |

### Entrada

O arquivo de entrada cont茅m dois valores inteiros correspondentes ao c贸digo e 脿 quantidade de um item conforme tabela acima.

### Sa铆da

O arquivo de sa铆da deve conter a mensagem "Total: R$ " seguido pelo valor a ser pago, com 2 casas ap贸s o ponto decimal.

| Exemplo de Entrada | Exemplo de Sa铆da |
| ------------------ | ---------------- |
| 3 2                | Total: R$ 10.00  |
| 4 3                | Total: R$ 6.00   |
| 2 3                | Total: R$ 13.50  |

# 馃摎 Solu莽茫o

Neste desafio, recebo o c贸digo do pedido e a quantidade. Apenas substituo o c贸digo pelo seu respectivo valor e multiplico pela quantidade.

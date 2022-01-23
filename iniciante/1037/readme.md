# 📖 Desafio 1037

**Veja no site do [desafio](https://www.beecrowd.com.br/judge/pt/problems/view/1037)**

Você deve fazer um programa que leia um valor qualquer e apresente uma mensagem dizendo em qual dos seguintes intervalos ([0,25], (25,50], (50,75], (75,100]) este valor se encontra. Obviamente se o valor não estiver em nenhum destes intervalos, deverá ser impressa a mensagem “Fora de intervalo”.

O símbolo ( representa "maior que". Por exemplo:
[0,25] indica valores entre 0 e 25.0000, inclusive eles.
(25,50] indica valores maiores que 25 Ex: 25.00001 até o valor 50.0000000

### Entrada

O arquivo de entrada contém um número com ponto flutuante qualquer.

### Saída

A saída deve ser uma mensagem conforme exemplo abaixo.

| Exemplo de Entrada | Exemplo de Saída   |
| ------------------ | ------------------ |
| 25.01              | Intervalo (25,50]  |
| 25.00              | Intervalo [0,25]   |
| 100.00             | Intervalo (75,100] |
| -25.02             | Fora de intervalo  |

# 📚 Solução

Para resolver esse desafio, bastou fazer condicionais para testar o intervalo em que a entrada se encaixa. Atentando que `[]` significa que o valor é `<=` ou `>=`; `()` significa que o valor é `<` ou `>`.

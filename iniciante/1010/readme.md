# 📖 Desafio 1010

**Veja no site do [desafio](https://www.beecrowd.com.br/judge/pt/problems/view/1010)**

Neste problema, deve-se ler o código de uma peça 1, o número de peças 1, o valor unitário de cada peça 1, o código de uma peça 2, o número de peças 2 e o valor unitário de cada peça 2. Após, calcule e mostre o valor a ser pago.

### Entrada

O arquivo de entrada contém duas linhas de dados. Em cada linha haverá 3 valores, respectivamente dois inteiros e um valor com 2 casas decimais.

### Saída

A saída deverá ser uma mensagem conforme o exemplo fornecido abaixo, lembrando de deixar um espaço após os dois pontos e um espaço após o "R$". O valor deverá ser apresentado com 2 casas após o ponto.

| Exemplo de Entrada       | Exemplo de Saída        |
| ------------------------ | ----------------------- |
| 12 1 5.30<br>16 2 5.10   | VALOR A PAGAR: R$ 15.50 |
| 13 2 15.30<br>161 4 5.20 | VALOR A PAGAR: R$ 51.40 |
| 1 1 15.10<br>2 1 15.10   | VALOR A PAGAR: R$ 30.20 |

# 📚 Solução

Para essa questão, cada linha é salvo em uma variável, e cada linha ainda separa cada informação ao encontrar um espaço, como resultado a variável de um dos produtos vai estar no seguinte formato: `['12', '1', '5.30']`.

Tendo as informações devidamente separadas, multiplicamos o segundo item do produto e o terceiro, referentes a quantidade e valor unitário. Tendo os dois produtos somados, basta imprimir o valor.

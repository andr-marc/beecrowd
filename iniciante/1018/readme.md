# 📖 Desafio 1018

**Veja no site do [desafio](https://www.beecrowd.com.br/judge/pt/problems/view/1018)**

Leia um valor inteiro. A seguir, calcule o menor número de notas possíveis (cédulas) no qual o valor pode ser decomposto. As notas consideradas são de 100, 50, 20, 10, 5, 2 e 1. A seguir mostre o valor lido e a relação de notas necessárias.

### Entrada

O arquivo de entrada contém um valor inteiro N (0 < N < 1000000).

### Saída

Imprima o valor lido e, em seguida, a quantidade mínima de notas de cada tipo necessárias, conforme o exemplo fornecido. Não esqueça de imprimir o fim de linha após cada linha, caso contrário seu programa apresentará a mensagem: “Presentation Error”.

| Exemplo de Entrada | Exemplo de Saída                                                                                                                                                                     |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 576                | 576<br>5 nota(s) de R$ 100,00<br>1 nota(s) de R$ 50,00<br>1 nota(s) de R$ 20,00<br>0 nota(s) de R$ 10,00<br>1 nota(s) de R$ 5,00<br>0 nota(s) de R$ 2,00<br>1 nota(s) de R$ 1,00     |
| 11257              | 11257<br>112 nota(s) de R$ 100,00<br>1 nota(s) de R$ 50,00<br>0 nota(s) de R$ 20,00<br>0 nota(s) de R$ 10,00<br>1 nota(s) de R$ 5,00<br>1 nota(s) de R$ 2,00<br>0 nota(s) de R$ 1,00 |
| 503                | 503<br>5 nota(s) de R$ 100,00<br>0 nota(s) de R$ 50,00<br>0 nota(s) de R$ 20,00<br>0 nota(s) de R$ 10,00<br>0 nota(s) de R$ 5,00<br>1 nota(s) de R$ 2,00<br>1 nota(s) de R$ 1,00     |

# 📚 Solução

Dividimos o valor pelo valore da nota para saber quantas notas teremos, e com o resto dividimos pelo próximo valor de nota.

## Ex: 576

Dividimos 570 por 100 e obtemos 5 notas de 100. Resto de 70 reais.

Com 70 reais dividimos por 50 e obtemos 1 nota de 50. Resto de 20.

Dividimos 20 por 20 e obtemos um. Resto 6.

6 não é divisível por 10. Dividido por 5 dá 1 com resto 1.

1 não é divisível por 2. Dividindo 1 por 1 temos resto 0, finalizando a questão.

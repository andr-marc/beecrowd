# 📖 Desafio 1048

**Veja no site do [desafio](https://www.beecrowd.com.br/judge/pt/problems/view/1048)**

A empresa ABC resolveu conceder um aumento de salários a seus funcionários de acordo com a tabela abaixo:

| Salário           | Percentual de Reajuste |
| ----------------- | ---------------------- |
| 0 - 400.00        | 15%                    |
| 400.01 - 800.00   | 12%                    |
| 800.01 - 1200.00  | 10%                    |
| 1200.01 - 2000.00 | 7%                     |
| Acima de 2000.00  | 4%                     |

Leia o salário do funcionário e calcule e mostre o novo salário, bem como o valor de reajuste ganho e o índice reajustado, em percentual.

### Entrada

A entrada contém apenas um valor de ponto flutuante, com duas casas decimais.

### Saída

Imprima 3 linhas na saída: o novo salário, o valor ganho de reajuste e o percentual de reajuste ganho, conforme exemplo abaixo.

| Exemplo de Entrada | Exemplo de Saída                                                      |
| ------------------ | --------------------------------------------------------------------- |
| 400.00             | Novo salario: 460.00<br>Reajuste ganho: 60.00<br>Em percentual: 15 %  |
| 800.01             | Novo salario: 880.01<br>Reajuste ganho: 80.00<br>Em percentual: 10 %  |
| 2000.00            | Novo salario: 2140.00<br>Reajuste ganho: 140.00<br>Em percentual: 7 % |

# 📚 Solução

Neste desafio, testamos o valor do salario e, de acordo com o valor, adicionamos o aumento. O valor do reajuste é calculado pela diferença entre o valor anterior e o valor ajustado. Com tudo calculado, basta imprimir os dados.

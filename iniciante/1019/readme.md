# 📖 Desafio 1019

**Veja no site do [desafio](https://www.beecrowd.com.br/judge/pt/problems/view/1019)**

Leia um valor inteiro, que é o tempo de duração em segundos de um determinado evento em uma fábrica, e informe-o expresso no formato horas:minutos:segundos.

### Entrada

O arquivo de entrada contém um valor inteiro N.

### Saída

Imprima o tempo lido no arquivo de entrada (segundos), convertido para horas:minutos:segundos, conforme exemplo fornecido.

| Exemplo de Entrada | Exemplo de Saída |
| ------------------ | ---------------- |
| 556                | 0:9:16           |
| 1                  | 0:0:1            |
| 140153             | 38:55:53         |

# 📚 Solução

Para resolver este desafio, criei um array para armazenar hora, minuto e segundo, respectivamente.

Usando um `for` eu verifico se tenho 60 segundos ou mais e divido por 60 para obter os minutos, em seguida, subtraio o valor de segundos equivalentes aos minutos obtidos.

O laço de repetição testa novamente, desta vez com os minutos para, caso tenha 60 ou mais, obter o valor de horas.

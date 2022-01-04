# 📖 Desafio 1020

**Veja no site do [desafio](https://www.beecrowd.com.br/judge/pt/problems/view/1020)**

Leia um valor inteiro correspondente à idade de uma pessoa em dias e informe-a em anos, meses e dias

Obs.: apenas para facilitar o cálculo, considere todo ano com 365 dias e todo mês com 30 dias. Nos casos de teste nunca haverá uma situação que permite 12 meses e alguns dias, como 360, 363 ou 364. Este é apenas um exercício com objetivo de testar raciocínio matemático simples.

### Entrada

O arquivo de entrada contém um valor inteiro.

### Saída

Imprima a saída conforme exemplo fornecido.

| Exemplo de Entrada | Exemplo de Saída                   |
| ------------------ | ---------------------------------- |
| 400                | 1 anos(s)<br>1 mes(es)<br>5 dia(s) |
| 800                | 2 ano(s)<br>2 mes(es)<br>10 dia(s) |
| 30                 | 0 anos(s)<br>1 mes(es)<br>0 dia(s) |

# 📚 Solução

Para resolver este desafio, criei as variáveis para armazenar os dias, os meses e os anos.

Os anos adicionam em 1 a cada 365 dias. Os dias são calculados os dias que causam a diferença dos dias que extrapolariam os cálculos. Os meses são os dias remanescentes divididos por 30. E por fim, o resto do calculo dos meses são os dias.

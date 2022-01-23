# 📖 Desafio 1036

**Veja no site do [desafio](https://www.beecrowd.com.br/judge/pt/problems/view/1036)**

Leia 3 valores de ponto flutuante e efetue o cálculo das raízes da equação de Bhaskara. Se não for possível calcular as raízes, mostre a mensagem correspondente “Impossivel calcular”, caso haja uma divisão por 0 ou raiz de numero negativo.

### Entrada

Leia três valores de ponto flutuante (double) A, B e C.

### Saída

Se não houver possibilidade de calcular as raízes, apresente a mensagem "Impossivel calcular". Caso contrário, imprima o resultado das raízes com 5 dígitos após o ponto, com uma mensagem correspondente conforme exemplo abaixo. Imprima sempre o final de linha após cada mensagem.

| Exemplo de Entrada | Exemplo de Saída                |
| ------------------ | ------------------------------- |
| 10.0 20.1 5.1      | R1 = -0.29788<br>R2 = -1.71212  |
| 0.0 20.0 5.0       | Impossivel calcular             |
| 10.3 203.0 5.0     | R1 = -0.02466<br>R2 = -19.68408 |
| 10.0 3.0 5.0       | Impossivel calcular             |

# 📚 Solução

Para resolver esse desafio basta apenas aplicar a formula de Bhaskara.

![image](/img/1036.webp)

Informando a mensagem "Impossivel calcular" caso:

- delta < 0, sendo delta = b² - 4.a.c
- A == 0

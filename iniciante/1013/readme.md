# 📖 Desafio 1013

**Veja no site do [desafio](https://www.beecrowd.com.br/judge/pt/problems/view/1013)**

Faça um programa que leia três valores e apresente o maior dos três valores lidos seguido da mensagem “eh o maior”. Utilize a fórmula:

![image](/img/1013.png)

Obs.: a fórmula apenas calcula o maior entre os dois primeiros (a e b). Um segundo passo, portanto é necessário para chegar no resultado esperado.

### Entrada

O arquivo de entrada contém três valores inteiros.

### Saída

Imprima o maior dos três valores seguido por um espaço e a mensagem "eh o maior".

| Exemplo de Entrada | Exemplo de Saída |
| ------------------ | ---------------- |
| 7 14 106           | 106 eh o maior   |
| 217 14 6           | 217 eh o maior   |

# 📚 Solução

Nesta questão, passamos por todos os valores, salvando o calculo entre 2 números em uma variável auxiliar. No fim do calculo, refazemos o calculo com o maior número encontrado entre os dois primeiros e o ultimo número restante

## Resolvido em

✅ JavaScript

✅ Dart 2.9

✅ Python 3.9

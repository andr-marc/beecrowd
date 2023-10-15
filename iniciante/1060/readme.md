# 📖 Desafio 1060

**Veja no site do [desafio](https://www.beecrowd.com.br/judge/pt/problems/view/1060)**

Faça um programa que leia 6 valores. Estes valores serão somente negativos ou positivos (desconsidere os valores nulos). A seguir, mostre a quantidade de valores positivos digitados.

### Entrada

Seis valores, negativos e/ou positivos.

### Saída

Imprima uma mensagem dizendo quantos valores positivos foram lidos.

| Exemplo de Entrada                | Exemplo de Saída    |
| --------------------------------- | ------------------- |
| 7<br>-5<br>6<br>-3.4<br>4.6<br>12 | 4 valores positivos |

# 📚 Solução

Para resolver esse desafio foi necessário apenas utilizar um laço de repetição para passar por todos os números. Em cada número foi feito uma verificação se o número é maior que zero, em caso positivo um contador é acrescido em 1. No final, imprimimos o valor do contador.

## Resolvido em

✅ JavaScript

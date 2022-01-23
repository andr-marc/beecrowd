# 📖 Desafio 1035

**Veja no site do [desafio](https://www.beecrowd.com.br/judge/pt/problems/view/1035)**

Leia 4 valores inteiros A, B, C e D. A seguir, se B for maior do que C e se D for maior do que A, e a soma de C com D for maior que a soma de A e B e se C e D, ambos, forem positivos e se a variável A for par escrever a mensagem "Valores aceitos", senão escrever "Valores nao aceitos".

### Entrada

Quatro números inteiros A, B, C e D.

### Saída

Mostre a respectiva mensagem após a validação dos valores.

| Exemplo de Entrada | Exemplo de Saída    |
| ------------------ | ------------------- |
| 5 6 7 8            | Valores nao aceitos |
| 2 3 2 6            | Valores aceitos     |

# 📚 Solução

Para resolver este desafio, criei uma variável booleana e chamei de `isAccepted` iniciada com valor `false`. Em um `if` eu testo todas as condições e se todas passarem, então o valor de `isAccepted` é trocado para `true`. Por fim, a mensagem se é os valores são aceitos ou não é impresso de acordo com o valor de `isAccepted`.

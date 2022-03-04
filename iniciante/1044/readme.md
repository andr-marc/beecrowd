# 📖 Desafio 1044

**Veja no site do [desafio](https://www.beecrowd.com.br/judge/pt/problems/view/1044)**

Leia 2 valores inteiros (A e B). Após, o programa deve mostrar uma mensagem **"Sao Multiplos"** ou **"Nao sao Multiplos"**, indicando se os valores lidos são múltiplos entre si.

### Entrada

A entrada contém valores inteiros.

### Saída

A saída deve conter uma das mensagens conforme descrito acima.

| Exemplo de Entrada | Exemplo de Saída  |
| ------------------ | ----------------- |
| 6 24               | Sao Multiplos     |
| 6 25               | Nao sao Multiplos |

# 📚 Solução

Neste desafio, verificamos qual é o maior número — A ou B —, e dividimos o maior pelo menor número. Caso o resto da divisão seja 0, significa que os números são multiplos; caso contrário, não são múltiplos.

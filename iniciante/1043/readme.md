# 📖 Desafio 1043

**Veja no site do [desafio](https://www.beecrowd.com.br/judge/pt/problems/view/1043)**

Leia 3 valores reais (A, B e C) e verifique se eles formam ou não um triângulo. Em caso positivo, calcule o perímetro do triângulo e apresente a mensagem:

```txt
Perimetro = XX.X
```

Em caso negativo, calcule a área do trapézio que tem A e B como base e C como altura, mostrando a mensagem

```txt
Area = XX.X
```

### Entrada

A entrada contém três valores reais.

### Saída

O resultado deve ser apresentado com uma casa decimal.

| Exemplo de Entrada | Exemplo de Saída |
| ------------------ | ---------------- |
| 6.0 4.0 2.0        | Area = 10.0      |
| 6.0 4.0 2.1        | Perimetro = 12.1 |

# 📚 Solução

Neste desafio, foi criando uma função para testar a existência do triângulo. Caso verdadeiro, é calculado a área do triângulo; caso contrario, é calculado o perímetro do trapézio.

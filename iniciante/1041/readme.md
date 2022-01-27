# 📖 Desafio 1041

**Veja no site do [desafio](https://www.beecrowd.com.br/judge/pt/problems/view/1041)**

Leia 2 valores com uma casa decimal (x e y), que devem representar as coordenadas de um ponto em um plano. A seguir, determine qual o quadrante ao qual pertence o ponto, ou se está sobre um dos eixos cartesianos ou na origem (x = y = 0).

![image](/img/1041.webp)

Se o ponto estiver na origem, escreva a mensagem “Origem”.

Se o ponto estiver sobre um dos eixos escreva “Eixo X” ou “Eixo Y”, conforme for a situação.

### Entrada

A entrada contem as coordenadas de um ponto.

### Saída

A saída deve apresentar o quadrante em que o ponto se encontra.

| Exemplo de Entrada | Exemplo de Saída |
| ------------------ | ---------------- |
| 4.5 -2.2           | Q4               |
| 0.1 0.1            | Q1               |
| 0.0 0.0            | Origem           |

# 📚 Solução

Neste desafio, são recebidos os valores das coordenadas e testado as condições para reconhecer a posição do ponto no plano cartesiano:

- **Origem**:

  x = y = 0;

- **Eixo X**:

  y = 0;

- **Eixo y**:

  x = 0;

- **Q1**:

  x > 0 e y > 0;

- **Q2**:

  x < 0 e y > 0;

- **Q3**:

  x < 0 e y < 0;

- **Q4**:

  x > 0 e y < 0;

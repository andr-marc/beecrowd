# 📖 Desafio 1046

**Veja no site do [desafio](https://www.beecrowd.com.br/judge/pt/problems/view/1046)**

Leia a hora inicial e a hora final de um jogo. A seguir calcule a duração do jogo, sabendo que o mesmo pode começar em um dia e terminar em outro, tendo uma duração mínima de 1 hora e máxima de 24 horas.

### Entrada

A entrada contém dois valores inteiros representando a hora de início e a hora de fim do jogo.

### Saída

Apresente a duração do jogo conforme exemplo abaixo.

| Exemplo de Entrada | Exemplo de Saída        |
| ------------------ | ----------------------- |
| 16 2               | O JOGO DUROU 10 HORA(S) |
| 0 0                | O JOGO DUROU 24 HORA(S) |
| 2 16               | O JOGO DUROU 14 HORA(S) |

# 📚 Solução

Neste desafio, verificamos se os 2 números são iguais, se forem o jogo vai ter duração de 24 horas.

Para calcular a duração, simplesmente subtraímos a hora final com a hora inicial (ex.: 16 - 2 = 14), mas caso a hora final seja menor - pois foi após a meia-noite -, para facilitar o calculo adicionamos 24 a ela (ex.: (2 + 24) - 16 = 10).

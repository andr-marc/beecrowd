# 📖 Desafio 1047

**Veja no site do [desafio](https://www.beecrowd.com.br/judge/pt/problems/view/1047)**

Leia a hora inicial, minuto inicial, hora final e minuto final de um jogo. A seguir calcule a duração do jogo.

Obs: O jogo tem duração mínima de um (1) minuto e duração máxima de 24 horas.

### Entrada

Quatro números inteiros representando a hora de início e fim do jogo.

### Saída

Mostre a seguinte mensagem: “O JOGO DUROU XXX HORA(S) E YYY MINUTO(S)” .

| Exemplo de Entrada | Exemplo de Saída                      |
| ------------------ | ------------------------------------- |
| 7 8 9 10           | O JOGO DUROU 2 HORA(S) E 2 MINUTO(S)  |
| 7 7 7 7            | O JOGO DUROU 24 HORA(S) E 0 MINUTO(S) |
| 7 10 8 9           | O JOGO DUROU 0 HORA(S) E 59 MINUTO(S) |

# 📚 Solução

Neste desafio, verificamos se a hora e minuto final e inicial são iguais, se forem o jogo vai ter duração de 24 horas.

Para calcular a duração, primeiro calculamos os minutos. Caso o minuto inicial seja maior que o final, adicionamos 60 minutos no minuto final para facilitar a conta, mas a hora recebe um decréscimo de 1.

Em seguida, calculamos a hora. Se a hora inicial for maior que que a hora final, então adicionamos 24 horas na hora final e subtraímos a hora final da inicial. Entretanto, caso a hora final fique negativa, ainda precisamos adicionar mais 24 horas para corrigir o resultado.

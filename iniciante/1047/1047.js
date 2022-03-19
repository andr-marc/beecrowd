var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

var entradas = lines.shift().split(" ");

// hora e minuto inicial
var hrInicial = parseFloat(entradas[0]);
var minInicial = parseFloat(entradas[1]);
// hora e minuto final
var hrFinal = parseFloat(entradas[2]);
var minFinal = parseFloat(entradas[3]);

if (hrInicial <= 24 || minInicial <= 60 || c <= 24 || d <= 60) {
  var hora = 0;
  var minuto = 0;
  if (hrInicial == hrFinal && minInicial == minFinal) {
    hora = 24;
    minuto = 0;
  } else {
    // minuto
    if (minInicial > minFinal) {
      minFinal += 60;
      hora = -1;
    }
    minuto = minFinal - minInicial;
    // hora
    if (hrInicial > hrFinal) hrFinal += 24;
    hora = hrFinal - hrInicial + hora;
    if (hora < 0) hora += 24;
  }
  console.log(`O JOGO DUROU ${hora} HORA(S) E ${minuto} MINUTO(S)`);
}

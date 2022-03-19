var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

var entradas = lines.shift().split(" ");

var a = parseFloat(entradas[0]);
var b = parseFloat(entradas[1]);

if (a <= 24 || b <= 24) {
  var tempo;
  if (a == b) tempo = 24;
  else {
    if (a > b) b += 24;
    tempo = b - a;
  }
  console.log(`O JOGO DUROU ${tempo} HORA(S)`);
}

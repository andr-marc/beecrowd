var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

var valor = parseInt(lines.shift());
var notas = [100, 50, 20, 10, 5, 2, 1];

console.log(valor);

for (let i = 0; i < notas.length; i++) {
  var aux = Math.trunc(valor / notas[i]);
  valor -= aux * notas[i];

  console.log(`${aux} nota(s) de R$ ${notas[i]},00`);
}

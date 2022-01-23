var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

var value = parseFloat(lines.shift().replace(",", "."));

var dinheiro = [
  100.0, 50.0, 20.0, 10.0, 5.0, 2.0, 1.0, 0.5, 0.25, 0.1, 0.05, 0.01,
];

for (let index = 0; index < dinheiro.length; index++) {
  var aux = Math.trunc(value / dinheiro[index]);
  value -= aux * dinheiro[index];

  value = value.toFixed(2);

  if (index === 0) console.log("NOTAS:");
  if (index === 6) console.log("MOEDAS:");

  if (index < 6) {
    console.log(`${aux} nota(s) de R$ ${dinheiro[index].toFixed(2)}`);
  } else {
    console.log(`${aux} moeda(s) de R$ ${dinheiro[index].toFixed(2)}`);
  }
}

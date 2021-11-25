var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

var nome = parseInt(lines.shift());
var sal_fixo = parseFloat(lines.shift());
var vendas = parseFloat(lines.shift());

var salario = sal_fixo + vendas * 0.15;

console.log(`TOTAL = R$ ${salario.toFixed(2)}`);

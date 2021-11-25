var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

var numero = parseInt(lines.shift());
var quant_hr = parseInt(lines.shift());
var valor_hr = parseFloat(lines.shift());

var salario = quant_hr * valor_hr;

console.log(`NUMBER = ${numero}`);
console.log(`SALARY = U$ ${salario.toFixed(2)}`);

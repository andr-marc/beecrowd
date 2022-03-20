var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

var salario = lines.shift();

var novoSalario;
var reajuste;
var porcentual;

if (salario <= 400) {
  novoSalario = salario * 1.15;
  porcentual = 15;
} else if (salario > 400 && salario <= 800) {
  novoSalario = salario * 1.12;
  porcentual = 12;
} else if (salario > 800 && salario <= 1200) {
  novoSalario = salario * 1.1;
  porcentual = 10;
} else if (salario > 1200 && salario <= 2000) {
  novoSalario = salario * 1.07;
  porcentual = 7;
} else {
  novoSalario = salario * 1.04;
  porcentual = 4;
}
reajuste = novoSalario - salario;

console.log(`Novo salario: ${novoSalario.toFixed(2)}`);
console.log(`Reajuste ganho: ${reajuste.toFixed(2)}`);
console.log(`Em percentual: ${porcentual} %`);

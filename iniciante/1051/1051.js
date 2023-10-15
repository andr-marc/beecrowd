var input = require("fs").readFileSync("../../dev/stdin", "utf8");
var lines = input.split("\n");

var salario = parseFloat(lines.shift()).toFixed(2);
var imposto = 0

if (salario > 2000)
    imposto += (salario - 2000 > 1000 ? 1000 : salario - 2000) * 0.08
if (salario > 3000) 
    imposto += (salario - 3000 > 1500 ? 1500 : salario - 3000) * 0.18
if (salario > 4500) 
    imposto += (salario - 4500) * 0.28

console.log(imposto ? `R$ ${imposto.toFixed(2)}` : 'Isento' );
var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

var line = lines.shift().split(" ");

var triangulo = (line[0] * line[2]) / 2;
var circulo = 3.14159 * line[2] * line[2];
var trapezio = 0.5 * (parseFloat(line[0]) + parseFloat(line[1])) * line[2];
var quadrado = line[1] * line[1];
var retangulo = line[0] * line[1];

console.log(
  `TRIANGULO: ${triangulo.toFixed(3)}
CIRCULO: ${circulo.toFixed(3)}
TRAPEZIO: ${trapezio.toFixed(3)}
QUADRADO: ${quadrado.toFixed(3)}
RETANGULO: ${retangulo.toFixed(3)}`
);

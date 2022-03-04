var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

var entradas = lines
  .shift()
  .split(" ")
  .sort((a, b) => b - a);

var a = parseFloat(entradas[0]);
var b = parseFloat(entradas[1]);
var c = parseFloat(entradas[2]);

if (a >= b + c) console.log("NAO FORMA TRIANGULO");
else {
  if (a ** 2 == b ** 2 + c ** 2) console.log("TRIANGULO RETANGULO");
  if (a ** 2 > b ** 2 + c ** 2) console.log("TRIANGULO OBTUSANGULO");
  if (a ** 2 < b ** 2 + c ** 2) console.log("TRIANGULO ACUTANGULO");
  if (a == b && a == c && b == c) console.log("TRIANGULO EQUILATERO");
  if ((a == b && a != c) || (a == c && a != b) || (b == c && c != a))
    console.log("TRIANGULO ISOSCELES");
}

var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

var entradas = lines.shift().split(" ");

var a = parseFloat(entradas[0]);
var b = parseFloat(entradas[1]);
var c = parseFloat(entradas[2]);

function ehTriangulo(a, b, c) {
  if (a == 0 || b == 0 || c == 0) return false;
  if (a < b + c && b < a + c && c < a + b) return true;
  else return false;
}

if (ehTriangulo(a, b, c)) {
  var perimetro = a + b + c;
  console.log(`Perimetro = ${perimetro.toFixed(1)}`);
} else {
  var area = ((a + b) * c) / 2;
  console.log(`Area = ${area.toFixed(1)}`);
}

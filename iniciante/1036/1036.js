var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

lines = lines.shift().split(" ");

var A = parseFloat(lines.shift());
var B = parseFloat(lines.shift());
var C = parseFloat(lines.shift());

var delta = B * B - 4 * A * C;

if (delta < 0 || A === 0) {
  console.log("Impossivel calcular");
} else {
  delta = Math.sqrt(delta);

  var aux = (-B + delta) / (A + A);
  console.log(`R1 = ${aux.toFixed(5)}`);

  aux = (-B - delta) / (A + A);
  console.log(`R2 = ${aux.toFixed(5)}`);
}

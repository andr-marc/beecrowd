var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

var a = parseFloat(lines.shift());
var b = parseFloat(lines.shift());
var c = parseFloat(lines.shift());
var d = parseFloat(lines.shift());

console.log(`DIFERENCA = ${a * b - c * d}`);

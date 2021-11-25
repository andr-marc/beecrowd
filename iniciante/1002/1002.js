var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

const pi = 3.14159;
var raio = parseFloat(lines.shift());
var a = raio * raio * pi;

console.log(`A=${a.toFixed(4)}`);

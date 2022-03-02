var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

var entradas = lines.shift().split(" ");
var sorted = [...entradas].sort((a, b) => a - b);

sorted.forEach((element) => console.log(element));
console.log();
entradas.forEach((element) => console.log(element));

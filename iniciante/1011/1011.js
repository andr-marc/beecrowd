var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

const pi = 3.14159;
var raio = parseInt(lines.shift());
var volume = (4.0 / 3.0) * pi * raio * raio * raio;

console.log(`VOLUME = ${volume.toFixed(3)}`);

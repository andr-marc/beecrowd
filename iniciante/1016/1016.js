var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

var km = lines.shift();

console.log(`${km * 2} minutos`);

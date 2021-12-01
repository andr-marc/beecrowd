var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

var line = lines.shift().split(" ");

var a = parseInt(line[0]);
var b = parseInt(line[1]);
var c = parseInt(line[2]);

var aux = (a + b + Math.abs(a - b)) / 2;

var maior = (aux + c + Math.abs(aux - c)) / 2;

console.log(`${maior} eh o maior`);

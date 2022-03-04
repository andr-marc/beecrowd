var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

var entradas = lines.shift().split(" ");

var a = parseInt(entradas[0]);
var b = parseInt(entradas[1]);

var isMaiorA;
var resto;

if (a >= b) isMaiorA = true;
else isMaiorA = false;

if (isMaiorA) resto = a % b;
else resto = b % a;

if (resto === 0) console.log("Sao Multiplos");
else console.log("Nao sao Multiplos");

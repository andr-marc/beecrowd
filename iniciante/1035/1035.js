var input = require("fs").readFileSync("dev/stdin", "utf8");
var lines = input.split("\n");

lines = lines.shift().split(" ");

var A = parseInt(lines.shift());
var B = parseInt(lines.shift());
var C = parseInt(lines.shift());
var D = parseInt(lines.shift());

var isAccepted = false;

if (B > C && D > A && C + D > A + B && C >= 0 && D >= 0 && A % 2 === 0) {
  isAccepted = true;
}

isAccepted
  ? console.log("Valores aceitos")
  : console.log("Valores nao aceitos");

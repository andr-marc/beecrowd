var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

var num = parseInt(lines.shift());
console.log(num * 4);
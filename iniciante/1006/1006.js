var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

var a = parseFloat(lines.shift());
var b = parseFloat(lines.shift());
var c = parseFloat(lines.shift());

var media = (a * 0.02 + b * 0.03 + c * 0.05) / 0.1;

console.log(`MEDIA = ${media.toFixed(1)}`);

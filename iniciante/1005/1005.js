var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

var a = parseFloat(lines.shift());
var b = parseFloat(lines.shift());

var media = (a * 0.035 + b * 0.075) / 0.11;

console.log(`MEDIA = ${media.toFixed(5)}`);

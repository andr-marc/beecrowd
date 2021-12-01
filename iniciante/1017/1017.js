var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

var t = parseInt(lines.shift());
var km_h = parseInt(lines.shift());

var l = (t * km_h) / 12;

console.log(l.toFixed(3));

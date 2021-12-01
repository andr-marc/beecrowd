var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

var km = parseFloat(lines.shift());
var l = parseFloat(lines.shift());

var media = km / l;

console.log(`${media.toFixed(3)} km/l`);

var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

var val_objetivo = parseInt(lines.shift());
var val_lido = parseInt(lines.shift());
console.log(val_objetivo - val_lido);
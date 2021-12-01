var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

var p1 = lines.shift().split(" ");
var p2 = lines.shift().split(" ");

var x = parseFloat(p2[0]) - parseFloat(p1[0]);
var y = parseFloat(p2[1]) - parseFloat(p1[1]);

var d = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));

console.log(d.toFixed(4));

var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

var num = lines.shift();

var mes = Intl.DateTimeFormat('en', { month: 'long' }).format(new Date(num));
console.log(mes);
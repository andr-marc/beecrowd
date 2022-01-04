var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

var d = parseInt(lines.shift());

var m = 0,
  a = 0;

if (d >= 365) {
  a = Math.trunc(d / 365);
  d = d - Math.trunc(d / 365) * 365;
}

if (d >= 30) {
  m = Math.trunc(d / 30);
  d -= m * 30;
}

console.log(`${a} ano(s)\n${m} mes(es)\n${d} dia(s)`);

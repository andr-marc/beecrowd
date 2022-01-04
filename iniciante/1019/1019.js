var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

var s = parseInt(lines.shift());

var tempo = [0, 0, s];

for (let index = tempo.length - 1; index > 0; index--) {
  if (tempo[index] > 60) {
    var aux = Math.trunc(tempo[index] / 60);
    tempo[index - 1] += aux;
    tempo[index] -= aux * 60;
  }
}
console.log(`${tempo[0]}:${tempo[1]}:${tempo[2]}`);

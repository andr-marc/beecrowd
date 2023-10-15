var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

var resposta = parseInt(lines.shift());
var palpites = lines.shift().split(" ");
var count = 0;

palpites.forEach(palpite => {
    parseInt(palpite) === resposta ? count++ : null;
});

console.log(count);
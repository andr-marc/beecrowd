var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

var notas = lines.shift().split(" ");

var nota_exame = parseFloat(lines.shift());

media =
  (notas[0] * 2 + notas[1] * 3 + notas[2] * 4 + notas[3] * 1) / (2 + 3 + 4 + 1);

console.log(`Media: ${media.toFixed(1)}`);

if (media >= 7.0) {
  console.log("Aluno aprovado.");
} else if (media >= 5) {
  console.log("Aluno em exame.");
  console.log(`Nota do exame: ${nota_exame.toFixed(1)}`);

  var aux = (media + nota_exame) / 2;

  if (aux >= 5) {
    console.log("Aluno aprovado.");
  } else {
    console.log("Aluno reprovado.");
  }
  console.log(`Media final: ${aux.toFixed(1)}`);
} else {
  console.log("Aluno reprovado.");
}

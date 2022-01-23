var input = require("fs").readFileSync("dev/stdin", "utf8");
var lines = input.split("\n");

var entrada = parseFloat(lines.shift());

if (entrada >= 0.0 && entrada <= 25.0) {
  console.log("Intervalo [0,25]");
} else if (25.0 < entrada && entrada <= 50.0) {
  console.log("Intervalo (25,50]");
} else if (50.0 < entrada && entrada <= 75.0) {
  console.log("Intervalo (50,75]");
} else if (75.0 < entrada && entrada <= 100.0) {
  console.log("Intervalo (75,100]");
} else {
  console.log("Fora de intervalo");
}

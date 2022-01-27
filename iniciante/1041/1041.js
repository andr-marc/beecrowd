var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

var xy = lines.shift().split(" ");

if (xy[0] == 0.0 && xy[1] == 0.0) {
  console.log("Origem");
} else if (xy[0] != 0.0 && xy[1] == 0.0) {
  console.log("Eixo X");
} else if (xy[0] == 0.0 && xy[1] != 0.0) {
  console.log("Eixo Y");
} else if (xy[0] > 0.0 && xy[1] > 0.0) {
  console.log("Q1");
} else if (xy[0] < 0.0 && xy[1] > 0.0) {
  console.log("Q2");
} else if (xy[0] < 0.0 && xy[1] < 0.0) {
  console.log("Q3");
} else if (xy[0] > 0.0 && xy[1] < 0.0) {
  console.log("Q4");
}

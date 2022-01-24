var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

var lines = lines.shift().split(" ");

if (lines[0] == 1) {
  lines[0] = 4.0;
} else if (lines[0] == 2) {
  lines[0] = 4.5;
} else if (lines[0] == 3) {
  lines[0] = 5.0;
} else if (lines[0] == 4) {
  lines[0] = 2.0;
} else if (lines[0] == 5) {
  lines[0] = 1.5;
}

var total = lines[0] * lines[1];

console.log(`Total: R$ ${total.toFixed(2)}`);

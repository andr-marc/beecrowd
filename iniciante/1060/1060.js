var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

var count = 0;

lines.forEach((num) => {
    if(num > 0) count++;
})

console.log(`${count} valores positivos`);
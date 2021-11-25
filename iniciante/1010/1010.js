var input = require("fs").readFileSync("dev/stdin", "utf8");
var lines = input.split("\n");

var produto1 = lines.shift().split(" ");
var produto2 = lines.shift().split(" ");

var total = produto1[1] * produto1[2] + produto2[1] * produto2[2];

console.log(`VALOR A PAGAR: R$ ${total.toFixed(2)}`);

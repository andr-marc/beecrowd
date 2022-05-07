var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

var a = lines.shift();
var b = lines.shift();
var c = lines.shift();

const animals = {
  vertebrado: {
    ave: {
      carnivoro: "aguia",
      onivoro: "pomba",
    },
    mamifero: {
      onivoro: "homem",
      herbivoro: "vaca",
    },
  },
  invertebrado: {
    inseto: {
      hematofago: "pulga",
      herbivoro: "lagarta",
    },
    anelideo: {
      hematofago: "sanguessuga",
      onivoro: "minhoca",
    },
  },
};

console.log(animals[a][b][c]);

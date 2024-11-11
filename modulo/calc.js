//chamando as funções de cada arquivo em forma de variavel
var SomaF = require("./soma");
var SubF = require("./sub");
var MultF = require("./mult");
var DivF = require("./div");

var A = 100
var B = 50

//lendo as funções
console.log(SomaF(A, B));

console.log(SubF(A, B));

console.log(MultF(A, B));

console.log(DivF(A, B));
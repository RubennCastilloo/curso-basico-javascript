//Coercion implicita
var a = 4 + "7"; // Coercion implicita consola nos regresa "47" en string
//typeof a "a" nos devuelve un string

var b = 4 * "7"; // Coercion implicita consola nos regresa "28" en numero porque JS supone que no queriamos usar un string
//typeof a "b" nos devuelve un number

//Coercion explicita
var a = 20;
var b = a + "";
var c = String(a); //Para obligar a convertir la variable "a" en un string
var d = Number(c); //Para obligar a convertir la variable "c" en Number

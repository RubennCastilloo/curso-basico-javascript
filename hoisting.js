//Hoisting con variables
var miNombre = undefined;

console.log(miNombre + " Soy ese hoisting");

miNombre = "Ruben";

//Hoisting con funciones
hey();

function hey(){
    console.log("Hola " + miNombre);
}
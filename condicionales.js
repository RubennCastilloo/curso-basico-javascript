//Condicional if, else y elseif

var edad = 18;

if(edad === 18){
    console.log('Puedes votar, sera tu primera votacion');
} else if(edad > 18) {
    console.log('Puedes votar de nuevo');
} else {
    console.log("Aun no puedes votar");
}


//Operador ternario
var numero = 1;

var resultado = numero === 1 ? "Si, soy un 1" : "No, no soy 1";
//Scope en JS
var nombre = "Ruben"; //Scope Global

function miNombre() {
    var apellido = "Castillo"; //Scope Local
    console.log(nombre + " " + apellido);
}

//El scope global no puede acceder al local, pero el local si puede acceder al scope global

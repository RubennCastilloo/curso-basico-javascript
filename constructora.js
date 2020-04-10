//Objects: Funcion constructora

function auto(marca, modelo, anio) {
    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio;
}

var autoNuevo = new auto("Tesla", "Model 3", "2020");
var autoNuevo2 = new auto("Chevrolet", "Corsa", "2006");
var autoNuevo3 = new auto("Tesla", "Model X", "2020");
var autoNuevo4 = new auto("Tesla", "CyberTruck", "2020");

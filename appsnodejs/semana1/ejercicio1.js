const Module = require("module");

const sumar= (numero1,numero2)=>{
    //var numero1 = 4, numero2 = 6;
    var operacionSuma = numero1 + numero2;
    console.log("La suma entre " + numero1  + " + " + numero2 + " es igual a " + operacionSuma);
}

const restar= (numero1,numero2)=>{
    //var numero1 = 4, numero2 = 6;
    var operacionResta = numero1 - numero2;
    console.log("La resta entre " + numero1  + " - " + numero2 + " es igual a " + operacionResta);
}

const multiplicar= (numero1,numero2)=>{
    //var numero1 = 4, numero2 = 6;
    var operacionMultiplicacion = numero1 * numero2;
    console.log("La multiplicación entre " + numero1  + " * " + numero2 + " es igual a " + operacionMultiplicacion);
}

const dividir= (numero1,numero2)=>{
    //var numero1 = 4, numero2 = 6;
    var operacionDivision = numero1 / numero2;
    console.log("La división entre " + numero1  + " / " + numero2 + " es igual a " + operacionDivision);
}
/*
exports.sumar=sumar
exports.restar=restar
exports.multiplicar=multiplicar
exports.dividir=dividir*/

const op = {}

op.sumar=sumar
op.restar=restar
op.multiplicar=multiplicar
op.dividir=dividir

module.exports=op;
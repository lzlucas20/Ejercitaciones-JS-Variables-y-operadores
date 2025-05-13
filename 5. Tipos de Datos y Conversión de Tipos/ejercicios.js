// Ejercicio 5.1: Declara una variable cadenaNumero y asígnale el valor "123".
// Convierte esta cadena a un número y almacénalo en una nueva variable numeroConvertido.
// Muestra ambos valores en la consola.

// Tu código aquí:
let cadenaNumero = "123"
let numeroConvertido = parseInt(cadenaNumero)

console.log(numeroConvertido)
console.log(cadenaNumero)

// Ejercicio 5.2: Declara una variable booleano y asígnale el valor true.
// Convierte este valor a una cadena y almacénalo en una nueva variable cadenaBooleano.
// Muestra ambos valores en la consola.

// Tu código aquí:
let booleano = true
let cadenaBooleano = booleano.toString()
console.log(booleano)
console.log(cadenaBooleano)
// No modifiques esta línea
module.exports = { cadenaNumero, numeroConvertido, booleano, cadenaBooleano }

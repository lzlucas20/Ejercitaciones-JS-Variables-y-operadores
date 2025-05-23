// Ejercicio 7.1: Declara una variable usando let dentro de un bloque de código ({})
// y muestra que no está disponible fuera del bloque.

// Tu código aquí:
{let resultadoBloque = "Hola!"}
console.log(this.variableExisteFueraDelBloque)
// Ejercicio 7.2: Declara una constante PI y asígnale el valor 3.14159.
// Intenta reasignar otro valor a PI y observa lo que ocurre.

// Tu código aquí:
const PI = 3.14159
let intentoReasignarPI = 20
PI = errorAlReasignar
// Ejercicio 7.3: Declara una variable mensaje usando var y asígnale el valor "Hola Mundo".
// Declara la misma variable mensaje dentro de una función y asígnale un valor diferente.
// Muestra ambos valores en la consola para ver cómo var afecta el alcance de las variables.

// Tu código aquí:
var mensaje = "Hola mundo"
function variableVar(hola){
  mensaje = "Hola nuevo resultado"
}
console.log(mensaje)
console.log(variableVar)
// No modifiques esta línea
module.exports = {
  resultadoBloque,
  variableExisteFueraDelBloque,
  PI,
  intentoReasignarPI,
  errorAlReasignar,
  mensajeGlobal,
  mensajeFuncion,
  mensajeDespuesDeFuncion
}

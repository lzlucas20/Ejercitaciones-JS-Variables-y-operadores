// Ejercicio 6.1: Declara una variable frase y asígnale el valor "JavaScript es genial".
// Usa el método length para mostrar la longitud de la cadena.

// Tu código aquí:
let frase = "JavaScript es genial"
longitudFrase = frase.length
// Ejercicio 6.2: Usa el método indexOf para encontrar la posición de la palabra "genial" en la variable frase
// y muestra el resultado en la consola.

// Tu código aquí:
posicionGenial = frase.indexOf("genial")

// Ejercicio 6.3: Usa el método slice para extraer la palabra "JavaScript" de la variable frase
// y muestra el resultado en la consola.

// Tu código aquí:
console.log(frase.slice())

// Ejercicio 6.4: Declara una variable nombreCompleto y asígnale el valor "   Juan Pérez   ".
// Usa el método trim para eliminar los espacios en blanco al principio y al final de la cadena
// y muestra el resultado en la consola.

// Tu código aquí:
let nombreCompleto = "   Juan Pérez   "
nombreSinEspacios = nombreCompleto.trim()
console.log(this.nombreSinEspacios)
// Ejercicio 6.5: Declara una variable cancion y asígnale el valor "Twinkle, twinkle, little star".
// Usa el método split para dividir la cadena en palabras individuales
// y muestra el resultado en la consola.

// Tu código aquí:
let cancion = "Twinkle, twinkle, little star"
palabrasCancion = cancion.split()
console.log(palabrasCancion)
// No modifiques esta línea
module.exports = {
  frase,
  longitudFrase,
  posicionGenial,
  palabraJavaScript,
  nombreCompleto,
  nombreSinEspacios,
  cancion,
  palabrasCancion
}

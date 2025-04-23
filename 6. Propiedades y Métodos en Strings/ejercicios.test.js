const {
  frase, longitudFrase, posicionGenial, palabraJavaScript,
  nombreCompleto, nombreSinEspacios,
  cancion, palabrasCancion
} = require('./ejercicios')

describe('Propiedades y Métodos en Strings', () => {
  test('Ejercicio 6.1: obtención de longitud de cadena correcta', () => {
    expect(frase).toBe('JavaScript es genial')
    expect(longitudFrase).toBe(20)
  })

  test('Ejercicio 6.2: obtención de posición de palabra correcta', () => {
    expect(posicionGenial).toBe(14)
  })

  test('Ejercicio 6.3: extracción de parte de cadena correcta', () => {
    expect(palabraJavaScript).toBe('JavaScript')
  })

  test('Ejercicio 6.4: eliminación de espacios en blanco correcta', () => {
    expect(nombreCompleto).toBe('   Juan Pérez   ')
    expect(nombreSinEspacios).toBe('Juan Pérez')
  })

  test('Ejercicio 6.5: división de cadena en palabras correcta', () => {
    expect(cancion).toBe('Twinkle, twinkle, little star')
    expect(Array.isArray(palabrasCancion)).toBe(true)
    expect(palabrasCancion).toEqual(['Twinkle,', 'twinkle,', 'little', 'star'])
  })
})

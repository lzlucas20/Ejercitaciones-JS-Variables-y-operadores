const { valorInicial, suma, resta, multiplicacion, division, modulo } = require('./ejercicios')

describe('Operadores de Asignación', () => {
  test('Ejercicio 4.1: valor inicial de x correcto', () => {
    expect(valorInicial).toBe(10)
  })

  test('Ejercicio 4.1: suma con asignación correcta', () => {
    expect(suma).toBe(15) // 10 + 5
  })

  test('Ejercicio 4.1: resta con asignación correcta', () => {
    expect(resta).toBe(12) // 15 - 3
  })

  test('Ejercicio 4.1: multiplicación con asignación correcta', () => {
    expect(multiplicacion).toBe(24) // 12 * 2
  })

  test('Ejercicio 4.1: división con asignación correcta', () => {
    expect(division).toBe(6) // 24 / 4
  })

  test('Ejercicio 4.1: módulo con asignación correcta', () => {
    expect(modulo).toBe(0) // 6 % 3
  })
})

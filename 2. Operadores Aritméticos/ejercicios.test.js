const { suma, resta, multiplicacion, division, modulo } = require('./ejercicios')

describe('Operadores Aritméticos', () => {
  test('Ejercicio 2.1: operaciones aritméticas calculadas correctamente', () => {
    expect(suma).toBe(8)
    expect(resta).toBe(2)
    expect(multiplicacion).toBe(15)
    expect(division).toBe(5 / 3)
    expect(modulo).toBe(2)
  })
})

const { cadenaNumero, numeroConvertido, booleano, cadenaBooleano } = require('./ejercicios')

describe('Tipos de Datos y Conversión de Tipos', () => {
  test('Ejercicio 5.1: conversión de cadena a número correcta', () => {
    expect(cadenaNumero).toBe('123')
    expect(typeof cadenaNumero).toBe('string')
    expect(numeroConvertido).toBe(123)
    expect(typeof numeroConvertido).toBe('number')
  })

  test('Ejercicio 5.2: conversión de booleano a cadena correcta', () => {
    expect(booleano).toBe(true)
    expect(typeof booleano).toBe('boolean')
    expect(cadenaBooleano).toBe('true')
    expect(typeof cadenaBooleano).toBe('string')
  })
})

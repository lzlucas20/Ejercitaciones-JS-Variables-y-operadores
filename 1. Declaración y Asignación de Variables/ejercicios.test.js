const { nombre, edad, esEstudiante } = require('./ejercicios')

describe('Declaración y Asignación de Variables', () => {
  test('Ejercicio 1.1: variable nombre declarada correctamente', () => {
    expect(typeof nombre).toBe('string')
    expect(nombre.length).toBeGreaterThan(0)
  })

  test('Ejercicio 1.2: variable edad declarada correctamente', () => {
    expect(typeof edad).toBe('number')
    expect(edad).toBeGreaterThan(0)
  })

  test('Ejercicio 1.3: variable esEstudiante declarada correctamente', () => {
    expect(typeof esEstudiante).toBe('boolean')
  })
})

const { saludo, nombre, resultado } = require('./ejercicios')

describe('Concatenación de Cadenas', () => {
  test('Ejercicio 3.1: variables saludo y nombre declaradas correctamente', () => {
    expect(saludo).toBe('Hola')
    expect(typeof nombre).toBe('string')
    expect(nombre.length).toBeGreaterThan(0)
  })

  test('Ejercicio 3.1: resultado de concatenación correcto', () => {
    expect(resultado).toBe(`${saludo} ${nombre}`)
    expect(resultado).toContain(' ') // Verifica que haya un espacio entre "Hola" y el nombre
  })
})

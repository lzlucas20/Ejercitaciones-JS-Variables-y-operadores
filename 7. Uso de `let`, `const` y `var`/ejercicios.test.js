const {
  resultadoBloque, variableExisteFueraDelBloque,
  PI, intentoReasignarPI, errorAlReasignar,
  mensajeGlobal, mensajeFuncion, mensajeDespuesDeFuncion
} = require('./ejercicios')

describe('Uso de `let`, `const` y `var`', () => {
  test('Ejercicio 7.1: scope de variables con let', () => {
    expect(resultadoBloque).toBeDefined()
    expect(variableExisteFueraDelBloque).toBe(false)
  })

  test('Ejercicio 7.2: constantes y su reasignación', () => {
    expect(PI).toBe(3.14159)
    expect(errorAlReasignar).toBe(true)
    expect(intentoReasignarPI).toBe(PI) // El valor no debe cambiar
  })

  test('Ejercicio 7.3: scope de variables con var', () => {
    expect(mensajeGlobal).toBe('Hola Mundo')
    expect(mensajeFuncion).toBe('Hola desde la función')
    expect(mensajeDespuesDeFuncion).toBe('Hola Mundo')
  })
})

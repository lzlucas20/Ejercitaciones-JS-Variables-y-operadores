# Ejercicios de JavaScript - Variables y Operadores

Este repositorio contiene una serie de ejercicios de JavaScript diseñados para reforzar los conceptos básicos sobre variables y operadores. Los ejercicios están organizados en carpetas temáticas y cada archivo `.js` contiene los enunciados de las actividades como comentarios.

## Estructura del Repositorio

```
JavaScript_ejercicios/
├── 1. Declaración y Asignación de Variables/
│   ├── ejercicios.js
│   └── ejercicios.test.js
├── 2. Operadores Aritméticos/
│   ├── ejercicios.js
│   └── ejercicios.test.js
├── 3. Concatenación de Cadenas/
│   ├── ejercicios.js
│   └── ejercicios.test.js
├── 4. Operadores de Asignación/
│   ├── ejercicios.js
│   └── ejercicios.test.js
├── 5. Tipos de Datos y Conversión de Tipos/
│   ├── ejercicios.js
│   └── ejercicios.test.js
├── 6. Propiedades y Métodos en Strings/
│   ├── ejercicios.js
│   └── ejercicios.test.js
└── 7. Uso de `let`, `const` y `var`/
    ├── ejercicios.js
    └── ejercicios.test.js
```

## Cómo empezar

### Requisitos previos

Para trabajar con estos ejercicios, necesitarás:

1. Node.js instalado en tu computadora (versión 12 o superior)
2. Un editor de código como Visual Studio Code, Sublime Text, Atom, etc.

### Pasos para ejecutar los ejercicios

1. **Forkear y Clonar el repositorio**:
   ```bash
   git clone https://github.com/tu-usuario/Ejercitaciones-JS-Variables-y-operadores
   cd Ejercitaciones-JS-Variables-y-operadores
   ```

2. **Instalar las dependencias**:
   ```bash
   npm install
   ```

3. **Editar los archivos de ejercicios**:
   - Abre el archivo `ejercicios.js` dentro de la carpeta del tema que desees trabajar.
   - Lee los comentarios que describen cada ejercicio.
   - Escribe tu código debajo de cada enunciado.
   - No modifiques las líneas que comienzan con `module.exports = {`.

4. **Ejecutar los tests para verificar tus soluciones**:
   ```bash
   npm test
   ```

## Guía paso a paso para resolver los ejercicios

1. **Lee el enunciado cuidadosamente**:
   Cada ejercicio tiene un comentario que explica lo que debes hacer.

2. **Escribe tu solución**:
   Programa tu solución debajo del comentario correspondiente.

3. **Verifica tu solución**:
   Ejecuta `npm test` para comprobar si tu solución es correcta.

4. **Analiza los errores**:
   Si el test falla, lee el mensaje de error para entender qué esperaba la prueba y cómo difiere de tu solución.

5. **Corrige y vuelve a intentar**:
   Modifica tu código y ejecuta los tests nuevamente hasta que pasen.

## Ejemplo

En el archivo `1. Declaración y Asignación de Variables/ejercicios.js` encontrarás:

```javascript
// Ejercicio 1.1: Declara una variable llamada nombre y asígnale tu nombre.
// Tu código aquí:


// Ejercicio 1.2: Declara una variable llamada edad y asígnale tu edad.
// Tu código aquí:


// No modifiques esta línea
module.exports = { nombre, edad, esEstudiante };
```

Deberías completarlo así:

```javascript
// Ejercicio 1.1: Declara una variable llamada nombre y asígnale tu nombre.
// Tu código aquí:
let nombre = "María";

// Ejercicio 1.2: Declara una variable llamada edad y asígnale tu edad.
// Tu código aquí:
let edad = 25;

// Ejercicio 1.3: Declara una variable llamada esEstudiante y asígnale el valor true si eres estudiante o false si no lo eres.
// Tu código aquí:
let esEstudiante = true;

// No modifiques esta línea
module.exports = { nombre, edad, esEstudiante };
```

## Consejos

- No modifiques las líneas que exportan las variables (`module.exports = {...}`).
- Asegúrate de que los nombres de las variables coincidan exactamente con los solicitados en los ejercicios.
- Si tienes dudas, consulta la documentación oficial de JavaScript en [MDN Web Docs](https://developer.mozilla.org/es/docs/Web/JavaScript).
- Recuerda guardar los archivos después de modificarlos.

¡Buena suerte y disfruta aprendiendo JavaScript!
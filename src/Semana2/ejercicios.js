// Datos del aprendiz
// Se definen el nombre y la ficha del estudiante.
const nombre = "Carolina";
const ficha = 3223874;

// Notas
// Se asignan las tres calificaciones que se usarán para el cálculo.
const nota1 = 4.0;
const nota2 = 4.5;
const nota3 = 3.8;

// Cálculo del promedio
// Se suman las tres notas y se dividen entre 3.
const promedio = (nota1 + nota2 + nota3) / 3;

// Impresión de datos
// Se muestran en consola el nombre, ficha y promedio con 2 decimales.
console.log(`Aprendiz: ${nombre}`);
console.log(`Ficha: ${ficha}`);
console.log(`Promedio: ${promedio.toFixed(2)}`);

// Evaluación del estado
// Se verifica si el promedio es mayor o igual a 3.0.
const aprobado = promedio >= 3.0;

// Resultado final
// Se muestra si el aprendiz está aprobado o no usando operador ternario.
console.log(`Estado: ${aprobado ? 'APROBADO' : 'NOAPROBADO'}`);

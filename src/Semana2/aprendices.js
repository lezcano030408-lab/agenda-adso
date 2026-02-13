// Array de aprendices con id, nombre, ficha y nota
const aprendices = [
  { id: 1, nombre: "Ana", ficha: 3223874, nota: 4.2 },
  { id: 2, nombre: "Luis", ficha: 3223874, nota: 3.5 },
  { id: 3, nombre: "María", ficha: 3223875, nota: 4.8 }
];

// 1. Filtra y retorna aprendices con nota >= 3.0
function obtenerAprobados(aprendices) {
  return aprendices.filter(aprendiz => aprendiz.nota >= 3.0);
}

// 2. Calcula y retorna el promedio del grupo
function calcularPromedio(aprendices) {
  if (aprendices.length === 0) return 0; // Evita dividir por 0
  const total = aprendices.reduce((sum, aprendiz) => sum + aprendiz.nota, 0);
  return total / aprendices.length;
}

// 3. Busca un aprendiz por nombre (sin importar mayúsculas/minúsculas)
function buscarPorNombre(aprendices, nombre) {
  return aprendices.find(
    aprendiz => aprendiz.nombre.toLowerCase() === nombre.toLowerCase()
  );
}

// 4. Retorna un array solo con los nombres
function obtenerNombres(aprendices) {
  return aprendices.map(aprendiz => aprendiz.nombre);
}

// Ejemplos de uso de las funciones
console.log("Aprobados:", obtenerAprobados(aprendices));
console.log("Promedio:", calcularPromedio(aprendices));
console.log("Buscar por nombre 'Luis':", buscarPorNombre(aprendices, "Luis"));
console.log("Nombres:", obtenerNombres(aprendices));

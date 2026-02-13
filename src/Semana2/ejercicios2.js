// Lista de aprendices con su nombre y nota
const aprendices = [
{ nombre: "Ana", nota: 4.2 },
{ nombre: "Luis", nota: 2.8 },
{ nombre: "María", nota: 4.5 },
{ nombre: "Pedro", nota: 3.5 }
];

// Filtrar aprobados (nota >= 3.0)
const aprobados = aprendices.filter(a => a.nota >= 3.0);
console.log("Aprobados:", aprobados.length);

// Calcular promedio general del grupo
const totalNotas = aprendices.reduce((sum, a) => sum + a.nota, 0);
const promedioGrupo = totalNotas / aprendices.length;
console.log("Promedio grupo:", promedioGrupo.toFixed(2));

// Obtener solo los nombres
const nombres = aprendices.map(a => a.nombre);
console.log("Nombres:", nombres.join(", "));

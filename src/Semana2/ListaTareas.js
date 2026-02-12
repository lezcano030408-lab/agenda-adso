// lista-tareas.js

// Estado inicial: arreglo de objetos
let tareas = [
  { id: 1, texto: "Instalar React", completada: false },
  { id: 2, texto: "Aprender Hooks", completada: false },
  { id: 3, texto: "Crear Agenda ADSO", completada: false }
];

// Función para mostrar todas las tareas
const mostrarTareas = () => {
  console.log("\n=== LISTA DE TAREAS ===");
  tareas.forEach((tarea, index) => {
    const estado = tarea.completada ? "✓" : "✗";
    console.log(`${estado} ${index + 1}. ${tarea.texto}`);
  });
  console.log("======================\n");
};

// Función para agregar una tarea
const agregarTarea = (texto) => {
  const nuevaTarea = {
    id: Date.now(),
    texto,
    completada: false
  };
  tareas = [...tareas, nuevaTarea];
  console.log(`✓ Tarea agregada: "${texto}"`);
  return nuevaTarea;
};

// Función para marcar como completada
const completarTarea = (id) => {
  tareas = tareas.map(tarea =>
    tarea.id === id ? { ...tarea, completada: true } : tarea
  );
  console.log(`✓ Tarea #${id} marcada como completada`);
};

// Función para eliminar una tarea
const eliminarTarea = (id) => {
  const tareaEliminada = tareas.find(t => t.id === id);
  if (!tareaEliminada) {
    console.log(`⚠️ No se encontró tarea con id ${id}`);
    return;
  }
  tareas = tareas.filter(tarea => tarea.id !== id);
  console.log(`🗑️ Tarea eliminada: "${tareaEliminada.texto}"`);
};

// Función para filtrar tareas pendientes
const obtenerPendientes = () => {
  return tareas.filter(tarea => !tarea.completada);
};

// Función para obtener estadísticas
const obtenerEstadisticas = () => {
  const total = tareas.length;
  const completadas = tareas.filter(t => t.completada).length;
  const pendientes = total - completadas;
  const porcentaje = total > 0 ? ((completadas / total) * 100).toFixed(1) : 0;

  console.log(`Total: ${total} | Completadas: ${completadas} | Pendientes: ${pendientes} | Progreso: ${porcentaje}%`);
};

// Manipulación manual del DOM
const lista = document.getElementById('lista');
tareas.forEach(tarea => {
const li = document.createElement('li');
li.textContent = tarea.texto;
lista.appendChild(li);
});

// ===== DEMOSTRACIÓN =====
console.log("=== DEMO DE LISTA DE TAREAS ===");
mostrarTareas();
agregarTarea("Aprender JavaScript");
completarTarea(2);
eliminarTarea(1);
mostrarTareas();
obtenerEstadisticas();
obtenerPendientes();

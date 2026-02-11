const productos = [
  { nombre: "Laptop", precio: 1200000, stock: 5 },
  { nombre: "Mouse", precio: 35000, stock: 0 },
  { nombre: "Teclado", precio: 85000, stock: 12 }
];

// 1. Productos con stock > 0
function obtenerDisponibles(productos) {
  return productos.filter(p => p.stock > 0);
}

// 2. Valor total del inventario
function calcularInventario(productos) {
  return productos.reduce((total, p) => total + (p.precio * p.stock), 0);
}

// 3. Reduce precios X%
function aplicarDescuento(productos, porcentaje) {
  return productos.map(p => ({
    ...p,
    precio: p.precio - (p.precio * porcentaje / 100)
  }));
}

// 4. Ordenar por precio (menor a mayor)
function ordenarPorPrecio(productos) {
  return [...productos].sort((a, b) => a.precio - b.precio);
}

// Mostrar resultados en consola
console.log("Disponibles:", obtenerDisponibles(productos));
console.log("Inventario total:", calcularInventario(productos));
console.log("Con descuento 10%:", aplicarDescuento(productos, 10));
console.log("Ordenados por precio:", ordenarPorPrecio(productos));

// Array de productos con nombre, precio y cantidad en stock
const productos = [
  { nombre: "Laptop", precio: 1200000, stock: 5 },
  { nombre: "Mouse", precio: 35000, stock: 0 },
  { nombre: "Teclado", precio: 85000, stock: 12 }
];

// 1. Filtra productos que tengan stock mayor a 0
function obtenerDisponibles(productos) {
  return productos.filter(p => p.stock > 0);
}

// 2. Calcula el valor total del inventario (precio * stock)
function calcularInventario(productos) {
  return productos.reduce((total, p) => total + (p.precio * p.stock), 0);
}

// 3. Aplica un descuento en porcentaje a todos los productos
function aplicarDescuento(productos, porcentaje) {
  return productos.map(p => ({
    ...p, // Copia las propiedades originales
    precio: p.precio - (p.precio * porcentaje / 100)
  }));
}

// 4. Ordena los productos por precio de menor a mayor
function ordenarPorPrecio(productos) {
  return [...productos].sort((a, b) => a.precio - b.precio);
}

// Ejecución de funciones y muestra en consola
console.log("Disponibles:", obtenerDisponibles(productos));
console.log("Inventario total:", calcularInventario(productos));
console.log("Con descuento 10%:", aplicarDescuento(productos, 10));
console.log("Ordenados por precio:", ordenarPorPrecio(productos));

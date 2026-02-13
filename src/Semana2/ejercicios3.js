// Función para crear un contacto con id y fecha automática
const crearContacto = (nombre, telefono) => ({
id: Date.now(), // Genera un id único basado en el tiempo actual
nombre: nombre,
telefono: telefono,
fechaCreacion: new Date().toLocaleDateString() // Guarda la fecha actual
});

// Crear un contacto
const contacto1 = crearContacto("Gustavo", "3001234567");
console.log(contacto1); // Muestra el objeto completo

// Desestructuración del objeto contacto
const { nombre: nombreContacto, telefono } = contacto1;
console.log(`Contacto: ${nombreContacto} - ${telefono}`); // Muestra datos específicos

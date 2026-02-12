function AgendaContactos() {
    return [
        { id: 1, nombre: "Carolina Gómez", telefono: "3001234567", correo: "caro@sena.edu.co" },
        { id: 2, nombre: "Gustavo Bolaños", telefono: "3109876543", correo: "gabo@sena.edu.co" },
        { id: 3, nombre: "Matías López", telefono: "3207654321", correo: "mati@sena.edu.co" }
    ];
}

function mostrarContacto(id) {
    const contactos = AgendaContactos();
    const contacto = contactos.find(c => c.id === id);
    if (contacto) {
        alert(`Nombre: ${contacto.nombre}\nTeléfono: ${contacto.telefono}\nCorreo: ${contacto.correo}`);
    } else {
        alert("Contacto no encontrado");
    }
}

mostrarContacto()
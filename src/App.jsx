// import { useState } from "react";
// import "./App.css";
// import ContactoCard from "./components/ContactoCard";
// import FormularioContacto from "./components/FormularioContacto";

// export default function App() {
//   const [contactos, setContactos] = useState([
//     {
//       id: 1,
//       nombre: "Carolina Pérez",
//       telefono: "300 123 4567",
//       correo: "carolina@sena.edu.co",
//       etiqueta: "Compañera",
//     },
//   ]);

//   // Agregar
//   const agregarContacto = (nuevo) => {
//     setContactos((prev) => [...prev, { id: Date.now(), ...nuevo }]);
//   };

//   // Eliminar
//   const eliminarContacto = (id) => {
//     setContactos((prev) => prev.filter((c) => c.id !== id));
//   };

//   return (
//     <main className="app-container">
//       <h1 className="app-title">Agenda ADSO v2</h1>

//       <FormularioContacto onAgregar={agregarContacto} />

//       <section className="lista-contactos">
//         {contactos.map((c) => (
//           <ContactoCard
//             key={c.id}
//             id={c.id}
//             nombre={c.nombre}
//             telefono={c.telefono}
//             correo={c.correo}
//             etiqueta={c.etiqueta}
//             onDelete={eliminarContacto}
//           />
//         ))}
//       </section>
//     </main>
//   );
// }

import { useState, useEffect } from "react";
import "./App.css";
import FormularioContacto from "./components/FormularioContacto";
import ContactoCard from "./components/ContactoCard";

export default function App() {
  const contactosGuardados =
    JSON.parse(localStorage.getItem("contactos")) || [];

  const [contactos, setContactos] = useState(contactosGuardados);

  useEffect(() => {
    localStorage.setItem("contactos", JSON.stringify(contactos));
  }, [contactos]);

  const agregarContacto = (nuevo) => {
    setContactos((prev) => [...prev, nuevo]);
  };

  const eliminarContacto = (correo) => {
    setContactos((prev) => prev.filter((c) => c.correo !== correo));
  };

  return (
    <main className="app-container">
      <h1 className="app-title">Agenda ADSO v3</h1>
      <p className="subtitulo">
        Persistencia con localStorage + UI moderna
      </p>

      <FormularioContacto onAgregar={agregarContacto} />

      {contactos.map((c) => (
        <ContactoCard
          key={c.correo}
          {...c}
          onEliminar={eliminarContacto}
        />
      ))}
    </main>
  );
}



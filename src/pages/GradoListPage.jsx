import React, { useEffect, useState } from "react";
import axios from "../services/api";

const GradoListPage = () => {
  const [datos, setDatos] = useState([]);
  const [gestionSeleccionada, setGestionSeleccionada] = useState(null);
  const [gestionesDisponibles, setGestionesDisponibles] = useState([]);

  useEffect(() => {
    const cargar = async () => {
      try {
        const res = await axios.get("/api/materias");
        setDatos(res.data);
        setGestionesDisponibles(res.data.map((g) => g.gestion));
      } catch (error) {
        console.error("Error al cargar datos:", error);
      }
    };
    cargar();
  }, []);

  const gestionActiva = datos.find((g) => g.gestion === Number(gestionSeleccionada));

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Grados y Materias por Gestión</h2>

      <div className="mb-4">
        <label className="block mb-1 font-medium">Selecciona una Gestión:</label>
        <select
          className="border p-2 rounded w-full md:w-1/3"
          onChange={(e) => setGestionSeleccionada(e.target.value)}
          value={gestionSeleccionada || ""}
        >
          <option value="">-- Selecciona una gestión --</option>
          {gestionesDisponibles.map((anio) => (
            <option key={anio} value={anio}>
              {anio}
            </option>
          ))}
        </select>
      </div>

      {gestionActiva && (
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-blue-700 mb-2">
            Gestión {gestionActiva.gestion} ({gestionActiva.estado})
          </h3>

          {gestionActiva.grados.length === 0 ? (
            <p className="text-gray-500 ml-4">Sin grados registrados.</p>
          ) : (
            <ul className="ml-4 list-disc">
              {gestionActiva.grados.map((grado) => (
                <li key={grado.id} className="mb-2">
                  <strong>{grado.nombre}</strong>
                  <ul className="ml-6 list-square text-gray-800">
                    {grado.materias.length > 0 ? (
                      grado.materias.map((m) => (
                        <li key={m.id}>
                          {m.nombre} ({m.codigo}) – Aula {m.aula} [{m.turno}]
                        </li>
                      ))
                    ) : (
                      <li className="text-gray-500">Sin materias</li>
                    )}
                  </ul>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default GradoListPage;

import React, { useEffect, useState } from "react";
import { listarGrados } from "../services/gradoService";

const GradoListPage = () => {
  const [grados, setGrados] = useState([]);

  useEffect(() => {
    const cargarGrados = async () => {
      try {
        const data = await listarGrados();
        setGrados(data);
      } catch (error) {
        console.error("Error al cargar grados:", error);
      }
    };
    cargarGrados();
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Listado de Grados</h2>
      {grados.length === 0 ? (
        <p className="text-gray-500">No hay grados registrados.</p>
      ) : (
        <table className="min-w-full text-sm border bg-white shadow">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-4 py-2">#</th>
              <th className="border px-4 py-2">Nombre</th>
              <th className="border px-4 py-2">Nivel</th>
              <th className="border px-4 py-2">Sección</th>
              <th className="border px-4 py-2">Paralelo</th>
              <th className="border px-4 py-2">Turno</th>
              <th className="border px-4 py-2">Gestión</th>
              <th className="border px-4 py-2">Ubicación</th>
            </tr>
          </thead>
          <tbody>
            {grados.map((g, index) => (
              <tr key={g.id} className="hover:bg-gray-50">
                <td className="border px-4 py-2">{index + 1}</td>
                <td className="border px-4 py-2">{g.nombre}</td>
                <td className="border px-4 py-2">{g.nivel}</td>
                <td className="border px-4 py-2">{g.seccion}</td>
                <td className="border px-4 py-2">{g.paralelo}</td>
                <td className="border px-4 py-2">{g.turno}</td>
                <td className="border px-4 py-2">{g.gestion}</td>
                <td className="border px-4 py-2">{g.ubicacion}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default GradoListPage;

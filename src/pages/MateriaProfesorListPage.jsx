import React, { useEffect, useState } from "react";
import { listarMateriasProfesor } from "../services/materiaProfesorService";

const MateriaProfesorListPage = () => {
  const [asignaciones, setAsignaciones] = useState([]);

  useEffect(() => {
    const cargarAsignaciones = async () => {
      try {
        const data = await listarMateriasProfesor();
        setAsignaciones(data);
      } catch (error) {
        console.error("Error al cargar asignaciones:", error);
      }
    };
    cargarAsignaciones();
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Asignaciones de Materias a Profesores</h2>
      {asignaciones.length === 0 ? (
        <p className="text-gray-500">No hay asignaciones registradas.</p>
      ) : (
        <table className="min-w-full text-sm border bg-white shadow">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-4 py-2">#</th>
              <th className="border px-4 py-2">Materia</th>
              <th className="border px-4 py-2">Profesor</th>
              <th className="border px-4 py-2">Fecha Asignación</th>
            </tr>
          </thead>
          <tbody>
  {asignaciones.map((item, index) => (
    <tr key={item.id} className="hover:bg-gray-50">
      <td className="border px-4 py-2">{index + 1}</td>
      <td className="border px-4 py-2">{item.materia_nombre || '-'}</td>
      <td className="border px-4 py-2">{item.profesor_nombre || '-'}</td>
      <td className="border px-4 py-2">{item.fecha_asignacion}</td>
    </tr>
  ))}
</tbody>

        </table>
      )}
    </div>
  );
};

export default MateriaProfesorListPage;

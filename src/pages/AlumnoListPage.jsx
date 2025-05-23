import React, { useEffect, useState } from 'react';
import { listarAlumnos } from '../services/alumnoService';

const AlumnoListPage = () => {
  const [alumnos, setAlumnos] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const cargarAlumnos = async () => {
      try {
        const data = await listarAlumnos();
        setAlumnos(data);
      } catch (error) {
        console.error("Error al cargar alumnos:", error);
      } finally {
        setCargando(false);
      }
    };

    cargarAlumnos();
  }, []);

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">Listado de Alumnos</h2>

      {cargando ? (
        <p className="text-gray-500">Cargando alumnos...</p>
      ) : alumnos.length === 0 ? (
        <p className="text-gray-500">No hay alumnos registrados.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 bg-white shadow text-xs sm:text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 border-b">#</th>
                <th className="px-4 py-2 border-b">Código</th>
                <th className="px-4 py-2 border-b">Nombre</th>
                <th className="px-4 py-2 border-b">Género</th>
                <th className="px-4 py-2 border-b">Grado</th>
                <th className="px-4 py-2 border-b hidden md:table-cell">Correo</th>
                <th className="px-4 py-2 border-b hidden md:table-cell">Teléfono</th>
                <th className="px-4 py-2 border-b">Estado</th>
              </tr>
            </thead>
            <tbody>
              {alumnos.map((alumno, index) => (
                <tr key={alumno.id} className="hover:bg-gray-50">
                  <td className="px-4 py-2 border-b">{index + 1}</td>
                  <td className="px-4 py-2 border-b">{alumno.codigo}</td>
                  <td className="px-4 py-2 border-b">{alumno.nombre_completo}</td>
                  <td className="px-4 py-2 border-b">{alumno.genero}</td>
                  <td className="px-4 py-2 border-b">{alumno.grado?.nombre || '-'}</td>
                  <td className="px-4 py-2 border-b hidden md:table-cell">{alumno.email}</td>
                  <td className="px-4 py-2 border-b hidden md:table-cell">{alumno.telefono}</td>
                  <td className="px-4 py-2 border-b">{alumno.estado}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AlumnoListPage;

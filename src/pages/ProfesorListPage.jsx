import React, { useEffect, useState } from 'react';
import { listarProfesores } from '../services/profesorService';

const ProfesorListPage = () => {
  const [profesores, setProfesores] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const cargarProfesores = async () => {
      try {
        const data = await listarProfesores();
        setProfesores(data);
      } catch (error) {
        console.error("Error al cargar profesores:", error);
      } finally {
        setCargando(false);
      }
    };

    cargarProfesores();
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Listado de Profesores</h2>

      {cargando ? (
        <p className="text-gray-500">Cargando profesores...</p>
      ) : profesores.length === 0 ? (
        <p className="text-gray-500">No hay profesores registrados.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 bg-white shadow">
            <thead className="bg-gray-100 text-sm text-left">
              <tr>
                <th className="px-4 py-2 border-b">#</th>
                <th className="px-4 py-2 border-b">Código</th>
                <th className="px-4 py-2 border-b">Nombre</th>
                <th className="px-4 py-2 border-b">CI</th>
                <th className="px-4 py-2 border-b">Correo</th>
                <th className="px-4 py-2 border-b">Teléfono</th>
                <th className="px-4 py-2 border-b">Dirección</th>
                <th className="px-4 py-2 border-b">Estado</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {profesores.map((p, index) => (
                <tr key={p.id} className="hover:bg-gray-50">
                  <td className="px-4 py-2 border-b">{index + 1}</td>
                  <td className="px-4 py-2 border-b">{p.codigo}</td>
                  <td className="px-4 py-2 border-b">{p.nombre_completo}</td>
                  <td className="px-4 py-2 border-b">{p.ci}</td>
                  <td className="px-4 py-2 border-b">{p.email}</td>
                  <td className="px-4 py-2 border-b">{p.telefono}</td>
                  <td className="px-4 py-2 border-b">{p.direccion}</td>
                  <td className="px-4 py-2 border-b">{p.estado}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ProfesorListPage;

import React, { useEffect, useState } from 'react';
import materiaService from '../services/materiaService';

const MateriaListPage = () => {
  const [materias, setMaterias] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const cargar = async () => {
      try {
        const data = await materiaService.listar();
        setMaterias(data);
      } catch (error) {
        console.error('Error al cargar materias:', error);
      } finally {
        setCargando(false);
      }
    };
    cargar();
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Listado de Materias</h2>

      {cargando ? (
        <p className="text-gray-500">Cargando materias...</p>
      ) : materias.length === 0 ? (
        <p className="text-gray-500">No hay materias registradas.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 bg-white shadow">
            <thead className="bg-gray-100 text-sm text-left">
              <tr>
                <th className="px-4 py-2 border-b">#</th>
                <th className="px-4 py-2 border-b">Código</th>
                <th className="px-4 py-2 border-b">Nombre</th>
                <th className="px-4 py-2 border-b">Descripción</th>
                <th className="px-4 py-2 border-b">Turno</th>
                <th className="px-4 py-2 border-b">Aula</th>
                <th className="px-4 py-2 border-b">Grado</th>
                <th className="px-4 py-2 border-b">Estado</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {materias.map((m, index) => (
                <tr key={m.id} className="hover:bg-gray-50">
                  <td className="px-4 py-2 border-b">{index + 1}</td>
                  <td className="px-4 py-2 border-b">{m.codigo}</td>
                  <td className="px-4 py-2 border-b">{m.nombre}</td>
                  <td className="px-4 py-2 border-b">{m.descripcion}</td>
                  <td className="px-4 py-2 border-b">{m.turno}</td>
                  <td className="px-4 py-2 border-b">{m.aula}</td>
                  <td className="px-4 py-2 border-b">{m.grado?.nombre || '-'}</td>
                  <td className="px-4 py-2 border-b">{m.estado}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MateriaListPage;

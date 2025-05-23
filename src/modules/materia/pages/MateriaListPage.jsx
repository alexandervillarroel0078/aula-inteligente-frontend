// src/modules/materia/pages/MateriaListPage.jsx

import React, { useState, useEffect } from 'react';
import materiaService from '../../../services/materiaService'; // ajusta si tu ruta es diferente

const MateriaListPage = () => {
  const [busqueda, setBusqueda] = useState('');
  const [mostrarFiltros, setMostrarFiltros] = useState(false);
  const [mostrarColumnas, setMostrarColumnas] = useState(false);
  const [mostrarExportar, setMostrarExportar] = useState(false);


  const [materias, setMaterias] = useState([]);
  useEffect(() => {
    const obtenerMaterias = async () => {
      try {
        const data = await materiaService.listar();
        setMaterias(data);
      } catch (error) {
        console.error('❌ Error al obtener materias:', error);
      }
    };

    obtenerMaterias();
  }, []);



  const materiasFiltradas = materias.filter(m =>
    m.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
    m.grado.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-4 flex-wrap gap-4">
        <h1 className="text-2xl font-bold">Gestión de Materias</h1>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
          + Nueva Materia
        </button>
      </div>
      <div className="border rounded shadow p-4 bg-white mb-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">📚 Lista de Materias</h2>



        <div className="overflow-x-auto bg-white p-4 rounded shadow border border-gray-300">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-200 text-gray-700">
              <tr>
                <th className="px-4 py-2 text-left">#</th>
                <th className="px-4 py-2 text-left">Código</th>

                <th className="px-4 py-2 text-left">Nombre</th>
                <th className="px-4 py-2 text-left">Grado</th>
                <th className="px-4 py-2 text-left">Turno</th> {/* ✅ NUEVO */}
                <th className="px-4 py-2 text-left">Aula</th>   {/* ✅ NUEVO */}
                <th className="px-4 py-2 text-left">Estado</th>
                <th className="px-4 py-2 text-left">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {materiasFiltradas.map((materia, index) => (
                <tr key={materia.id} className="border-t hover:bg-gray-100">
                  <td className="px-4 py-2">{index + 1}</td>
                  <td className="px-4 py-2">{materia.codigo}</td>

                  <td className="px-4 py-2">{materia.nombre}</td>
                  <td className="px-4 py-2">{materia.grado}</td>
                  <td className="px-4 py-2">{materia.turno || '—'}</td> {/* ✅ NUEVO */}
                  <td className="px-4 py-2">{materia.aula || '—'}</td>   {/* ✅ NUEVO */}
                  <td className="px-4 py-2">
                    <span
                      className={`px-2 py-1 rounded text-white text-xs ${materia.estado === 'Activo' ? 'bg-green-600' : 'bg-red-600'
                        }`}
                    >
                      {materia.estado}
                    </span>
                  </td>
                  <td className="px-4 py-2 flex gap-2">
                    <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-3 py-1 rounded text-xs">Ver</button>
                    <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded text-xs">Editar</button>
                    {materia.estado === 'Activo' ? (
                      <button className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-xs">Desactivar</button>
                    ) : (
                      <button className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-xs">Activar</button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* PAGINACIÓN */}
          <div className="mt-4 flex justify-between items-center text-sm text-gray-600">
            <span>Mostrando 1 - 10 de 50 materias</span>
            <div className="flex gap-1">
              <button className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300">Anterior</button>
              <button className="px-3 py-1 rounded bg-blue-600 text-white hover:bg-blue-700">1</button>
              <button className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300">2</button>
              <button className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300">3</button>
              <button className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300">Siguiente</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default MateriaListPage;

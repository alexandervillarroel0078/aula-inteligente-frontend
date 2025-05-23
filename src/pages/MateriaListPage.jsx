import React, { useEffect, useState } from 'react';
import materiaService from '../services/materiaService';

import { FaEye, FaEdit, FaTrash } from "react-icons/fa";

const MateriaListPage = () => {
  const [materias, setMaterias] = useState([]);
  const [cargando, setCargando] = useState(true);
  const handleVer = async (id) => {
    const materia = await materiaService.obtener(id);
    console.log("📋 Ver materia:", materia);
  };

  const handleEditar = async (id) => {
    const materia = await materiaService.obtener(id);
    console.log("✏️ Editar materia:", materia);
  };

  const handleEliminar = async (id) => {
    const confirmar = window.confirm("¿Deseas eliminar esta materia?");
    if (!confirmar) return;

    await materiaService.eliminar(id);
    setMaterias(prev => prev.filter(m => m.id !== id));
    console.log("🗑️ Materia eliminada:", id);
  };

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

      <div className="mb-4 text-right">
        <button
          onClick={() => console.log("Crear materia")}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 text-sm"
        >
          ➕ Nueva Materia
        </button>
      </div>


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
                <th className="px-4 py-2 border-b text-center">Acciones</th>
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
                  <td className="px-4 py-2 border-b text-center">
                    <div className="flex justify-center gap-2">
                      <button
                        onClick={() => handleVer(m.id)}
                        className="p-1 rounded-full bg-blue-100 hover:bg-blue-200 text-blue-600"
                        title="Ver"
                      >
                        <FaEye className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleEditar(m.id)}
                        className="p-1 rounded-full bg-yellow-100 hover:bg-yellow-200 text-yellow-600"
                        title="Editar"
                      >
                        <FaEdit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleEliminar(m.id)}
                        className="p-1 rounded-full bg-red-100 hover:bg-red-200 text-red-600"
                        title="Eliminar"
                      >
                        <FaTrash className="w-4 h-4" />
                      </button>
                    </div>
                  </td>

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

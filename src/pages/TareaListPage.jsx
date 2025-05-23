import React, { useEffect, useState } from 'react';
import {
  listarTareas,
  verTarea,
  eliminarTarea
} from '../services/tareaService';

import { FaEye, FaEdit, FaTrash } from "react-icons/fa";

const TareaListPage = () => {
  const [tareas, setTareas] = useState([]);
  const [cargando, setCargando] = useState(true);
  const handleVer = async (id) => {
    const tarea = await verTarea(id);
    console.log("📋 Ver tarea:", tarea);
  };

  const handleEditar = async (id) => {
    const tarea = await verTarea(id);
    console.log("✏️ Editar tarea:", tarea);
  };

  const handleEliminar = async (id) => {
    const confirmar = window.confirm("¿Deseas eliminar esta tarea?");
    if (!confirmar) return;

    await eliminarTarea(id);
    setTareas(prev => prev.filter(t => t.id !== id));
    console.log("🗑️ Tarea eliminada:", id);
  };

  useEffect(() => {
    const cargar = async () => {
      try {
        const data = await listarTareas();
        setTareas(data);
      } catch (error) {
        console.error('Error al cargar tareas:', error);
      } finally {
        setCargando(false);
      }
    };
    cargar();
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Listado de Tareas</h2>
      <div className="mb-4 text-right">
        <button
          onClick={() => console.log("Crear tarea")}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 text-sm"
        >
          ➕ Nueva Tarea
        </button>
      </div>

      {cargando ? (
        <p className="text-gray-500">Cargando tareas...</p>
      ) : tareas.length === 0 ? (
        <p className="text-gray-500">No hay tareas registradas.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 bg-white shadow">
            <thead className="bg-gray-100 text-sm text-left">
              <tr>
                <th className="px-4 py-2 border-b">#</th>
                <th className="px-4 py-2 border-b">Título</th>
                <th className="px-4 py-2 border-b">Descripción</th>
                <th className="px-4 py-2 border-b">Fecha de Entrega</th>
                <th className="px-4 py-2 border-b">Materia</th>
                <th className="px-4 py-2 border-b">Profesor</th>
                <th className="px-4 py-2 border-b text-center">Acciones</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {tareas.map((t, index) => (
                <tr key={t.id} className="hover:bg-gray-50">
                  <td className="px-4 py-2 border-b">{index + 1}</td>
                  <td className="px-4 py-2 border-b">{t.titulo}</td>
                  <td className="px-4 py-2 border-b">{t.descripcion}</td>
                  <td className="px-4 py-2 border-b">{t.fecha_entrega}</td>
                  <td className="px-4 py-2 border-b">{t.materia_nombre || '-'}</td>
                  <td className="px-4 py-2 border-b">{t.profesor_nombre || '-'}</td>
                  <td className="px-4 py-2 border-b text-center">
                    <div className="flex justify-center gap-2">
                      <button
                        onClick={() => handleVer(t.id)}
                        className="p-1 rounded-full bg-blue-100 hover:bg-blue-200 text-blue-600"
                        title="Ver"
                      >
                        <FaEye className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleEditar(t.id)}
                        className="p-1 rounded-full bg-yellow-100 hover:bg-yellow-200 text-yellow-600"
                        title="Editar"
                      >
                        <FaEdit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleEliminar(t.id)}
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

export default TareaListPage;

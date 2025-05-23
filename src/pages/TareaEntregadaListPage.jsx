import React, { useEffect, useState } from 'react';
import {
  listarTareasEntregadas,
  obtenerTareaEntregada,
  eliminarTareaEntregada
} from '../services/tareaEntregadaService';

import { FaEye, FaEdit, FaTrash } from "react-icons/fa";

const TareaEntregadaListPage = () => {
  const [entregas, setEntregas] = useState([]);
  const [tareasEntregadas, setTareasEntregadas] = useState([]);

  const [cargando, setCargando] = useState(true);
  const handleVer = async (id) => {
    const tarea = await obtenerTareaEntregada(id);
    console.log("📋 Ver tarea entregada:", tarea);
  };

  const handleEditar = async (id) => {
    const tarea = await obtenerTareaEntregada(id);
    console.log("✏️ Editar tarea entregada:", tarea);
  };

  const handleEliminar = async (id) => {
    const confirmar = window.confirm("¿Deseas eliminar esta tarea entregada?");
    if (!confirmar) return;

    await eliminarTareaEntregada(id);
    setTareasEntregadas(prev => prev.filter(t => t.id !== id));
    console.log("🗑️ Tarea entregada eliminada:", id);
  };

  useEffect(() => {
    const cargar = async () => {
      try {
        const data = await listarTareasEntregadas();
        setEntregas(data);
      } catch (error) {
        console.error('Error al cargar tareas entregadas:', error);
      } finally {
        setCargando(false);
      }
    };
    cargar();
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Tareas Entregadas</h2>
      <div className="mb-4 text-right">
        <button
          onClick={() => console.log("Crear tarea entregada")}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 text-sm"
        >
          ➕ Nueva Tarea Entregada
        </button>
      </div>

      {cargando ? (
        <p className="text-gray-500">Cargando entregas...</p>
      ) : entregas.length === 0 ? (
        <p className="text-gray-500">No hay entregas registradas.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 bg-white shadow">
            <thead className="bg-gray-100 text-sm text-left">
              <tr>
                <th className="px-4 py-2 border-b">#</th>
                <th className="px-4 py-2 border-b">Tarea</th>
                <th className="px-4 py-2 border-b">Alumno</th>
                <th className="px-4 py-2 border-b">Archivo</th>
                <th className="px-4 py-2 border-b">Fecha de Entrega</th>
                <th className="px-4 py-2 border-b">Calificación</th>
                <th className="px-4 py-2 border-b text-center">Acciones</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {entregas.map((e, index) => (
                <tr key={e.id} className="hover:bg-gray-50">
                  <td className="px-4 py-2 border-b">{index + 1}</td>
                  <td className="px-4 py-2 border-b">{e.tarea_titulo || '-'}</td>
                  <td className="px-4 py-2 border-b">{e.alumno_nombre || '-'}</td>
                  <td className="px-4 py-2 border-b">
                    <a href={e.archivo_url} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                      Ver archivo
                    </a>
                  </td>
                  <td className="px-4 py-2 border-b">{e.fecha_entrega}</td>
                  <td className="px-4 py-2 border-b">{e.calificacion ?? '-'}</td>
                  <td className="px-4 py-2 border-b text-center">
                    <div className="flex justify-center gap-2">
                      <button
                        onClick={() => handleVer(e.id)}
                        className="p-1 rounded-full bg-blue-100 hover:bg-blue-200 text-blue-600"
                        title="Ver"
                      >
                        <FaEye className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleEditar(e.id)}
                        className="p-1 rounded-full bg-yellow-100 hover:bg-yellow-200 text-yellow-600"
                        title="Editar"
                      >
                        <FaEdit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleEliminar(e.id)}
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

export default TareaEntregadaListPage;

import React, { useEffect, useState } from 'react';
import {
  listarObservaciones,
  verObservacion,
  eliminarObservacion
} from '../services/observacionService';

import { FaEye, FaEdit, FaTrash } from "react-icons/fa";

const ObservacionListPage = () => {
  const [observaciones, setObservaciones] = useState([]);
  const [cargando, setCargando] = useState(true);
const handleVer = async (id) => {
  const obs = await verObservacion(id);
  console.log("📋 Ver observación:", obs);
};

const handleEditar = async (id) => {
  const obs = await verObservacion(id);
  console.log("✏️ Editar observación:", obs);
};

const handleEliminar = async (id) => {
  const confirmar = window.confirm("¿Deseas eliminar esta observación?");
  if (!confirmar) return;

  await eliminarObservacion(id);
  setObservaciones(prev => prev.filter(o => o.id !== id));
  console.log("🗑️ Observación eliminada:", id);
};

  useEffect(() => {
    const cargar = async () => {
      try {
        const data = await listarObservaciones();
        setObservaciones(data);
      } catch (error) {
        console.error('Error al cargar observaciones:', error);
      } finally {
        setCargando(false);
      }
    };

    cargar();
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Observaciones Registradas</h2>
<div className="mb-4 text-right">
  <button
    onClick={() => console.log("Crear observación")}
    className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 text-sm"
  >
    ➕ Nueva Observación
  </button>
</div>

      {cargando ? (
        <p className="text-gray-500">Cargando...</p>
      ) : observaciones.length === 0 ? (
        <p className="text-gray-500">No hay observaciones aún.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 bg-white shadow text-sm">
            <thead className="bg-gray-100 text-left">
              <tr>
                <th className="px-4 py-2 border-b">#</th>
                <th className="px-4 py-2 border-b">Alumno</th>
                <th className="px-4 py-2 border-b">Profesor</th>
                <th className="px-4 py-2 border-b">Periodo</th>
                <th className="px-4 py-2 border-b">Fecha</th>
                <th className="px-4 py-2 border-b">Descripción</th>
                <th className="px-4 py-2 border-b text-center">Acciones</th>

              </tr>
            </thead>
            <tbody>
              {observaciones.map((o, index) => (
                <tr key={o.id} className="hover:bg-gray-50">
                  <td className="px-4 py-2 border-b">{index + 1}</td>
                  <td className="px-4 py-2 border-b">{o.alumno_nombre || '-'}</td>
                  <td className="px-4 py-2 border-b">{o.profesor_nombre || '-'}</td>
                  <td className="px-4 py-2 border-b">{o.periodo_nombre || '-'}</td>
                  <td className="px-4 py-2 border-b">{o.fecha}</td>
                  <td className="px-4 py-2 border-b">{o.descripcion}</td>
             <td className="px-4 py-2 border-b text-center">
  <div className="flex justify-center gap-2">
    <button
      onClick={() => handleVer(o.id)}
      className="p-1 rounded-full bg-blue-100 hover:bg-blue-200 text-blue-600"
      title="Ver"
    >
      <FaEye className="w-4 h-4" />
    </button>
    <button
      onClick={() => handleEditar(o.id)}
      className="p-1 rounded-full bg-yellow-100 hover:bg-yellow-200 text-yellow-600"
      title="Editar"
    >
      <FaEdit className="w-4 h-4" />
    </button>
    <button
      onClick={() => handleEliminar(o.id)}
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

export default ObservacionListPage;

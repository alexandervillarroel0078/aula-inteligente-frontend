import React, { useEffect, useState } from 'react';
import {
  listarParticipaciones,
  verParticipacion,
  eliminarParticipacion
} from '../services/participacionService';

import { FaEye, FaEdit, FaTrash } from "react-icons/fa";

const ParticipacionListPage = () => {
  const [participaciones, setParticipaciones] = useState([]);
  const [cargando, setCargando] = useState(true);
const handleVer = async (id) => {
  const participacion = await verParticipacion(id);
  console.log("📋 Ver participación:", participacion);
};

const handleEditar = async (id) => {
  const participacion = await verParticipacion(id);
  console.log("✏️ Editar participación:", participacion);
};

const handleEliminar = async (id) => {
  const confirmar = window.confirm("¿Deseas eliminar esta participación?");
  if (!confirmar) return;

  await eliminarParticipacion(id);
  setParticipaciones(prev => prev.filter(p => p.id !== id));
  console.log("🗑️ Participación eliminada:", id);
};

  useEffect(() => {
    const cargar = async () => {
      try {
        const data = await listarParticipaciones();
        setParticipaciones(data);
      } catch (error) {
        console.error('Error al cargar participaciones:', error);
      } finally {
        setCargando(false);
      }
    };

    cargar();
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Listado de Participaciones</h2>
<div className="mb-4 text-right">
  <button
    onClick={() => console.log("Crear participación")}
    className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 text-sm"
  >
    ➕ Nueva Participación
  </button>
</div>

      {cargando ? (
        <p className="text-gray-500">Cargando participaciones...</p>
      ) : participaciones.length === 0 ? (
        <p className="text-gray-500">No hay participaciones registradas.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 bg-white shadow">
            <thead className="bg-gray-100 text-sm text-left">
              <tr>
                <th className="px-4 py-2 border-b">#</th>
                <th className="px-4 py-2 border-b">Alumno</th>
                <th className="px-4 py-2 border-b">Materia</th>
                <th className="px-4 py-2 border-b">Periodo</th>
                <th className="px-4 py-2 border-b">Fecha</th>
                <th className="px-4 py-2 border-b">Puntaje</th>
                <th className="px-4 py-2 border-b text-center">Acciones</th>

              </tr>
            </thead>
            <tbody className="text-sm">
              {participaciones.map((p, index) => (
                <tr key={p.id} className="hover:bg-gray-50">
                  <td className="px-4 py-2 border-b">{index + 1}</td>
                  <td className="px-4 py-2 border-b">{p.alumno_nombre || '-'}</td>
                  <td className="px-4 py-2 border-b">{p.materia_nombre || '-'}</td>
                  <td className="px-4 py-2 border-b">{p.periodo_nombre || '-'}</td>
                  <td className="px-4 py-2 border-b">{p.fecha}</td>
                  <td className="px-4 py-2 border-b">{p.puntaje}</td>
                <td className="px-4 py-2 border-b text-center">
  <div className="flex justify-center gap-2">
    <button
      onClick={() => handleVer(p.id)}
      className="p-1 rounded-full bg-blue-100 hover:bg-blue-200 text-blue-600"
      title="Ver"
    >
      <FaEye className="w-4 h-4" />
    </button>
    <button
      onClick={() => handleEditar(p.id)}
      className="p-1 rounded-full bg-yellow-100 hover:bg-yellow-200 text-yellow-600"
      title="Editar"
    >
      <FaEdit className="w-4 h-4" />
    </button>
    <button
      onClick={() => handleEliminar(p.id)}
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

export default ParticipacionListPage;

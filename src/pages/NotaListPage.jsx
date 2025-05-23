import React, { useEffect, useState } from 'react';
import {
  listarNotas,
  verNota,
  eliminarNota
} from '../services/notaService';

import { FaEye, FaEdit, FaTrash } from "react-icons/fa";

const NotaListPage = () => {
  const [notas, setNotas] = useState([]);
  const [cargando, setCargando] = useState(true);
const handleVer = async (id) => {
  const nota = await verNota(id);
  console.log("📋 Ver nota:", nota);
};

const handleEditar = async (id) => {
  const nota = await verNota(id);
  console.log("✏️ Editar nota:", nota);
};

const handleEliminar = async (id) => {
  const confirmar = window.confirm("¿Deseas eliminar esta nota?");
  if (!confirmar) return;

  await eliminarNota(id);
  setNotas(prev => prev.filter(n => n.id !== id));
  console.log("🗑️ Nota eliminada:", id);
};

  useEffect(() => {
    const cargarNotas = async () => {
      try {
        const data = await listarNotas();
        setNotas(data);
      } catch (error) {
        console.error('Error al cargar notas:', error);
      } finally {
        setCargando(false);
      }
    };

    cargarNotas();
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Listado de Notas</h2>
<div className="mb-4 text-right">
  <button
    onClick={() => console.log("Crear nota")}
    className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 text-sm"
  >
    ➕ Nueva Nota
  </button>
</div>

      {cargando ? (
        <p className="text-gray-500">Cargando notas...</p>
      ) : notas.length === 0 ? (
        <p className="text-gray-500">No hay notas registradas.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 bg-white shadow">
            <thead className="bg-gray-100 text-sm text-left">
              <tr>
                <th className="px-4 py-2 border-b">#</th>
                <th className="px-4 py-2 border-b">Alumno</th>
                <th className="px-4 py-2 border-b">Materia</th>
                <th className="px-4 py-2 border-b">Periodo</th>
                <th className="px-4 py-2 border-b">Nota Final</th>
                <th className="px-4 py-2 border-b">Observaciones</th>
                <th className="px-4 py-2 border-b text-center">Acciones</th>

              </tr>
            </thead>
            <tbody className="text-sm">
              {notas.map((n, index) => (
                <tr key={n.id} className="hover:bg-gray-50">
                  <td className="px-4 py-2 border-b">{index + 1}</td>
                  <td className="px-4 py-2 border-b">{n.alumno?.nombre_completo || '-'}</td>
                  <td className="px-4 py-2 border-b">{n.materia?.nombre || '-'}</td>
                  <td className="px-4 py-2 border-b">{n.periodo?.nombre || '-'}</td>
                  <td className="px-4 py-2 border-b">{n.nota_final}</td>
                  <td className="px-4 py-2 border-b">{n.observaciones}</td>
              <td className="px-4 py-2 border-b text-center">
  <div className="flex justify-center gap-2">
    <button
      onClick={() => handleVer(n.id)}
      className="p-1 rounded-full bg-blue-100 hover:bg-blue-200 text-blue-600"
      title="Ver"
    >
      <FaEye className="w-4 h-4" />
    </button>
    <button
      onClick={() => handleEditar(n.id)}
      className="p-1 rounded-full bg-yellow-100 hover:bg-yellow-200 text-yellow-600"
      title="Editar"
    >
      <FaEdit className="w-4 h-4" />
    </button>
    <button
      onClick={() => handleEliminar(n.id)}
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

export default NotaListPage;

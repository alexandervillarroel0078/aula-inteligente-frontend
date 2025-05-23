import React, { useEffect, useState } from 'react';
 
import {
  listarAsistencias ,
  verAsistencia,
  eliminarAsistencia
} from '../services/asistenciaService';
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";

const AsistenciaListPage = () => {
  const [asistencias, setAsistencias] = useState([]);
  const [cargando, setCargando] = useState(true);
  const handleVer = async (id) => {
    const asistencia = await verAsistencia(id);
    console.log("📋 Ver asistencia:", asistencia);
  };
  const handleEditar = async (id) => {
    const asistencia = await verAsistencia(id);
    console.log("✏️ Editar asistencia:", asistencia);
    // Puedes redirigir a un formulario o abrir modal aquí
  };
  const handleEliminar = async (id) => {
    const confirmar = window.confirm("¿Estás seguro de eliminar esta asistencia?");
    if (!confirmar) return;

    await eliminarAsistencia(id);
    // Actualizar lista luego de eliminar
    setAsistencias(prev => prev.filter(a => a.id !== id));

    console.log("🗑️ Asistencia eliminada:", id);
  };

  useEffect(() => {
    const cargarAsistencias = async () => {
      try {
        const data = await listarAsistencias();
        setAsistencias(data);
      } catch (error) {
        console.error('Error al cargar asistencias:', error);
      } finally {
        setCargando(false);
      }
    };

    cargarAsistencias();
  }, []);

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">Listado de Asistencias</h2>

      <div className="mb-4 text-right">
        <button
          onClick={() => console.log("Crear asistencia")}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 text-sm"
        >
          ➕ Nueva Asistencia
        </button>
      </div>

      {cargando ? (
        <p className="text-gray-500">Cargando asistencias...</p>
      ) : asistencias.length === 0 ? (
        <p className="text-gray-500">No hay registros.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 bg-white shadow text-xs sm:text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 border-b">#</th>
                <th className="px-4 py-2 border-b">Alumno</th>
                <th className="px-4 py-2 border-b hidden md:table-cell">Materia</th>
                <th className="px-4 py-2 border-b hidden md:table-cell">Periodo</th>
                <th className="px-4 py-2 border-b">Fecha</th>
                <th className="px-4 py-2 border-b">Asistencia</th>
                <th className="px-4 py-2 border-b text-center">Acciones</th>

              </tr>
            </thead>
            <tbody>
              {asistencias.map((a, index) => (
                <tr key={a.id} className="hover:bg-gray-50">
                  <td className="px-4 py-2 border-b">{index + 1}</td>
                  <td className="px-4 py-2 border-b">{a.alumno_nombre || '-'}</td>
                  <td className="px-4 py-2 border-b hidden md:table-cell">{a.materia_nombre || '-'}</td>
                  <td className="px-4 py-2 border-b hidden md:table-cell">{a.periodo_nombre || '-'}</td>
                  <td className="px-4 py-2 border-b">{a.fecha}</td>
                  <td className="px-4 py-2 border-b">
                    <span className={`font-bold ${a.presente ? 'text-green-600' : 'text-red-500'}`}>
                      {a.presente ? '✔ Presente' : '✘ Ausente'}
                    </span>
                  </td>
                  <td className="px-4 py-2 border-b text-center">
                    <div className="flex justify-center gap-2">
                      <button
                        onClick={() => handleVer(a.id)}
                        className="p-1 rounded-full bg-blue-100 hover:bg-blue-200 text-blue-600"
                        title="Ver"
                      >
                        <FaEye className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleEditar(a.id)}
                        className="p-1 rounded-full bg-yellow-100 hover:bg-yellow-200 text-yellow-600"
                        title="Editar"
                      >
                        <FaEdit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleEliminar(a.id)}
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

export default AsistenciaListPage;

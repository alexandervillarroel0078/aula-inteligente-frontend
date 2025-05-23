import React, { useEffect, useState } from 'react';
import {
  listarPredicciones,
  verPrediccion,
  eliminarPrediccion
} from '../services/prediccionService';

import { FaEye, FaEdit, FaTrash } from "react-icons/fa";

const PrediccionListPage = () => {
  const [predicciones, setPredicciones] = useState([]);
  const [cargando, setCargando] = useState(true);
  const handleVer = async (id) => {
    const prediccion = await verPrediccion(id);
    console.log("📋 Ver predicción:", prediccion);
  };

  const handleEditar = async (id) => {
    const prediccion = await verPrediccion(id);
    console.log("✏️ Editar predicción:", prediccion);
  };

  const handleEliminar = async (id) => {
    const confirmar = window.confirm("¿Deseas eliminar esta predicción?");
    if (!confirmar) return;

    await eliminarPrediccion(id);
    setPredicciones(prev => prev.filter(p => p.id !== id));
    console.log("🗑️ Predicción eliminada:", id);
  };

  useEffect(() => {
    const cargar = async () => {
      try {
        const data = await listarPredicciones();
        setPredicciones(data);
      } catch (error) {
        console.error('Error al cargar predicciones:', error);
      } finally {
        setCargando(false);
      }
    };

    cargar();
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Predicción de Rendimiento Académico</h2>

      {cargando ? (
        <p className="text-gray-500">Cargando predicciones...</p>
      ) : predicciones.length === 0 ? (
        <p className="text-gray-500">No hay predicciones registradas.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 bg-white shadow">
            <thead className="bg-gray-100 text-sm text-left">
              <tr>
                <th className="px-4 py-2 border-b">#</th>
                <th className="px-4 py-2 border-b">Alumno</th>
                <th className="px-4 py-2 border-b">Periodo</th>
                <th className="px-4 py-2 border-b">Prom. Notas</th>
                <th className="px-4 py-2 border-b">% Asistencia</th>
                <th className="px-4 py-2 border-b">Prom. Participación</th>
                <th className="px-4 py-2 border-b">Resultado</th>
                <th className="px-4 py-2 border-b text-center">Acciones</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {predicciones.map((p, index) => (
                <tr key={p.id} className="hover:bg-gray-50">
                  <td className="px-4 py-2 border-b">{index + 1}</td>
                  <td className="px-4 py-2 border-b">{p.alumno_nombre || '-'}</td>
                  <td className="px-4 py-2 border-b">{p.periodo_nombre || '-'}</td>
                  <td className="px-4 py-2 border-b">{p.promedio_notas}</td>
                  <td className="px-4 py-2 border-b">{p.porcentaje_asistencia} %</td>
                  <td className="px-4 py-2 border-b">{p.promedio_participaciones}</td>
                  <td className="px-4 py-2 border-b">{p.resultado_predicho}</td>
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

export default PrediccionListPage;

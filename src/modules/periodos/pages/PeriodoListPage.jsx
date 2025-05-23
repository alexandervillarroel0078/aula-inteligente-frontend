// src/modules/periodos/pages/PeriodoListPage.jsx
import React, { useState, useEffect } from 'react';
import periodoService from '../../../services/periodoService'; // ajusta la ruta si es diferente

const PeriodoListPage = () => {
  const [periodos, setPeriodos] = useState([]);

  useEffect(() => {
    const obtenerPeriodos = async () => {
      try {
        const data = await periodoService.listar();
        setPeriodos(data);
      } catch (error) {
        console.error('❌ Error al obtener periodos:', error);
      }
    };

    obtenerPeriodos();
  }, []);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Períodos Académicos</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          + Nuevo Período
        </button>
      </div>

      <div className="overflow-x-auto bg-white p-4 rounded shadow border border-gray-300">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-200 text-gray-700">
            <tr>
              <th className="px-4 py-2 text-left">#</th>
              <th className="px-4 py-2 text-left">Nombre</th>
              <th className="px-4 py-2 text-left">Gestión</th>
              <th className="px-4 py-2 text-left">Inicio</th>
              <th className="px-4 py-2 text-left">Fin</th>
              <th className="px-4 py-2 text-left">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {periodos.map((p, i) => (
              <tr key={p.id} className="border-t hover:bg-gray-100">
                <td className="px-4 py-2">{i + 1}</td>
                <td className="px-4 py-2">{p.nombre}</td>
                <td className="px-4 py-2">{p.gestion}</td>
                <td className="px-4 py-2">{p.fechaInicio}</td>
                <td className="px-4 py-2">{p.fechaFin}</td>
                <td className="px-4 py-2 space-x-2">
                  <button className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600">Editar</button>
                  <button className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700">Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PeriodoListPage;

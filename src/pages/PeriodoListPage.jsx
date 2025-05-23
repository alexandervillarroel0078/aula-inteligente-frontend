import React, { useEffect, useState } from "react";
import { listarPeriodos } from "../services/periodoService";

const PeriodoListPage = () => {
  const [periodos, setPeriodos] = useState([]);

  useEffect(() => {
    const cargarPeriodos = async () => {
      const data = await listarPeriodos();
      setPeriodos(data);
    };
    cargarPeriodos();
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Listado de Periodos</h2>
      {periodos.length === 0 ? (
        <p className="text-gray-500">No hay periodos registrados.</p>
      ) : (
        <table className="min-w-full border text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-4 py-2">#</th>
              <th className="border px-4 py-2">Nombre</th>
              <th className="border px-4 py-2">Inicio</th>
              <th className="border px-4 py-2">Fin</th>
              <th className="border px-4 py-2">Estado</th>
            </tr>
          </thead>
          <tbody>
            {periodos.map((p, index) => (
              <tr key={p.id} className="hover:bg-gray-50">
                <td className="border px-4 py-2">{index + 1}</td>
                <td className="border px-4 py-2">{p.nombre}</td>
                <td className="border px-4 py-2">{p.fecha_inicio}</td>
                <td className="border px-4 py-2">{p.fecha_fin}</td>
                <td className="border px-4 py-2">{p.estado}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default PeriodoListPage;

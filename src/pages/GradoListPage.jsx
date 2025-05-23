import React, { useEffect, useState } from "react";

import {
  listarGrados,
  verGrado,
  eliminarGrado
} from '../services/gradoService';
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import gd from "date-fns/locale/gd";

const GradoListPage = () => {
  const [grados, setGrados] = useState([]);
  const handleVer = async (id) => {
    const grado = await verGrado(id);
    console.log("📋 Ver grado:", grado);
  };

  const handleEditar = async (id) => {
    const grado = await verGrado(id);
    console.log("✏️ Editar grado:", grado);
    // Aquí podrías redirigir o abrir un modal
  };

  const handleEliminar = async (id) => {
    const confirmar = window.confirm("¿Deseas eliminar este grado?");
    if (!confirmar) return;

    await eliminarGrado(id);
    setGrados(prev => prev.filter(g => g.id !== id));
    console.log("🗑️ Grado eliminado:", id);
  };

  useEffect(() => {
    const cargarGrados = async () => {
      try {
        const data = await listarGrados();
        setGrados(data);
      } catch (error) {
        console.error("Error al cargar grados:", error);
      }
    };
    cargarGrados();
  }, []);

  return (
    <div>
      <div className="mb-4 text-right">
        <button
          onClick={() => console.log("Crear grado")}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 text-sm"
        >
          ➕ Nuevo Grado
        </button>
      </div>

      <h2 className="text-2xl font-bold text-gray-800 mb-4">Listado de Grados</h2>
      {grados.length === 0 ? (
        <p className="text-gray-500">No hay grados registrados.</p>
      ) : (
        <table className="min-w-full text-sm border bg-white shadow">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-4 py-2">#</th>
              <th className="border px-4 py-2">Nombre</th>
              <th className="border px-4 py-2">Nivel</th>
              <th className="border px-4 py-2">Sección</th>
              <th className="border px-4 py-2">Paralelo</th>
              <th className="border px-4 py-2">Turno</th>
              <th className="border px-4 py-2">Gestión</th>
              <th className="border px-4 py-2">Ubicación</th>
              <th className="px-4 py-2 border-b text-center">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {grados.map((g, index) => (
              <tr key={g.id} className="hover:bg-gray-50">
                <td className="border px-4 py-2">{index + 1}</td>
                <td className="border px-4 py-2">{g.nombre}</td>
                <td className="border px-4 py-2">{g.nivel}</td>
                <td className="border px-4 py-2">{g.seccion}</td>
                <td className="border px-4 py-2">{g.paralelo}</td>
                <td className="border px-4 py-2">{g.turno}</td>
                <td className="border px-4 py-2">{g.gestion}</td>
                <td className="border px-4 py-2">{g.ubicacion}</td>
                <td className="px-4 py-2 border-b text-center">
                  <div className="flex justify-center gap-2">
                    <button
                      onClick={() => handleVer(g.id)}
                      className="p-1 rounded-full bg-blue-100 hover:bg-blue-200 text-blue-600"
                      title="Ver"
                    >
                      <FaEye className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleEditar(g.id)}
                      className="p-1 rounded-full bg-yellow-100 hover:bg-yellow-200 text-yellow-600"
                      title="Editar"
                    >
                      <FaEdit className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleEliminar(g.id)}
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
      )}
    </div>
  );
};

export default GradoListPage;

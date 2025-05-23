import React, { useEffect, useState } from "react";
import { listarRoles } from "../services/rolService";

const RolListPage = () => {
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    const cargarRoles = async () => {
      try {
        const data = await listarRoles();
        setRoles(data);
      } catch (error) {
        console.error("Error al cargar roles:", error);
      }
    };
    cargarRoles();
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Listado de Roles</h2>
      {roles.length === 0 ? (
        <p className="text-gray-500">No hay roles registrados.</p>
      ) : (
        <table className="min-w-full text-sm border bg-white shadow">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-4 py-2">#</th>
              <th className="border px-4 py-2">Nombre</th>
              <th className="border px-4 py-2">Descripción</th>
            </tr>
          </thead>
          <tbody>
            {roles.map((rol, index) => (
              <tr key={rol.id} className="hover:bg-gray-50">
                <td className="border px-4 py-2">{index + 1}</td>
                <td className="border px-4 py-2">{rol.nombre}</td>
                <td className="border px-4 py-2">{rol.descripcion}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default RolListPage;

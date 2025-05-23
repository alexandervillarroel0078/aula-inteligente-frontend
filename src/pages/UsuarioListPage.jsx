import React, { useEffect, useState } from "react";
import { listarUsuarios } from "../services/usuarioService";

const UsuarioListPage = () => {
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        const fetchUsuarios = async () => {
            try {
                const data = await listarUsuarios();
                setUsuarios(data);
            } catch (error) {
                console.error("Error al cargar usuarios:", error);
            }
        };
        fetchUsuarios();
    }, []);

    return (
        <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Listado de Usuarios</h2>
            {usuarios.length === 0 ? (
                <p className="text-gray-500">No hay usuarios registrados.</p>
            ) : (
                <table className="min-w-full text-sm border bg-white shadow">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="border px-4 py-2">#</th>
                            <th className="border px-4 py-2">Usuario</th>
                            <th className="border px-4 py-2">Correo</th>
                            <th className="border px-4 py-2">Rol</th>
                            <th className="border px-4 py-2">Profesor</th>
                            <th className="border px-4 py-2">Alumno</th>
                        </tr>
                    </thead>
                   <tbody>
  {usuarios.map((u, index) => (
    <tr key={u.id} className="hover:bg-gray-50">
      <td className="border px-4 py-2">{index + 1}</td>
      <td className="border px-4 py-2">{u.nombre_usuario}</td>
      <td className="border px-4 py-2">{u.correo}</td>
      <td className="border px-4 py-2">{u.rol_nombre || "-"}</td>
      <td className="border px-4 py-2">{u.profesor_nombre || "-"}</td>
      <td className="border px-4 py-2">{u.alumno_nombre || "-"}</td>
    </tr>
  ))}
</tbody>

                </table>
            )}
        </div>
    );
};

export default UsuarioListPage;

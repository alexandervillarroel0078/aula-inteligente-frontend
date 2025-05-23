import React from 'react';

const TablaAlumnos = ({ alumnos = [], onVer, onEditar, onEliminar }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-100 text-gray-700 text-sm">
          <tr>
            <th className="px-6 py-3 text-left">#</th>
            <th className="px-6 py-3 text-left">Nombre</th>
            <th className="px-6 py-3 text-left">Email</th>
            <th className="px-6 py-3 text-left">Curso</th>
            <th className="px-6 py-3 text-left">Estado</th>
            <th className="px-6 py-3 text-left">Acciones</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 text-sm">
          {alumnos.map((alumno, index) => (
            <tr key={alumno.id} className="hover:bg-gray-50">
              <td className="px-6 py-3">{index + 1}</td>
              <td className="px-6 py-3">{alumno.nombre_completo}</td>
              <td className="px-6 py-3">{alumno.email}</td>
              <td className="px-6 py-3">{alumno.grado_nombre || '---'}</td>
              <td className="px-6 py-3">
                <span className={`px-2 py-1 rounded-full text-xs text-white ${
                  alumno.estado === 'activo'
                    ? 'bg-green-500'
                    : alumno.estado === 'egresado'
                    ? 'bg-blue-500'
                    : 'bg-red-500'
                }`}>
                  {alumno.estado}
                </span>
              </td>
              <td className="px-6 py-3 space-x-2">
                <button
                  onClick={() => onVer && onVer(alumno)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-xs"
                >
                  Ver
                </button>
                <button
                  onClick={() => onEditar && onEditar(alumno)}
                  className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded text-xs"
                >
                  Editar
                </button>
                <button
                  onClick={() => onEliminar && onEliminar(alumno)}
                  className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-xs"
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}

          {alumnos.length === 0 && (
            <tr>
              <td colSpan="6" className="text-center px-6 py-4 text-gray-500">
                No hay alumnos registrados.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TablaAlumnos;

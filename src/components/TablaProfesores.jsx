import React from 'react';

const TablaProfesores = ({ profesores, onVer }) => (
  <div className="overflow-x-auto bg-white p-4 rounded shadow border border-gray-300">
    <table className="min-w-full text-sm">
      <thead className="bg-gray-200 text-gray-700">
        <tr>
          <th className="px-4 py-2 text-left">#</th>
          <th className="px-4 py-2 text-left">Código</th>
          <th className="px-4 py-2 text-left">Nombre</th>
          <th className="px-4 py-2 text-left">CI</th>
          <th className="px-4 py-2 text-left">Teléfono</th>
          <th className="px-4 py-2 text-left">Especialidad</th>
          <th className="px-4 py-2 text-left">Acciones</th>
        </tr>
      </thead>
      <tbody>
        {profesores.map((p, i) => (
          <tr key={p.id} className="border-t hover:bg-gray-100">
            <td className="px-4 py-2">{i + 1}</td>
            <td className="px-4 py-2">{p.codigo_profesor}</td>
            <td className="px-4 py-2">{p.nombre}</td>
            <td className="px-4 py-2">{p.ci}</td>
            <td className="px-4 py-2">{p.telefono}</td>
            <td className="px-4 py-2">{p.especialidad}</td>
            <td className="px-4 py-2 space-x-2">
              <button onClick={() => onVer(p)} className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">Ver</button>
              <button className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600">Editar</button>
              <button className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700">Eliminar</button>
            </td>
          </tr>
        ))}
        {profesores.length === 0 && (
          <tr>
            <td colSpan="7" className="text-center px-4 py-4 text-gray-500">No hay profesores registrados.</td>
          </tr>
        )}
      </tbody>
    </table>
  </div>
);

export default TablaProfesores;

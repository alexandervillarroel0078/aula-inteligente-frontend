import React from 'react';
import { useNavigate } from 'react-router-dom';

const AlumnoListPage = () => {
  const navigate = useNavigate();

  const alumnos = [
    { id: 1, nombre: 'Juan Pérez', ci: '12345678', curso: '1ro A', turno: 'Mañana' },
    { id: 2, nombre: 'María López', ci: '87654321', curso: '2do B', turno: 'Tarde' },
    { id: 3, nombre: 'Carlos García', ci: '56789012', curso: '3ro C', turno: 'Mañana' },
  ];

  const handleVerAlumno = (alumno) => {
    navigate('/panel/alumnos/ver', { state: { alumno } });
  };

  return (
    <div className="p-6">
      {/* Encabezado */}
      <div className="flex items-center justify-between mb-4 flex-wrap gap-4">
        <h1 className="text-2xl font-bold">Listado de Alumnos Inscritos</h1>
        <button
  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
  onClick={() => navigate('/panel/alumnos/inscribir')}
>
  + Inscribir Alumno
</button>

      </div>

      {/* Herramientas */}
      <div className="bg-white border border-gray-300 rounded-md p-4 mb-4 shadow-sm">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <input
            type="text"
            placeholder="Buscar alumno..."
            className="border border-gray-300 px-4 py-2 rounded w-full sm:w-1/3"
          />
          <div className="flex gap-2">
            <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
              Exportar
            </button>
            <button className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700">
              Filtros
            </button>
          </div>
        </div>
      </div>

      {/* Tabla */}
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 rounded-md shadow-md">
          <thead className="bg-gray-200 text-gray-700">
            <tr>
              <th className="px-4 py-2 text-left">#</th>
              <th className="px-4 py-2 text-left">Nombre</th>
              <th className="px-4 py-2 text-left">CI</th>
              <th className="px-4 py-2 text-left">Curso</th>
              <th className="px-4 py-2 text-left">Turno</th>
              <th className="px-4 py-2 text-left">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {alumnos.map((alumno, index) => (
              <tr key={alumno.id} className="border-t hover:bg-gray-100">
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2">{alumno.nombre}</td>
                <td className="px-4 py-2">{alumno.ci}</td>
                <td className="px-4 py-2">{alumno.curso}</td>
                <td className="px-4 py-2">{alumno.turno}</td>
                <td className="px-4 py-2 space-x-2">
                  <button
                    className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
                    onClick={() => handleVerAlumno(alumno)}
                  >
                    Ver
                  </button>
                  <button className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600">
                    Editar
                  </button>
                  <button className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700">
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AlumnoListPage;

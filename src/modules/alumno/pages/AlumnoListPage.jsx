import React from 'react';
import { useNavigate } from 'react-router-dom';

const AlumnoListPage = () => {
  const navigate = useNavigate();

  const alumnos = [
    {
      id: 1,
      nombre: 'Juan Pérez',
      ci: '12345678',
      curso: '1ro A',
      turno: 'Mañana',
      estado: 'Activo',
      foto: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
    {
      id: 2,
      nombre: 'María López',
      ci: '87654321',
      curso: '2do B',
      turno: 'Tarde',
      estado: 'Egresado',
      foto: 'https://randomuser.me/api/portraits/women/2.jpg',
    },
    {
      id: 3,
      nombre: 'Carlos García',
      ci: '56789012',
      curso: '3ro C',
      turno: 'Mañana',
      estado: 'Retirado',
      foto: 'https://randomuser.me/api/portraits/men/3.jpg',
    },
    {
      id: 4,
      nombre: 'Juan Pérez',
      ci: '12345678',
      curso: '1ro A',
      turno: 'Mañana',
      estado: 'Activo',
      foto: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
    {
      id: 5,
      nombre: 'Juan Pérez',
      ci: '12345678',
      curso: '1ro A',
      turno: 'Mañana',
      estado: 'Activo',
      foto: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
    {
      id: 6,
      nombre: 'Juan Pérez',
      ci: '12345678',
      curso: '1ro A',
      turno: 'Mañana',
      estado: 'Activo',
      foto: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
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

      
      <div className="border rounded shadow p-4 bg-white mb-6">
        <div className="mb-4"></div>
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
                <th className="px-4 py-2 text-left">ID</th>

                <th className="px-4 py-2 text-left">Foto</th>
                <th className="px-4 py-2 text-left">Nombre</th>
                <th className="px-4 py-2 text-left">CI</th>
                <th className="px-4 py-2 text-left">Curso</th>
                <th className="px-4 py-2 text-left">Turno</th>
                <th className="px-4 py-2 text-left">Estado</th>
                <th className="px-4 py-2 text-left">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {alumnos.map((alumno) => (
                <tr key={alumno.id} className="border-t hover:bg-gray-100">
                  <td className="px-4 py-2">{alumno.id}</td>
                  <td className="px-4 py-2">
                    <img
                      src={alumno.foto}
                      alt={alumno.nombre}
                      className="w-10 h-10 rounded-full"
                    />
                  </td>

                  <td className="px-4 py-2">{alumno.nombre}</td>
                  <td className="px-4 py-2">{alumno.ci}</td>
                  <td className="px-4 py-2">{alumno.curso}</td>
                  <td className="px-4 py-2">{alumno.turno}</td>
                  <td className="px-4 py-2">
                    <span
                      className={`px-2 py-1 rounded text-white text-sm ${alumno.estado === 'Activo'
                        ? 'bg-green-600'
                        : alumno.estado === 'Egresado'
                          ? 'bg-blue-500'
                          : 'bg-red-600'
                        }`}
                    >
                      {alumno.estado}
                    </span>
                  </td>
                  <td className="px-4 py-2 space-x-2 flex flex-wrap gap-2">
                    <button
                      className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
                      onClick={() => handleVerAlumno(alumno)}
                    >
                      Ver
                    </button>
                    <button className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600">
                      Editar
                    </button>



                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AlumnoListPage;

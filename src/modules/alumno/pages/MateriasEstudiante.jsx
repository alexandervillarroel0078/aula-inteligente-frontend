import React from 'react';

const materias = [
  {
    nombre: 'Matemáticas',
    curso: '5to de Secundaria',
    grupo: 'B',
    docente: 'Lic. Marco Flores',
    horario: 'Lun, Mié, Vie - 08:00 a 09:30',
  },
  {
    nombre: 'Lenguaje y Comunicación',
    curso: '5to de Secundaria',
    grupo: 'B',
    docente: 'Lic. Ana María Gutiérrez',
    horario: 'Mar, Jue - 09:45 a 11:15',
  },
  {
    nombre: 'Historia',
    curso: '5to de Secundaria',
    grupo: 'B',
    docente: 'Lic. Alberto Suárez',
    horario: 'Lun, Mié - 11:30 a 13:00',
  },
];

const MateriasEstudiante = () => {
  return (
    <div>
      <h2 className="text-lg font-semibold text-gray-700 mb-4">📘 Materias Cursadas</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border rounded shadow">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="px-4 py-2 text-left">Materia</th>
              <th className="px-4 py-2 text-left">Curso</th>
              <th className="px-4 py-2 text-left">Grupo</th>
              <th className="px-4 py-2 text-left">Docente</th>
              <th className="px-4 py-2 text-left">Horario</th>
            </tr>
          </thead>
          <tbody>
            {materias.map((m, index) => (
              <tr key={index} className="border-t hover:bg-gray-50">
                <td className="px-4 py-2">{m.nombre}</td>
                <td className="px-4 py-2">{m.curso}</td>
                <td className="px-4 py-2">{m.grupo}</td>
                <td className="px-4 py-2">{m.docente}</td>
                <td className="px-4 py-2">{m.horario}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-4 text-sm text-gray-500">
        Esta es una lista visual de las materias que el estudiante tiene asignadas actualmente.
      </p>
    </div>
  );
};

export default MateriasEstudiante;

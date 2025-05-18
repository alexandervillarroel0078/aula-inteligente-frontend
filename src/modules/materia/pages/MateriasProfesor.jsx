// src/modules/profesor/components/MateriasProfesor.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom';

const materiasAsignadas = [
    {
        id: 1,
        nombre: 'Matemáticas',
        curso: '5to de Secundaria',
        grupo: 'B',
        horario: 'Lunes y Miércoles 08:00 - 09:30',
    },
    {
        id: 2,
        nombre: 'Álgebra',
        curso: '6to de Secundaria',
        grupo: 'A',
        horario: 'Martes y Jueves 10:00 - 11:30',
    },
    {
        id: 3,
        nombre: 'Estadística',
        curso: '5to de Secundaria',
        grupo: 'C',
        horario: 'Viernes 07:30 - 09:00',
    },
];

const MateriasProfesor = () => {
    const navigate = useNavigate();
    const handleVerMateria = (materia) => {
      navigate('/panel/profesor/materias/ver', { state: { materia } });

    };
    return (
        <div>
            {/* Encabezado con botón */}
            <div className="flex justify-between items-center mb-4 flex-wrap gap-2">
                <h2 className="text-lg font-semibold text-gray-700">📘 Materias Asignadas</h2>
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm">
                    + Asignar Materia
                </button>
            </div>

            {/* Tabla de materias */}
            <div className="overflow-x-auto">
                <table className="min-w-full text-sm border border-gray-200 rounded shadow">
                    <thead className="bg-gray-100 text-gray-700">
                        <tr>
                            <th className="px-4 py-2 text-left">#</th>
                            <th className="px-4 py-2 text-left">Materia</th>
                            <th className="px-4 py-2 text-left">Curso</th>
                            <th className="px-4 py-2 text-left">Grupo</th>
                            <th className="px-4 py-2 text-left">Horario</th>
                            <th className="px-4 py-2 text-left">Acciones</th>
                        </tr>
                    </thead>

                    <tbody>
                        {materiasAsignadas.map((materia, index) => (
                            <tr key={materia.id} className="border-t hover:bg-gray-50">
                                <td className="px-4 py-2">{index + 1}</td>
                                <td className="px-4 py-2">{materia.nombre}</td>
                                <td className="px-4 py-2">{materia.curso}</td>
                                <td className="px-4 py-2">{materia.grupo}</td>
                                <td className="px-4 py-2">{materia.horario}</td>
                                <button
                                    className="text-sm text-blue-600 hover:underline"
                                    onClick={() => handleVerMateria(materia)}
                                >
                                    Ver
                                </button>

                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MateriasProfesor;

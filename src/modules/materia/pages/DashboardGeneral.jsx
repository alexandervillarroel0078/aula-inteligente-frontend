// src/modules/materia/pages/DashboardGeneral.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';


const DashboardGeneral = () => {
    const navigate = useNavigate();

    const datosRendimiento = [
        { periodo: 'Bim. 1', real: 72, predicho: 75 },
        { periodo: 'Bim. 2', real: 80, predicho: 78 },
        { periodo: 'Bim. 3', real: 78, predicho: 82 },
        { periodo: 'Bim. 4', real: 85, predicho: 83 },
    ];

    return (
        <div>
            <h2 className="text-xl font-semibold mb-4 text-gray-800">📊 Panel General de la Materia</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <div className="bg-blue-100 p-4 rounded shadow">
                    <p className="text-sm text-gray-600">Total de Estudiantes</p>
                    <p className="text-2xl font-bold">30</p>
                </div>

                <div className="bg-green-100 p-4 rounded shadow">
                    <p className="text-sm text-gray-600">Promedio General</p>
                    <p className="text-2xl font-bold">81.3</p>
                </div>

                <div className="bg-yellow-100 p-4 rounded shadow">
                    <p className="text-sm text-gray-600">Participación Media</p>
                    <p className="text-2xl font-bold">Alta</p>
                </div>

                <div className="bg-purple-100 p-4 rounded shadow">
                    <p className="text-sm text-gray-600">Asistencia Promedio</p>
                    <p className="text-2xl font-bold">92%</p>
                </div>
            </div>


            {/* Gráfico comparativo claro */}
            <div className="bg-white p-4 rounded border shadow">
                <h3 className="text-md font-semibold text-gray-700 mb-4">📈 Comparación: Rendimiento Real vs Predicho</h3>

                <div className="space-y-4">
                    {datosRendimiento.map((item, index) => (
                        <div key={index}>
                            <p className="text-sm font-medium text-gray-600 mb-1">{item.periodo}</p>
                            <div className="flex items-center gap-4">
                                <div className="flex-1">
                                    <div className="bg-gray-200 rounded h-4 relative">
                                        <div
                                            className="absolute top-0 left-0 h-4 bg-blue-500 rounded-l"
                                            style={{ width: `${item.real}%` }}
                                        >
                                            <span className="absolute left-1 text-white text-xs">{item.real}</span>
                                        </div>
                                        <div
                                            className="absolute top-0 left-0 h-4 bg-green-500 rounded-r opacity-70"
                                            style={{ width: `${item.predicho}%` }}
                                        >
                                            <span className="absolute right-1 text-white text-xs">{item.predicho}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-24 text-xs text-gray-500">
                                    <span className="block"><span className="text-blue-600 font-bold">Real:</span> {item.real}</span>
                                    <span className="block"><span className="text-green-600 font-bold">IA:</span> {item.predicho}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Leyenda */}
                <div className="mt-6 flex gap-6 text-xs text-gray-600">
                    <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-blue-500 rounded"></div>
                        Real
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-green-500 rounded"></div>
                        Predicción IA
                    </div>
                </div>
            </div>

            {/* 🧾 Tabla: Historial de alumnos con predicción y clasificación */}
            <table className="min-w-full mt-6 text-sm text-gray-700">
                <thead className="bg-gray-100 text-left">
                    <tr>
                        <th className="px-4 py-2">Estudiante</th>
                        <th className="px-4 py-2">Nota Real</th>
                        <th className="px-4 py-2">Predicción IA</th>
                        <th className="px-4 py-2">Clasificación</th>
                        <th className="px-4 py-2">Acción</th> {/* Nueva columna para "Ver" */}
                    </tr>
                </thead>
                <tbody>
                    {[
                        { nombre: "Juan Pérez", nota: 82, prediccion: 80, clasificacion: "Alto" },
                        { nombre: "María Gómez", nota: 70, prediccion: 68, clasificacion: "Medio" },
                        { nombre: "Esteban Vargas", nota: 58, prediccion: 61, clasificacion: "Bajo" },
                    ].map((est, index) => (
                        <tr key={index} className="border-t hover:bg-gray-50">
                            <td className="px-4 py-2">{est.nombre}</td>
                            <td className="px-4 py-2">{est.nota}</td>
                            <td className="px-4 py-2">{est.prediccion}</td>

                            {/* Estilo según clasificación */}
                            <td
                                className={`px-4 py-2 font-semibold ${est.clasificacion === "Alto"
                                    ? "text-green-600"
                                    : est.clasificacion === "Medio"
                                        ? "text-yellow-600"
                                        : "text-red-600"
                                    }`}
                            >
                                {est.clasificacion}
                            </td>

                            {/* Botón de acción (sólo diseño) */}
                            <td className="px-4 py-2">
                                <button
                                    onClick={() =>
                                        navigate('/panel/alumnos/ver', {
                                            state: {
                                                alumno: {
                                                    nombre_completo: est.nombre,
                                                    email: 'demo@correo.com',
                                                    ciudad: 'Santa Cruz',
                                                    pais: 'Bolivia',
                                                    zona_horaria: 'America/La_Paz',
                                                    rol: 'Estudiante',
                                                    grupo: 'B',
                                                    cursos: [
                                                        '[1-2025] Matemáticas - SA',
                                                        '[1-2025] Física - SB',
                                                    ],
                                                }
                                            }
                                        })
                                    }
                                    className="text-blue-600 text-sm hover:underline"
                                >
                                    Ver
                                </button>

                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>


        </div>
    );
};

export default DashboardGeneral;

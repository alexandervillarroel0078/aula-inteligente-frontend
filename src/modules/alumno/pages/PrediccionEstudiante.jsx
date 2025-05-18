import React from 'react';
import { FaChartLine } from 'react-icons/fa';

const PrediccionEstudiante = () => {
    // Datos simulados (mock)
    const resultadoIA = {
        valor: 76.3,
        clasificacion: 'Alto',
        fecha: '2025-05-15',
        factores: {
            promedioNotas: 78.4,
            asistencia: '85%',
            participacion: 'Media',
        },
    };

    const getColor = (clasificacion) => {
        if (clasificacion === 'Alto') return 'bg-green-600';
        if (clasificacion === 'Medio') return 'bg-yellow-500';
        return 'bg-red-600';
    };

    return (
        <div>
            <h2 className="text-lg font-semibold text-gray-700 mb-4">🤖 Predicción del Rendimiento Académico</h2>

            {/* Tarjeta con resultado */}
            <div className={`flex items-center gap-4 p-6 rounded shadow text-white ${getColor(resultadoIA.clasificacion)}`}>
                <FaChartLine className="text-3xl" />
                <div>
                    <p className="text-sm opacity-90">Resultado de predicción IA:</p>
                    <h3 className="text-2xl font-bold">{resultadoIA.valor} – {resultadoIA.clasificacion}</h3>
                    <p className="text-sm mt-1 opacity-80">Última actualización: {resultadoIA.fecha}</p>
                </div>
            </div>

            {/* Detalles de factores */}
            <div className="mt-6">
                <h4 className="text-md font-semibold text-gray-700 mb-2">📊 Factores considerados:</h4>
                <ul className="list-disc list-inside text-sm text-gray-800 space-y-1">
                    <li>Promedio de notas: {resultadoIA.factores.promedioNotas}</li>
                    <li>Porcentaje de asistencia: {resultadoIA.factores.asistencia}</li>
                    <li>Promedio de participación: {resultadoIA.factores.participacion}</li>
                </ul>
            </div>

            {/* Nota */}
            <p className="text-sm opacity-80">
                Predicción general del rendimiento académico del estudiante con base en sus datos recientes.
            </p>
            <p className="text-sm">Periodo evaluado: Primer semestre 2025</p>

        </div>
    );
};

export default PrediccionEstudiante;

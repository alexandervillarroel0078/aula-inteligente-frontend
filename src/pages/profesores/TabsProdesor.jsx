// src/pages/profesores/TabsProfesor.jsx

import React, { useState, useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { obtenerProfesor } from '../../services/profesorService';
import MateriasProfesor from './MateriaProfesor';

const TabsProfesor = () => {
    const { id } = useParams();
    const [searchParams] = useSearchParams();
    const [activeTab, setActiveTab] = useState(searchParams.get('tab') || 'Perfil');
    const [profesor, setProfesor] = useState(null);

    const tabs = [
        'Perfil',
        'Materias',
        /* 'Estudiantes',
         'Notas',
         'Asistencias',
         'Participaciones',*/
        'Predicción',
        'Dashboard',
        'Configuración'
    ];


    useEffect(() => {
        const cargarProfesor = async () => {
            try {
                const data = await obtenerProfesor(id);
                setProfesor(data);
            } catch (error) {
                console.error('❌ Error al obtener profesor:', error);
            }
        };
        cargarProfesor();
    }, [id]);

    const renderContent = () => {
        switch (activeTab) {
            case 'Perfil':
                return <p>📋 Aquí se mostrará el perfil del profesor.</p>;
            case 'Materias':
                return <MateriasProfesor profesorId={profesor.id} />;
          /*  case 'Estudiantes':
                return <p>👥 Aquí se listarán los estudiantes por materia.</p>;
            case 'Notas':
                return <p>📝 Aquí se podrá registrar y ver notas.</p>;
            case 'Asistencias':
                return <p>✅ Aquí se podrá registrar y ver asistencias.</p>;
            case 'Participaciones':
                return <p>🎤 Aquí se registrarán participaciones por clase.</p>;
           */ case 'Predicción':
                return <p>📈 Aquí se mostrarán predicciones de rendimiento académico.</p>;
            case 'Dashboard':
                return <p>📊 Aquí se mostrará el resumen de estadísticas del profesor.</p>;
            case 'Configuración':
                return <p>⚙️ Aquí van las opciones de configuración de la cuenta del profesor.</p>;
            default:
                return <p>❌ Sección no encontrada.</p>;
        }
    };


    if (!profesor) return <p className="text-gray-500">Cargando profesor...</p>;

    return (
        <div className="p-4">
            {/* Encabezado */}
            <div className="mb-4">
                <h2 className="text-2xl font-bold text-gray-800">{profesor.nombre_completo}</h2>
                <p className="text-sm text-gray-500">Profesor</p>
            </div>

            {/* Navegación de Tabs */}
            <div className="flex flex-wrap border-b border-gray-300 mb-4">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-4 py-2 text-sm font-medium border-b-2 ${activeTab === tab
                            ? 'border-blue-600 text-blue-600'
                            : 'border-transparent text-gray-600 hover:text-blue-500'
                            }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Contenido del Tab Activo */}
            <div className="bg-white border rounded shadow p-4">
                {renderContent()}
            </div>
        </div>
    );
};

export default TabsProfesor;

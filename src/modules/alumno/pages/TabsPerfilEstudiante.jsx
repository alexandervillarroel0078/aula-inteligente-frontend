import React, { useState } from 'react';
import ResumenEstudiante from './ResumenEstudiante';
import AsistenciaEstudiante from './AsistenciaEstudiante';
import ParticipacionEstudiante from './ParticipacionEstudiante';
import NotasEstudiante from './NotasEstudiante';
import PrediccionEstudiante from './PrediccionEstudiante';
import EvolucionEstudiante from './HistorialEstudiante';
import MateriasEstudiante from './MateriasEstudiante';

const tabs = [
    'Resumen',
    'Notas',
    'Asistencias',
    'Participación',
    'Predicción',
    'Historial',
    'Materias',
    'Notificaciones',
    'Configuración',
];

const TabsPerfilEstudiante = ({ alumno }) => {
    const [activeTab, setActiveTab] = useState('Resumen');

    const renderContent = () => {
        switch (activeTab) {
            case 'Resumen':
                return <ResumenEstudiante alumno={alumno} />;
            case 'Notas':
                return <NotasEstudiante />;
            case 'Asistencias':
                return <AsistenciaEstudiante />;
            case 'Participación':
                return <ParticipacionEstudiante />;
            case 'Predicción':
                return <PrediccionEstudiante />;
            case 'Historial':
                return <EvolucionEstudiante />;
            case 'Materias':
                return <MateriasEstudiante />;
            case 'Notificaciones':
                return <p>Lista de mensajes o comunicados recibidos.</p>;
            case 'Configuración':
                return <p>Formulario para cambiar datos del perfil o contraseña.</p>;
            default:
                return null;
        }
    };

    return (
        <div className="mt-8">
            {/* Tabs */}
            <div className="flex flex-wrap border-b border-gray-200">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-4 py-2 font-medium text-sm rounded-t-md focus:outline-none transition-all ${activeTab === tab
                            ? 'bg-white border-l border-t border-r text-blue-600'
                            : 'text-gray-500 hover:text-blue-600'
                            }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Contenido */}
            <div className="bg-white p-6 border border-t-0 rounded-b-md shadow-sm min-h-[200px]">
                {renderContent()}
            </div>
        </div>
    );
};

export default TabsPerfilEstudiante;

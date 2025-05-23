// src/modules/profesor/pages/TabsPerfilProfesor.jsx

import React, { useState } from 'react';
import MateriasProfesor from '../../materia/pages/MateriasProfesor'; // ajusta la ruta si es necesario
import NotasPorMateria from './NotasPorMateria';
import AsistenciaPorMateria from './AsistenciaPorMateria';
import ParticipacionPorMateria from './ParticipacionPorMateria';
import ProfesorViewPage from './ProfesorViewPage';
import ResumenProfesorPage from './ResumenProfesorPage';

const tabs = [
        'Resumen',
        'Materias',
        'Notas',
        'Asistencias',
        'Participaciones',
        'Configuración',
    ];
const TabsPerfilProfesor = ({ profesor }) => {
    const [activeTab, setActiveTab] = useState('Resumen');

    

    const renderContent = () => {
        switch (activeTab) {
            case 'Resumen':
                return <ResumenProfesorPage profesor={profesor} />;
            case 'Materias':
                return <MateriasProfesor />;
            case 'Notas':
                return <NotasPorMateria />;

            case 'Asistencias':
                return <AsistenciaPorMateria />;

            case 'Participaciones':
                return <ParticipacionPorMateria />;
            case 'Configuración':
                return <p>Formulario para actualizar correo, contraseña, etc.</p>;
            default:
                return null;
        }
    };

    return (
        <div className="mt-6">
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

export default TabsPerfilProfesor;

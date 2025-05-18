// src/modules/profesor/pages/TabsMateria.jsx

import React, { useState } from 'react';
import DashboardGeneral from './DashboardGeneral';
import PanelAdministrativo from './PanelAdministrativo';
import VistaDatasetIA from './VistaDatasetIA';
import ExportacionesView from './ExportacionesView';

import NotasMateria from './NotasPorMateria';
import AsistenciasMateria from './AsistenciasPorMateria';
import ParticipacionesMateria from './ParticipacionesPorMateria';

const TabsMateria = ({ materia }) => {
  const [activeTab, setActiveTab] = useState('Dashboard');

   const tabs = [
    'Dashboard',
    'Administración',
    'Notas',
    'Asistencias',
    'Participaciones',
    'Datos IA',
    'Exportaciones'
  ];

  const renderContent = () => {
  switch (activeTab) {
    case 'Dashboard':
      return <DashboardGeneral />;
    case 'Administración':
      return <PanelAdministrativo />;
    case 'Notas':
      return <NotasMateria />;
    case 'Asistencias':
      return <AsistenciasMateria />;
    case 'Participaciones':
      return <ParticipacionesMateria />;
    case 'Datos IA':
      return <VistaDatasetIA />;
    case 'Exportaciones':
      return <ExportacionesView />;
    default:
      return null;
  }
};


  return (
    <div>
      {/* Navegación de Tabs */}
      <div className="flex border-b border-gray-300 mb-4">
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

      {/* Contenido */}
      <div className="bg-white border rounded shadow p-4">
        {renderContent()}
      </div>
    </div>
  );
};

export default TabsMateria;

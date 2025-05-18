// src/modules/profesor/pages/ProfesorViewPage.jsx

import React from 'react';
import { FaCommentDots } from 'react-icons/fa';
import TabsPerfilProfesor from './TabsPerfilProfesor'; // está en la misma carpeta

const ProfesorViewPage = () => {
    // ⚠️ Datos estáticos de ejemplo
    const profesor = {
        id: 1,
        nombre: 'Luis Mendoza',
        ci: '4567890',
        telefono: '72111222',
        especialidad: 'Matemáticas',
        email: 'lmendoza@colegio.edu.bo',
        estado: 'Activo',
    };

    return (
        <div className="p-6">
            {/* Encabezado */}
            <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
                <div className="flex items-center gap-4">
                    <div className="flex flex-col items-center justify-center">
                        <span className="text-xs text-gray-500 mb-1">Profesor</span>
                        <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center text-xl font-semibold text-gray-700">
                            {profesor.nombre.charAt(0)}
                        </div>
                    </div>

                    <h1 className="text-2xl font-bold text-gray-800">
                        {profesor.nombre}
                    </h1>
                </div>

                <div className="flex items-center gap-2 text-gray-800 hover:text-black cursor-pointer">
                    <FaCommentDots className="text-lg" />
                    <span className="text-sm font-medium">Mensaje</span>
                </div>
            </div>

            {/* Tabs del perfil del profesor */}
            <TabsPerfilProfesor profesor={profesor} />
        </div>
    );
};

export default ProfesorViewPage;

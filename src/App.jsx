// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import DashboardLayout from './layout/DashboardLayout';
import AlumnoListPage from './modules/alumno/pages/AlumnoListPage';
import AlumnoViewPage from './modules/alumno/pages/AlumnoViewPage';
import AlumnoInscripcionPage from './modules/alumno/pages/AlumnoInscripcionPage';

import MateriaListPage from './modules/materia/pages/MateriaListPage';

import ProfesorListPage from './modules/profesor/pages/ProfesorListPage';

import GradoListPage from './modules/grado/pages/GradoListPage';

import AsignarMateriaPage from './modules/asignacion/pages/AsignarMateriaPage';

// Notas
import NotaListPage from './modules/notas/pages/NotaListPage';
import NotaRegisterPage from './modules/notas/pages/NotaRegisterPage';

import TareaListPage from './modules/tareas/pages/TareaListPage';
import TareaCreatePage from './modules/tareas/pages/TareaCreatePage';





import AsistenciaListPage from './modules/asistencias/pages/AsistenciaListPage';

import ParticipacionListPage from './modules/participaciones/pages/ParticipacionListPage';


import PrediccionPage from './modules/prediccion/pages/PrediccionPage';
import PeriodoListPage from './modules/periodos/pages/PeriodoListPage';
import ObservacionPage from './modules/observaciones/pages/ObservacionPage';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/panel" element={<DashboardLayout />}>
          <Route index element={<p className="text-gray-600">Selecciona un módulo del menú lateral.</p>} />

          {/* ✅ Usa rutas relativas aquí */}
          <Route path="alumnos" element={<AlumnoListPage />} />
          <Route path="alumnos/ver" element={<AlumnoViewPage />} />
          <Route path="alumnos/inscribir" element={<AlumnoInscripcionPage />} />


          <Route path="materias" element={<MateriaListPage />} />
          <Route path="profesores" element={<ProfesorListPage />} />
          <Route path="grados" element={<GradoListPage />} />
          <Route path="asignaciones" element={<AsignarMateriaPage />} />




          <Route path="tareas" element={<TareaListPage />} />
          <Route path="tareas/nueva" element={<TareaCreatePage />} />
          <Route path="notas" element={<NotaListPage />} />
          <Route path="notas/registrar" element={<NotaRegisterPage />} />



          <Route path="asistencias" element={<AsistenciaListPage />} />



          <Route path="participaciones" element={<ParticipacionListPage />} />

          <Route path="prediccion" element={<PrediccionPage />} />
<Route path="periodos" element={<PeriodoListPage />} />


<Route path="observaciones" element={<ObservacionPage />} />



        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

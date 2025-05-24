// ✅ App.jsx Corregido (rutas absolutas fuera de /panel)
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import DashboardLayout from './layout/DashboardLayout';
import Panel from './pages/Panel';

import AlumnoListPage from './pages/AlumnoListPage';
import ProfesorListPage from './pages/ProfesorListPage';
import MateriaListPage from './pages/MateriaListPage';
import NotaListPage from './pages/NotaListPage';
import AsistenciaListPage from './pages/AsistenciaListPage';
import ParticipacionListPage from './pages/ParticipacionListPage';
import PrediccionListPage from './pages/PrediccionListPage';
import TareaListPage from './pages/TareaListPage';
import TareaEntregadaListPage from './pages/TareaEntregadaListPage';
import ObservacionListPage from './pages/ObservacionListPage';
import PeriodoListPage from './pages/PeriodoListPage';
import RolListPage from './pages/RolListPage';
import UsuarioListPage from './pages/UsuarioListPage';
import MateriaProfesorListPage from './pages/MateriaProfesorListPage';
import GradoListPage from './pages/GradoListPage';
import BitacoraListPage from './pages/BitacoraListPage';

import TabsEstudiante from './pages/alumnos/TabsEstudiante';
import NotaMateriaEstudiante from './pages/alumnos/NotaMateriaEstudiante';
import AsistenciaMateriaEstudiante from './pages/alumnos/AsistenciaMateriaEstudiante';


import TabsProfesor from './pages/profesores/TabsProdesor';
import NotasMateriaProfesor from './pages/profesores/NotasMateriaProfesor';
import AsistenciasMateriaProfesor from './pages/profesores/AsistenciasMateriaProfesor';
import ParticipacionesMateriaProfesor from './pages/profesores/ParticipacionesMateriaProfesor';
import EstudiantesMateriaProfesor from './pages/profesores/EstudiantesMateriaProfesor';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/panel" element={<DashboardLayout />}>
          <Route index element={<Panel />} />
          <Route path="alumnos" element={<AlumnoListPage />} />
          <Route path="profesores" element={<ProfesorListPage />} />
          <Route path="materias" element={<MateriaListPage />} />
          <Route path="notas" element={<NotaListPage />} />
          <Route path="asistencias" element={<AsistenciaListPage />} />
          <Route path="participaciones" element={<ParticipacionListPage />} />
          <Route path="predicciones" element={<PrediccionListPage />} />
          <Route path="tareas" element={<TareaListPage />} />
          <Route path="tareas-entregadas" element={<TareaEntregadaListPage />} />
          <Route path="observaciones" element={<ObservacionListPage />} />
          <Route path="periodos" element={<PeriodoListPage />} />
          <Route path="roles" element={<RolListPage />} />
          <Route path="usuarios" element={<UsuarioListPage />} />
          <Route path="asignaciones" element={<MateriaProfesorListPage />} />
          <Route path="grados" element={<GradoListPage />} />
          <Route path="bitacoras" element={<BitacoraListPage />} />
          <Route path="alumnos/:id/tabs" element={<TabsEstudiante />} />
          {/* Profesores */}
          <Route path="profesores/:id/tabs" element={<TabsProfesor />} />
          <Route path="profesor/:profesorId/materia/:materiaId/notas" element={<NotasMateriaProfesor />} />
          <Route path="profesor/:profesorId/materia/:materiaId/asistencias" element={<AsistenciasMateriaProfesor />} />
          <Route path="profesor/:profesorId/materia/:materiaId/participaciones" element={<ParticipacionesMateriaProfesor />} />
          <Route path="profesor/:profesorId/materia/:materiaId/estudiantes" element={<EstudiantesMateriaProfesor />} />

        </Route>

        {/* Rutas fuera del panel */}
        <Route path="/alumno/:alumnoId/materia/:materiaId/notas" element={<NotaMateriaEstudiante />} />
        <Route path="/alumno/:alumnoId/materia/:materiaId/asistencias" element={<AsistenciaMateriaEstudiante />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;

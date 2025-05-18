// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// 🔐 Autenticación
import Login from './pages/Login';

// 🧩 Layout general
import DashboardLayout from './layout/DashboardLayout';

// 👨‍🎓 Módulo: Alumnos
import AlumnoListPage from './modules/alumno/pages/AlumnoListPage';
import AlumnoViewPage from './modules/alumno/pages/AlumnoViewPage';
import AlumnoInscripcionPage from './modules/alumno/pages/AlumnoInscripcionPage';

// 📚 Módulo: Materias
import MateriaListPage from './modules/materia/pages/MateriaListPage';
import MateriaViewPage from './modules/materia/pages/MateriaViewPage';

// 👨‍🏫 Módulo: Profesores
import ProfesorListPage from './modules/profesor/pages/ProfesorListPage';
import ProfesorViewPage from './modules/profesor/pages/ProfesorViewPage';

// 🏫 Módulo: Grados / Cursos
import GradoListPage from './modules/grado/pages/GradoListPage';

// 📌 Módulo: Asignaciones (materias a profesores)
import AsignarMateriaPage from './modules/asignacion/pages/AsignarMateriaPage';

// 📝 Módulo: Notas
import NotaListPage from './modules/notas/pages/NotaListPage';
import NotaRegisterPage from './modules/notas/pages/NotaRegisterPage';

// 📋 Módulo: Asistencias
import AsistenciaListPage from './modules/asistencias/pages/AsistenciaListPage';

// 💬 Módulo: Participaciones
import ParticipacionListPage from './modules/participaciones/pages/ParticipacionListPage';

// 🧠 Módulo: Predicción IA
import PrediccionPage from './modules/prediccion/pages/PrediccionPage';

// 🗓️ Módulo: Periodos académicos
import PeriodoListPage from './modules/periodos/pages/PeriodoListPage';

// 🔍 Módulo: Observaciones del docente
import ObservacionPage from './modules/observaciones/pages/ObservacionPage';

// 🗃️ Módulo: Tareas
import TareaListPage from './modules/tareas/pages/TareaListPage';
import TareaCreatePage from './modules/tareas/pages/TareaCreatePage';

function App() {
  return (
    <BrowserRouter>
  <Routes>
    <Route path="/" element={<Login />} />

    <Route path="/panel" element={<DashboardLayout />}>
      <Route index element={<p className="text-gray-600">Selecciona un módulo del menú lateral.</p>} />

      {/* Módulos */}
      <Route path="alumnos" element={<AlumnoListPage />} />
      <Route path="alumnos/ver" element={<AlumnoViewPage />} />
      <Route path="alumnos/inscribir" element={<AlumnoInscripcionPage />} />

      <Route path="materias" element={<MateriaListPage />} />
      <Route path="profesor/materias/ver" element={<MateriaViewPage />} />

      <Route path="profesores" element={<ProfesorListPage />} />
      <Route path="profesores/ver" element={<ProfesorViewPage />} />

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

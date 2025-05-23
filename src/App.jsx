// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import DashboardLayout from './layout/DashboardLayout';
import Panel from "./pages/Panel";


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

 

 



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/panel" element={<DashboardLayout />}>
          <Route index element={<Panel />} />

          <Route path="/panel/alumnos" element={<AlumnoListPage />} />
          <Route path="/panel/profesores" element={<ProfesorListPage />} />
          <Route path="/panel/materias" element={<MateriaListPage />} />
          <Route path="/panel/notas" element={<NotaListPage />} />
          <Route path="/panel/asistencias" element={<AsistenciaListPage />} />
          <Route path="/panel/participaciones" element={<ParticipacionListPage />} />
          <Route path="/panel/predicciones" element={<PrediccionListPage />} />

          <Route path="/panel/tareas" element={<TareaListPage />} />

          <Route path="/panel/tareas-entregadas" element={<TareaEntregadaListPage />} />

          <Route path="/panel/observaciones" element={<ObservacionListPage />} />
<Route path="/panel/periodos" element={<PeriodoListPage />} />
<Route path="/panel/roles" element={<RolListPage />} />
<Route path="/panel/usuarios" element={<UsuarioListPage />} />
 
<Route path="/panel/asignaciones" element={<MateriaProfesorListPage />} />
<Route path="/panel/grados" element={<GradoListPage />} />
 
<Route path="/panel/bitacoras" element={<BitacoraListPage />} />

 


        </Route>

      </Routes>
    </BrowserRouter>

  );
}

export default App;

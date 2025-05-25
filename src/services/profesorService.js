import api from './api';
import axios from 'axios';

// GET - Listar todos los profesores
export const listarProfesores = async () => {
  const response = await api.get('/api/profesores');
  return response.data;
};

// GET - Obtener un profesor por ID
export const obtenerProfesor = async (id) => {
  const response = await api.get(`/api/profesores/${id}`);
  return response.data;
};

export const obtenerMateriasDelProfesor = async (profesorId) => {
  try {
    const response = await api.get(`/api/profesores/${profesorId}/materias`);
    return response.data;
  } catch (error) {
    console.error('❌ Error al obtener materias del profesor:', error);
    throw error;
  }
};

export const obtenerNotasPorMateria = async (materiaId) => {
  try {
    const response = await api.get(`/api/materias/${materiaId}/notas`);
    return response.data;
  } catch (error) {
    console.error('❌ Error al obtener notas por materia:', error);
    throw error;
  }
};

// 🔹 Registrar notas por materia
export const registrarNotasPorMateria = async (materiaId, data) => {
  try {
    const response = await api.post(`/api/materias/${materiaId}/notas`, data);
    return response.data;
  } catch (error) {
    console.error('❌ Error al registrar notas:', error);
    throw error;
  }
};

// 🔹 Obtener resumen de asistencia por materia (todo el año)
export const obtenerAsistenciasPorMateria = async (materiaId) => {
  try {
    const response = await api.get(`/api/materias/${materiaId}/asistencias`);
    return response.data;
  } catch (error) {
    console.error('❌ Error al obtener resumen de asistencias:', error);
    throw error;
  }
};
// 🔹 Registrar asistencias de una materia
export const registrarAsistenciasMateria = async (materiaId, data) => {
  try {
    const response = await api.post(`/api/materias/${materiaId}/asistencias`, data);
    return response.data;
  } catch (error) {
    console.error('❌ Error al registrar asistencias:', error);
    throw error;
  }
};


// sObtener participaciones por materia
export const obtenerParticipacionesPorMateria = async (materiaId) => {
  try {
    const response = await api.get(`/api/materias/${materiaId}/participaciones`);
    return response.data;
  } catch (error) {
    console.error('❌ Error al obtener participaciones por materia:', error);
    throw error;
  }
};


// profesorService.js

// profesorService.js

export const registrarParticipacionMateria = async (materiaId, payload) => {
  try {
    const response = await axios.post(`http://localhost:5000/api/materias/${materiaId}/participaciones`, payload);
    return response.data;
  } catch (error) {
    console.error("Error al registrar participaciones:", error);
    throw error;
  }
};




// 🔹 Obtener estudiantes por materia
export const obtenerEstudiantesPorMateria = async (materiaId) => {
    try {
        const response = await api.get(`/api/materias/${materiaId}/estudiantes`);
        return response.data;
    } catch (error) {
        console.error('❌ Error al obtener estudiantes por materia:', error);
        throw error;
    }
};





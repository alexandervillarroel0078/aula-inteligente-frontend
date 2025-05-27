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

export const obtenerNotasPorMateriaProfesorGrado = async (profesorId, materiaId, gradoId, periodoId = null) => {
    try {
        // Construir la URL con los parámetros
        let url = `/api/notas/profesor?profesor_id=${profesorId}&materia_id=${materiaId}&grado_id=${gradoId}`;
        
        // Si se pasa un periodoId, agregarlo a la URL
        if (periodoId) {
            url += `&periodo_id=${periodoId}`;
        }

        // Hacer la solicitud GET a la API
        const response = await api.get(url);

        // Retornar los datos obtenidos de la API
        return response.data;
    } catch (error) {
        console.error("Error al obtener las notas de los alumnos:", error);
        throw error; // Lanza el error para que pueda ser manejado por quien llame a esta función
    }
};
/*✅ profesor-->materia-->participacion*/
export const obtenerParticipacionPorProfesorMateriaGrado = async (profesorId, materiaId, gradoId, periodoId = null) => {
    try {
        // Construir la URL con los parámetros
        let url = `/api/participaciones/profesor?profesor_id=${profesorId}&materia_id=${materiaId}&grado_id=${gradoId}`;
        
        // Si se pasa un periodo_id, agregarlo a la URL
        if (periodoId) {
            url += `&periodo_id=${periodoId}`;
        }

        // Hacer la solicitud GET con la instancia 'api'
        const response = await api.get(url);  // Cambié 'axios.get(url)' por 'api.get(url)'

        // Retornar la respuesta
        return response.data;
    } catch (error) {
        console.error("Error al obtener la participación del profesor:", error);
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
export const registrarAsistenciasMateria = async (materiaId, payload) => {
    try {
        // Verifica que esta URL sea correcta
        const response = await axios.post(`http://localhost:5000/api/materias/${materiaId}/asistencias`, payload);
        return response.data;
    } catch (error) {
        console.error('Error al registrar asistencia:', error);
        throw error;
    }
};


const API_URL = 'http://localhost:5000/api/materias/';

// Función para obtener las notas finales de asistencia por materia
export const obtenerNotasFinalAsistencia = async (materiaId) => {
  try {
    // Hacemos la solicitud GET al backend
    const response = await axios.get(`${API_URL}${materiaId}/notasFinalAsistencia`);
    
    // Devolvemos los datos si la solicitud fue exitosa
    return response.data;
  } catch (error) {
    console.error('Error al obtener las notas final asistencia:', error);
    throw error;  // Puedes manejar el error de otra manera si lo deseas
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





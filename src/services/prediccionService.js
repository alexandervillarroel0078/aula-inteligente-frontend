import api from './api';

// POST: Realiza una predicción individual y la guarda en la base de datos
export const predecir = async (datos) => {
  const response = await api.post('/api/consulta-prediccion', datos);
  return response.data;
};

// POST: Genera predicciones para todos los alumnos de un grado/materia/periodo
export const generarPrediccionesParaTodos = async (datos) => {
  const response = await api.post('/api/predicciones/generar', datos);
  return response.data;
};

// POST: Genera predicciones para TODAS las materias que imparte un profesor en un grado
export const generarPrediccionesMultiplesMaterias = async (datos) => {
  const response = await api.post('/api/predicciones/generar-multiples', datos);
  return response.data;
};

// GET: Lista todas las predicciones registradas (modo admin/profesor)
export const listarPredicciones = async () => {
  const response = await api.get('/api/predicciones');
  return response.data;
};

// GET: Obtiene las predicciones para un alumno específico (modo alumno)
export const obtenerPrediccionesPorAlumno = async (alumnoId) => {
  const response = await api.get(`/api/predicciones/alumno/${alumnoId}`);
  return response.data;
};
export const listarGradosDelProfesor = async (profesorId) => {
  const response = await api.get(`/api/predicciones/grados/${profesorId}`);
  return response.data;
};
import api from './api';

// GET - Listar todas las materias
export const listarMaterias = async () => {
  const response = await api.get('/api/materias');
  return response.data;
};

// GET - Ver una materia por ID
export const verMateria = async (id) => {
  const response = await api.get(`/api/materias/${id}`);
  return response.data;
};

// POST - Crear una nueva materia
export const crearMateria = async (materiaData) => {
  const response = await api.post('/api/materias', materiaData);
  return response.data;
};

// PUT - Editar una materia
export const editarMateria = async (id, materiaData) => {
  const response = await api.put(`/api/materias/${id}`, materiaData);
  return response.data;
};

// DELETE - Eliminar una materia
export const eliminarMateria = async (id) => {
  const response = await api.delete(`/api/materias/${id}`);
  return response.data;
};

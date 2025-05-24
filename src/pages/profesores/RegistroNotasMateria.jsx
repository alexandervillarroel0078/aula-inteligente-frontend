import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const RegistroNotasMateria = () => {
    const { materiaId } = useParams();  // Obtenemos el ID de la materia desde la URL
    const navigate = useNavigate();

    const [fecha, setFecha] = useState('');  // Estado para la fecha
    const [periodoId, setPeriodoId] = useState(1);  // Bimestre seleccionado
    const [alumnos, setAlumnos] = useState([]);  // Lista de alumnos
    const [notas, setNotas] = useState({});  // Estado para las notas de los alumnos

    useEffect(() => {
        const fetchAlumnos = async () => {
            try {
                // Asegúrate de usar la URL correcta para el backend
                const response = await axios.get(`http://localhost:5000/api/materias/${materiaId}/estudiantes`);
                setAlumnos(response.data.estudiantes);  // Establecer la lista de estudiantes
            } catch (error) {
                console.error('❌ Error al obtener los estudiantes:', error);  // Mostrar mensaje de error
            }
        };

        if (materiaId) fetchAlumnos();  // Llamar a la función si materiaId está disponible
    }, [materiaId]);  // Ejecutar cuando cambie materiaId

    // Maneja el cambio de las notas de un alumno
    const handleNotaChange = (alumnoId, bimestre, valor) => {
        setNotas(prevNotas => ({
            ...prevNotas,
            [alumnoId]: {
                ...prevNotas[alumnoId],
                [`b${bimestre}_parcial`]: valor,  // Guardamos la nota del parcial
            },
        }));
    };

    // Enviar las notas al servidor
    const handleGuardar = async () => {
        const payload = {
            notas: alumnos.map((a) => ({
                alumno_id: a.id,
                periodo_id: periodoId,
                parcial: parseFloat(notas[a.id]?.[`b${periodoId}_parcial`]) || 0,
            })),
        };

        try {
            // Cambia la URL para que apunte al backend en el puerto correcto
            const response = await axios.post(`http://localhost:5000/api/materias/${materiaId}/notas`, payload);
            alert('✅ Notas registradas con éxito');
            navigate(-1);  // Redirige al usuario a la pantalla anterior
        } catch (error) {
            console.error('❌ Error al registrar notas:', error);
            alert('❌ Hubo un error al registrar las notas');
        }
    };



    return (
        <div className="p-4 max-w-2xl mx-auto">
            <h2 className="text-xl font-semibold text-blue-600 mb-4">Registrar Notas</h2>

            {/* Campo para la fecha */}
            <div className="mb-4">
                <label className="block mb-1 text-sm font-medium text-gray-700">Fecha</label>
                <input
                    type="date"
                    className="w-full border rounded px-3 py-2"
                    value={fecha}
                    onChange={(e) => setFecha(e.target.value)}
                />
            </div>

            {/* Campo para seleccionar el bimestre */}
            <div className="mb-4">
                <label className="block mb-1 text-sm font-medium text-gray-700">Periodo (Bimestre)</label>
                <select
                    className="w-full border rounded px-3 py-2"
                    value={periodoId}
                    onChange={(e) => setPeriodoId(Number(e.target.value))}
                >
                    <option value={1}>1er Bimestre</option>
                    <option value={2}>2do Bimestre</option>
                    <option value={3}>3er Bimestre</option>
                    <option value={4}>4to Bimestre</option>
                </select>
            </div>

            {/* Lista de alumnos y sus notas */}
            <h4 className="text-md font-semibold mb-2">Notas por Alumno</h4>
            <ul className="mb-4 space-y-4">
                {alumnos.length > 0 ? (
                    alumnos.map((a) => (
                        <li key={a.id} className="border p-4 rounded bg-gray-50">
                            <p className="font-medium mb-2">{a.nombre_completo}</p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <input
                                    type="number"
                                    placeholder="Nota del Parcial"
                                    className="border rounded px-3 py-1"
                                    value={notas[a.id]?.[`b${periodoId}_parcial`] || ''}
                                    onChange={(e) => handleNotaChange(a.id, periodoId, e.target.value)}
                                />
                            </div>
                        </li>
                    ))
                ) : (
                    <p>No hay alumnos registrados en esta materia.</p>
                )}
            </ul>

            {/* Botones para guardar o cancelar */}
            <div className="flex justify-between">
                <button
                    onClick={() => navigate(-1)}
                    className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
                >
                    ⬅️ Cancelar
                </button>
                <button
                    onClick={handleGuardar}
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                    💾 Guardar Notas
                </button>
            </div>
        </div>
    );
};

export default RegistroNotasMateria;

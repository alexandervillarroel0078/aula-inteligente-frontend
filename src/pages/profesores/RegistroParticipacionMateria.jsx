import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { registrarParticipacionMateria } from '../../services/profesorService';
import axios from 'axios';

const RegistroParticipacionMateria = () => {
    const { materiaId, profesorId } = useParams();
    const navigate = useNavigate();

    const [alumnos, setAlumnos] = useState([]);
    const [fecha, setFecha] = useState('');
    const [periodoId, setPeriodoId] = useState(1);
    const [participaciones, setParticipaciones] = useState({});

    // Simulación de alumnos para pruebas
    useEffect(() => {
        const fetchAlumnos = async () => {
            try {
                // Asegúrate de usar la URL correcta para el backend
                const response = await axios.get(`http://localhost:5000/api/materias/${materiaId}/estudiantes`);

                // Aquí puedes ver la estructura completa de los datos
                console.log(response.data);  // Para revisar cómo es la respuesta

                // Si la respuesta tiene la propiedad 'estudiantes', la usamos
                if (response.data && response.data.estudiantes) {
                    setAlumnos(response.data.estudiantes);  // Establecer la lista de estudiantes
                } else {
                    console.error('❌ No se encontraron estudiantes en la respuesta.');
                }
            } catch (error) {
                console.error('❌ Error al obtener los estudiantes:', error);  // Mostrar mensaje de error
            }
        };

        if (materiaId) fetchAlumnos();  // Llamar a la función si materiaId está disponible
    }, [materiaId]);

const fetchAlumnos = async () => {
   try {
      const response = await axios.get(`http://localhost:5000/api/materias/${materiaId}/estudiantes`);
      console.log(response.data); // Verificar que los datos de alumnos estén llegando correctamente
      setAlumnos(response.data.estudiantes);
   } catch (error) {
      console.error('❌ Error al obtener los estudiantes:', error);
   }
};

    const handlePuntajeChange = (alumnoId, value) => {
        setParticipaciones((prev) => ({
            ...prev,
            [alumnoId]: value,
        }));
    };

    const handleGuardar = async () => {
        const payload = {
            fecha,
            periodo_id: periodoId,
            participaciones: alumnos.map((a) => ({
                alumno_id: a.id,
                puntaje: participaciones[a.id] || 0,  // 0 si no tiene puntaje
            })),
        };

        // Validar que al menos un alumno haya marcado un puntaje
        const algunoParticipo = payload.participaciones.some((a) => a.puntaje > 0);

        if (!algunoParticipo) {
            alert('⚠️ Debes marcar al menos un alumno como participante.');
            return;
        }

        try {
            await registrarParticipacionMateria(materiaId, payload);
            alert('✅ Participaciones registradas correctamente');
            navigate(-1);  // Volver a la página anterior
        } catch (error) {
            alert('❌ Error al registrar participaciones. Intenta nuevamente.');
        }
    };

    return (
        <div className="p-4 max-w-2xl mx-auto">
            <h2 className="text-xl font-semibold text-blue-600 mb-4">Registrar Participación</h2>

            {/* Fecha de la clase */}
            <div className="mb-4">
                <label className="block mb-1 text-sm font-medium text-gray-700">Fecha de la clase</label>
                <input
                    type="date"
                    className="w-full border rounded px-3 py-2"
                    value={fecha}
                    onChange={(e) => setFecha(e.target.value)}
                />
            </div>

            {/* Periodo (Bimestre) */}
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

            {/* Lista de alumnos */}
            <h4 className="text-md font-semibold mb-2">Alumnos</h4>
            <ul className="mb-4 space-y-2">
                {alumnos.map((a) => (
                    <li key={a.id} className="flex items-center justify-between border-b pb-2">
                        <span>{<span>{a.nombre_completo}</span>
}</span>
                        <label className="inline-flex items-center">
                            <input
                                type="number"
                                className="mr-2 w-24 p-2 border rounded"
                                placeholder="Puntaje"
                                value={participaciones[a.id] || ''}
                                onChange={(e) => handlePuntajeChange(a.id, e.target.value)}
                                min="0"
                                max="100"
                            />
                            Participó
                        </label>
                    </li>
                ))}
            </ul>

            {/* Botones */}
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
                    💾 Guardar Participaciones
                </button>
            </div>
        </div>
    );
};

export default RegistroParticipacionMateria;

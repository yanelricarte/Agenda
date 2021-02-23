import React, { Fragment, useState } from 'react';
import uuid from 'uuid/v4';
import PropTypes from 'prop-types';

const Formulario = ({crearEvento}) => {

    // Crear State de Evento
    const [evento, actualizarEvento] = useState({
        titulo: '',
        asunto: '',
        fecha: '',
        hora: '',
        descripcion: ''
    });
    const [ error, actualizarError ] = useState(false)

    // Función que se ejecuta cada que el usuario escribe en un input
    const actualizarState = e => {
        actualizarEvento({
            ...evento,
            [e.target.name]: e.target.value 
        })
    }

    // Extraer los valores
    const { titulo, asunto, fecha, hora, descripcion } = evento;

    // Cuando el usuario presiona agregar evento
    const submitEvento = e => {
        e.preventDefault();

        // Validar
        if(titulo.trim() === '' || asunto.trim() === ''  || fecha.trim() === ''  || hora.trim() === ''  || descripcion.trim() === '' ){
            actualizarError(true);
            return;
        }
        // Eliminar el mensaje previo 
        actualizarError(false);

        // Asignar un ID
        evento.id = uuid();

        // Crear la evento
        crearEvento(evento);

        // Reiniciar el form
        actualizarEvento({
            titulo: '',
            asunto: '',
            fecha: '',
            hora: '',
            descripcion: ''
        })
    }

    return ( 
        <Fragment>
            <h2>Agendar evento</h2>

            { error ? <p className="alerta-error">Todos los campos son obligatorios</p>     : null }

            <form
                onSubmit={submitEvento}
            >
                <label>Titulo</label>
                <input 
                    type="text"
                    name="titulo"
                    className="u-full-width"
                    placeholder="Título"
                    onChange={actualizarState}
                    value={titulo}
                />

                <label>Asunto Principal</label>
                <input 
                    type="text"
                    name="asunto"
                    className="u-full-width"
                    placeholder="Asunto Principal"
                    onChange={actualizarState}
                    value={asunto}
                />

                <label>Fecha</label>
                <input 
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={fecha}
                />

                <label>Hora</label>
                <input 
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={hora}
                />

                <label>Descripcion</label>
                <textarea
                    className="u-full-width"
                    name="descripcion"
                    onChange={actualizarState}
                    value={descripcion}
                ></textarea>

                <button
                    type="submit"
                    className="u-full-width button-primary"
                >Agregar evento</button>
            </form>
        </Fragment>
    );
}

Formulario.propTypes = {
    crearEvento: PropTypes.func.isRequired
}
 
export default Formulario;
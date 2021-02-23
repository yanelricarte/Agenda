import React from 'react';
import PropTypes from 'prop-types';


const Evento = ({evento, eliminarEvento}) => ( 
    <div className="evento">
        <p>Título: <span>{evento.titulo}</span> </p>
        <p>Asunto Principal: <span>{evento.asunto}</span> </p>
        <p>Fecha: <span>{evento.fecha}</span> </p>
        <p>Hora: <span>{evento.hora}</span> </p>
        <p>Descripción: <span>{evento.descripcion}</span> </p>

        <button
            className="button eliminar u-full-width"
            onClick={ () => eliminarEvento(evento.id)  }
        >Eliminar &times;</button>
    </div>
);

Evento.propTypes = {
    evento: PropTypes.object.isRequired,
    eliminarEvento: PropTypes.func.isRequired
}
 
export default Evento;
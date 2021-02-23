import React, { Fragment, useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import Evento from './components/Evento';

function App() {

  // eventos en Local Storage
  let eventosIniciales = JSON.parse(localStorage.getItem('eventos'));
  if(!eventosIniciales) {
    eventosIniciales = [];
  }

  // Arreglo de eventos
  const [eventos, guardarEventos] = useState(eventosIniciales);

  // Use Effect para realizar ciertas operaciones cuando el state cambia
  useEffect( () => {
      let eventosIniciales = JSON.parse(localStorage.getItem('eventos'));

      if(eventosIniciales) {
        localStorage.setItem('eventos', JSON.stringify(eventos))
      } else {
        localStorage.setItem('eventos', JSON.stringify([]));
      }
  }, [eventos] );

  // Función que tome las eventos actuales y agregue la nueva
  const crearEvento = evento => {
    guardarEventos([ ...eventos, evento ]);
  }

  // Función que elimina una evento por su id
  const eliminarEvento = id => {
     const nuevosEventos = eventos.filter(evento => evento.id !== id );
     guardarEventos(nuevosEventos);
  }

  // Mensaje condicional
  const titulo = eventos.length === 0 ? 'No hay eventos' : 'Administra tus eventos';

  return (
    <Fragment>
      <h1> Eventos agendados</h1>

      <div className="container">
        <div className="row">
          <div className="one-half column">
              <Formulario 
                crearEvento={crearEvento}
              />
          </div>
          <div className="one-half column">
              <h2>{titulo}</h2>
              {eventos.map(evento => (
                <Evento
                  key={evento.id}
                  evento={evento}
                  eliminarEvento={eliminarEvento}
                />
              ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;

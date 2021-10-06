import React from 'react';
import '../../css/Test.css';

export default function Test() {
  return (
    <>
    <div className="test-body">
        <h1 className="titulo">Respondé las preguntas sinceramente</h1>
        {/*mejorar interfaz. Agrupar las preguntas como en el */}
        <form className="test" action="" method="post" id="quiz">
              {/*1st question*/}
              <ol>
              <li> En mi grupo de amigos, al momento de organizar alguna actividad prefiero vincularme al grupo que:</li>

              <div>
                  <input type="radio" name="pregunta-1-rta" id="pregunta-1-rta-A" value="A" />
                  <label for="pregunta-1-rta-A"> Se ocupa de recolectar y administrar el dinero. </label>
              </div>

              <div>
                  <input type="radio" name="pregunta-1-rta" id="pregunta-1-rta-B" value="B" />
                  <label for="pregunta-1-rta-B"> Se encarga de realizar las invitaciones y confirmar la asistencia y participación de todos los convocados.</label>
              </div>

              <div>
                  <input type="radio" name="pregunta-1-rta" id="pregunta-1-rta-C" value="C" />
                  <label for="pregunta-1-rta-C"> Se encarga de publicar en las Redes Sociales las fotos y las anécdotas de la actividad.</label>
              </div>

              <div>
                  <input type="radio" name="pregunta-1-rta" id="pregunta-1-rta-D" value="D" />
                  <label for="pregunta-1-rta-D"> Se ocupa de planear las actividades del evento para que todo salga bien.</label>
              </div>
              {/*2nd question*/}
              <li>De las actividades siguientes la que más me gusta hacer es:</li>

              <div>
                  <input type="radio" name="pregunta-1-rta" id="pregunta-1-rta-A" value="A" />
                  <label for="pregunta-1-rta-A"> Conocer gente y conversar con ellos.</label>
              </div>

              <div>
                  <input type="radio" name="pregunta-1-rta" id="pregunta-1-rta-B" value="B" />
                  <label for="pregunta-1-rta-B"> Pasar mi tiempo programando.</label>
              </div>

              <div>
                  <input type="radio" name="pregunta-1-rta" id="pregunta-1-rta-C" value="C" />
                  <label for="pregunta-1-rta-C"> Hacer ejercicio físico y practicar algún deporte.</label>
              </div>

              <div>
                  <input type="radio" name="pregunta-1-rta" id="pregunta-1-rta-D" value="D" />
                  <label for="pregunta-1-rta-D"> Realizar reparaciones de objetos y aparatos mecánicos.</label>
              </div>
              {/*3rd question*/}
              <li>Dentro las personas que más admiro, principalmente son o han sido:</li>

              <div>
                  <input type="radio" name="pregunta-1-rta" id="pregunta-1-rta-A" value="A" />
                  <label for="pregunta-1-rta-A"> Programadores.</label>
              </div>

              <div>
                  <input type="radio" name="pregunta-1-rta" id="pregunta-1-rta-B" value="B" />
                  <label for="pregunta-1-rta-B"> Científicos.</label>
              </div>

              <div>
                  <input type="radio" name="pregunta-1-rta" id="pregunta-1-rta-C" value="C" />
                  <label for="pregunta-1-rta-C"> Inventores.</label>
              </div>

              <div>
                  <input type="radio" name="pregunta-1-rta" id="pregunta-1-rta-D" value="D" />
                  <label for="pregunta-1-rta-D"> Empresarios.</label>
              </div>
            </ol>
              <button className='test-btn' type='submit'>
                Enviar
              </button>
              
        </form>
    </div>
    </>
  );
}

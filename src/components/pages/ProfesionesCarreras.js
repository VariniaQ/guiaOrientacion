import React from 'react';
import '../../css/ProfesionesCarreras.css';
import sistemas from '../../images/sistemas.jpg';
import IconCards from '../cards/IconCards';

function ProfesionesCarreras() {
    return (
         <>
            <div className="carreras">
               {/*imagen*/}
               <div className="contenedor-carrera-img">
                  <img src={sistemas} alt="sistemas"/>
               </div>
               {/*titulo*/}
               <h1>Ingeniería en Sistemas</h1>
               {/*descripcion*/}
               <p className="descripcion-carrera">Se encarga de resolver problemas relacionados al control de procesos industriales, 
               sistemas electrónicos de potencia, instrumentación y control, y la transformación eléctrica.</p>
               {/*lista de universidades
               <div className="universidades-logos">
                  <a className="logo" href="https://utn.edu.ar/es/estudiar-utn?tipo_busqueda=carreras&id_tipos_carreras=3&id_seleccion=67" rel="noreferrer">
                     <img src={utn} alt="UTN"/>
                  </a>
                  <a className="logo" href="https://utn.edu.ar/es/estudiar-utn?tipo_busqueda=carreras&id_tipos_carreras=3&id_seleccion=67" rel="noreferrer">
                     <img src={itba} alt="ITBA"/>
                  </a>
                  <a className="logo" href="https://www.ingenieria.uba.ar/grado/carreras/lic-en-analisis-de-sistemas" rel="noreferrer">
                     <img src={uba} alt="UBA"/>
                  </a>
               </div>
                  */}     
               {/*<Link to='/' className='boton-contenido'>
                  <img src={logo} className="adjust-icon" alt="logo-busqueda"></img>Contenido
               </Link>*/}
               <IconCards />
            </div>
         </>
    );
}

export default ProfesionesCarreras;

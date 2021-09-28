import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/ProfesionesCarreras.css';
import sistemas from '../../images/sistemas.jpg';
import utn from '../../images/utn.png';
import itba from '../../images/itba.png';
import uba from '../../images/uba.png';
import logo from '../../images/search.png';

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
               {/*lista de universidades*/}
               <div className="universidades-logos">
                  <img className="logo" src={utn} alt="UTN"/>
                  <div className="linea-horizontal"></div> {/*crea una linea horizontal*/}
                  <img className="logo" src={itba} alt="ITBA"/>
                  <img className="logo" src={uba} alt="UBA"/>
               </div>
      
                              
               {/*<Link to='/' className='boton-contenido'>
                  <img src={logo} className="adjust-icon" alt="logo-busqueda"></img>Contenido
               </Link>*/}
            </div>
         </>
    );
}

export default ProfesionesCarreras;

import React from 'react';
import '../../css/ProfesionesCarreras.css';
import sistemas from '../../images/sistemas.jpg';
import utn from '../../images/utn.png';
import itba from '../../images/itba.png';
import uba from '../../images/uba.png';

function ProfesionesCarreras() {
    return (
         <>
            <div className="carreras">
               <div className="contenedor-carrera-img">
                  <img src={sistemas} alt="sistemas"/>
               </div>
               <h1 className="" >Ingeniería en Sistemas</h1>
               <p className="descripcion-carrera">Se encarga de resolver problemas relacionados al control de procesos industriales, 
               sistemas electrónicos de potencia, instrumentación y control, y la transformación eléctrica.</p>
               <h2>Universidades</h2>
               <img className="universidad-logo" src={utn} alt="UTN"/>
               <p>Universidad Técnica Nacional</p>
               <button>Contenidos</button>
               <img className="universidad-logo" src={itba} alt="ITBA"/>
               <p>Instituto Tecnológico de Buenos Aires</p>
               <button>Contenidos</button>
               <img className="universidad-logo" src={uba} alt="UBA"/>
               <p>Universidad de Buenos Aires</p>
               <button>Contenidos</button>
            </div>
         </>
    );
}

export default ProfesionesCarreras;

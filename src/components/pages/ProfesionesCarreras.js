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
               <h1>Ingeniería en Sistemas</h1>
               <img src={sistemas} alt="sistemas"/>
               <p>Se encarga de resolver problemas relacionados al control de procesos industriales, 
               sistemas electrónicos de potencia, instrumentación y control, y la transformación eléctrica.</p>
               <h2>Universidades</h2>
               <img class="img_universidad" src={utn} alt="UTN"/>
               <p>Universidad Técnica Nacional</p>
               <button>Contenidos</button>
               <img class="img_universidades" src={itba} alt="ITBA"/>
               <p>Instituto Tecnológico de Buenos Aires</p>
               <button>Contenidos</button>
               <img class="img_universidades" src={uba} alt="UBA"/>
               <p>Universidad de Buenos Aires</p>
               <button>Contenidos</button>
            </div>
         </>
    );
}

export default ProfesionesCarreras;

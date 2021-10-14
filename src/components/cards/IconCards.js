import React from 'react';
import '../../css/IconCards.css';
import CardIconItem from './CardItemUniversidades';
import utn from '../../images/utn-logo.png';
import uba from '../../images/uba.png';

function Cards() {
  return (
    <div className='cards'>
      <h1>Universidades</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardIconItem
              src={utn}
              text='Universidad Técnica Nacional'
              label='UTN'
              href="https://utn.edu.ar/es/estudiar-utn?tipo_busqueda=carreras&id_tipos_carreras=3&id_seleccion=67"
            />
            <CardIconItem
              src={uba}
              text='Universidad de Buenos Aires'
              label='UBA'
              path='/test'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
import React from 'react';
import '../../css/Cards.css';
import CardItem from './CardItemProfesiones';
import sistemas from '../../images/sistemas.jpg';
import electronica from '../../images/electronica2.jpg';
import hardware from '../../images/hardware.jpg';

function Cards() {
  return (
    <div className='cards'>
      <h1>Carreras</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={sistemas}
              text='Ingeniería en Sistemas'
              path='/carreras'
            />
            <CardItem
              src={electronica}
              text='Ingeniería en Electrónica'
              path='/carreras'/*editar luego*/
            />
            <CardItem
              src={hardware}
              text='Ingeniería en Hardware'
              path='/carreras' /*editar luego*/
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;

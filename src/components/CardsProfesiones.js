import React from 'react';
import './Cards.css';
import CardItem from './CardItemProfesiones';
import sistemas from '../images/sistemas.jpg';
import electronica from '../images/electronica2.jpg';
import hardware from '../images/hardware.jpg';

function Cards() {
  return (
    <div className='cards'>
      <h1>Carreras</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
            /*NO SE PRODUCE EL EFECTO DE ANIMACIÓN, CORREGIR*/
              src={sistemas}
              text='Ingenieria en Sistemas'
              path='/test'
            />
            <CardItem
              src={electronica}
              text='Ingenieria en Electrónica'
              path='/test'
            />
            <CardItem
              src={hardware}
              text='Ingenieria en Hardware'
              path='/test'
            />
          </ul>
          
        </div>
      </div>
    </div>
  );
}

export default Cards;

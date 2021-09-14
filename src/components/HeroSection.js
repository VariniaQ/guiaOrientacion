import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <h1>Tu futuro está en tus manos</h1>
      <p>¿Estás listo?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--home'
          buttonSize='btn--large'
        >
          COMIENZA
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;

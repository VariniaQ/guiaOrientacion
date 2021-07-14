import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import video from './video-1.mp4';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src={video} autoPlay loop muted />
      <h1>Tu futuro está en tus manos</h1>
      <p>¿Estás listo?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          COMIENZA
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;

import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import logo from '../images/logo20.png';

function Footer() {
  return (
    <div className='footer-container'>
      
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Sobre Nosotros</h2>
            <Link to='/'>¿Quiénes somos?</Link>
            <Link to='/'>Términos de Servicio</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Contáctanos</h2>
            <Link to='/'>Contacto</Link>
            <Link to='/'>Soporte</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          
          <div className='footer-link-items'>
            <h2>Redes Sociales</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/home' className='social-logo'>
              <img src={logo} className="adjustIcon" alt="logo"></img>
              Guía de Orientación Profesional
            </Link>
          </div>
          <small className='website-rights'>Guía de Orientación Profesional © 2021</small>
          <div className='social-icons'>
            
            <Link
              className='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i className='fab fa-instagram' />
            </Link>
            
            <Link
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i className='fab fa-twitter' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i className='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;

import React from 'react';
//import SignUp from './FormSignUp.js';
import useForm from './useForm';
import './Form.css';
import validate from './validateInfo.js';

const FormLogin = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className='form-content-right'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1>
          Inicia Sesión
        </h1>
        <div className='form-inputs'>
          <label className='form-label'>Usuario</label>
          <input
            className='form-input'
            type='text'
            name='username'
            placeholder='Nombre de usuario'
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        
        <div className='form-inputs'>
          <label className='form-label'>Contraseña</label>
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Contraseña'
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        
        <button className='form-input-btn' type='submit'>
          Iniciar Sesión
        </button>
        <span className='form-input-login'>
          ¿No tienes una cuenta? Ingresa <a href="./pages/SignUp">aquí</a>
        </span>
      </form>
    </div>
  );
};

export default FormLogin;
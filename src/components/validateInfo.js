export default function validateInfo(values) {
    let errors = {};
  
    if (!values.username.trim()) {
      errors.username = 'Nombre de usuario obligatorio';
    }
   
    if (!values.email) {
      errors.email = 'Email obligatorio';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email inválido';
    }
    if (!values.password) {
      errors.password = '¡Contraseña obligatoria!';
    } else if (values.password.length < 6) {
      errors.password = 'La contraseña tiene que tener al menos 6 caracteres.';
    }
  
    if (!values.password2) {
      errors.password2 = '¡Confirmación de contraseña obligatoria!';
    } else if (values.password2 !== values.password) {
      errors.password2 = 'Las contraseñas no coinciden.';
    }
    return errors;
  }
import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Test from './components/pages/Test';
import Profesiones from './components/pages/Profesiones';
import SignUp from './components/pages/SignUp';
import ProfesionesCarreras from './components/ProfesionesCarreras';
import Footer from './components/Footer';
//TODO hacer que la pagina funcione al cargar (anotar porque no funciona) - no funcionaba porque habia un error en la direccion de la página.GitHub redireccionaba el home a guiaOrientacion/ mientras que yo le indicaba que debia ser en /
//hacer la página del test

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/guiaOrientacion' component={Home} />
          <Route path='/test' component={Test} />
          <Route path='/profesiones' component={Profesiones} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/carreras' component={ProfesionesCarreras} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;

/*
	 Guia Orientación Vocacional
	 by Varinia Quisbert
	 https://variniaq.github.io/guiaOrientacion/
*/

import React from 'react';
import Navbar from './components/utiles/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Test from './components/pages/Test';
import Profesiones from './components/pages/Profesiones';
import SignUp from './components/pages/SignUp';
import ProfesionesCarreras from './components/pages/ProfesionesCarreras';
import Footer from './components/utiles/Footer';

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

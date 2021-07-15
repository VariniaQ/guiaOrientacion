import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Test from './components/pages/Test';
import Profesiones from './components/pages/Profesiones';
import LogIn from './components/pages/LogIn';

//TODO hacer que la pagina funcione al cargar (anotar porque no funciona)
//hacer la página del test
//hacer la pagina de profesiones
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/test' component={Test} />
          <Route path='/profesiones' component={Profesiones} />
          <Route path='/log-in' component={LogIn} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

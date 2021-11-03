import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Servicios from './components/pages/Servicios';
import Productos from './components/pages/Productos';
import Registro from './components/pages/Registro';
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/services" exact component={Servicios} />
          <Route path="/products" exact component={Productos} />
          <Route path="/Sing-up" exact component={Registro} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

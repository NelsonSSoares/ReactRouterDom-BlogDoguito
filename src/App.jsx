import React from 'react';
import './assets/css/base/base.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './paginas/Home';
import Sobre from './paginas/Sobre';
import PaginaError404 from './paginas/PaginaError404';

function App() {

  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>

          <Route path='/sobre'>
            <Sobre />
          </Route>

          <Route>
            <PaginaError404 />
          </Route>

        </Switch>
      </Router>
    </>
  )
}

export default App

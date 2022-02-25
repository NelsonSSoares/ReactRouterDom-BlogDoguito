import React from 'react';
import './assets/css/base/base.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './paginas/Home';
import Sobre from './paginas/Sobre';
import PaginaError404 from './paginas/PaginaError404';
import Navbar from './components/Navbar';
import Post from './paginas/Post'
function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>

          <Route path='/sobre'>
            <Sobre />
          </Route>

          <Route path='/posts/:id'>
            <Post />
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

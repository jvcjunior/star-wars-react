import React from 'react';
import { Route, Link } from 'react-router-dom'
import Home from '../home'
import Intro from '../intro'

const App = () => (
  <div>
    <header>
      HEADER
    </header>
    <main>
      <Route exact path="/" component={Intro} />
      <Route exact path="/home" component={Home} />
    </main>
  </div>
)

export default App
//https://dribbble.com/Eray
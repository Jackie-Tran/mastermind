import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom'

// Pages 
import MenuPage from './pages/MenuPage'
import InstructionPage from './pages/InstructionPage'
import GamePage from './pages/GamePage'
import NotFoundPage from './pages/404Page'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MenuPage} />
        <Route exact path="/instruction" component={InstructionPage} />
        <Route exact path="/game" component={GamePage} />
        <Route exact path="/404" component={NotFoundPage} />
        <Redirect to="/404"/>
      </Switch>
    </Router>
  );
}

export default App;

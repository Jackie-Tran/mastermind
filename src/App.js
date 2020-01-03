import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

// Pages 
import MenuPage from './pages/MenuPage'
import RulesPage from './pages/RulesPage'
import GamePage from './pages/GamePage'
import NotFoundPage from './pages/404Page'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MenuPage} />
        <Route exact path="/rules" component={RulesPage} />
        <Route exact path="/game" component={GamePage} />
        <Route exact path="/404" component={NotFoundPage} />
        <Redirect to="/404" />
      </Switch>
    </Router>

  );
}

export default App;

import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Home from './pages/Home/'
import FourOhFour from './pages/404'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component = {Home} />
          <Route path='*' component = {FourOhFour} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

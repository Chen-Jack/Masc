import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home/'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import CreatePost from './pages/CreatePost'
import FourOhFour from './pages/404'

function App () {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/signup' component={Signup} />
          <Route path='/dashboard' component={Dashboard} />
          <Route path='/create-post' component={CreatePost} />
          <Route path='*' component={FourOhFour} />
        </Switch>
      </Router>
    </div>
  )
}

export default App

import React from 'react';
import '../styles/App.scss';
import NavBar from './NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Profil from './Profile';
import AppLogin from './AppLogin';

function App() {
  return (
    <>
      <Router>
      <NavBar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/profil' component={Profil} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
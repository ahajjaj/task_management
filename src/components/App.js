import React from 'react';
import '../styles/App.scss';
import NavBar from './NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Profil from './Profile';
import Messages from './Messages';

function App() {
  return (
    <>
      <Router>
      <NavBar />
        <Switch>
          <Route path='/home' exact component={Home} />
          <Route path='/profil' component={Profil} />
          <Route path='/messages' component={Messages} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import HomePage from './pages/Home/Home';
import UserDetail from './pages/UserDetail/UserDetail';
import About from './pages/About/About';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/users/:username" component={UserDetail} />
        <Route path="/about" component={About} />
      </Switch>
    </div>
  );
}

export default App;

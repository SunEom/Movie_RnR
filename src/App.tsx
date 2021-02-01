import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Create from './screens/Create';
import Home from './screens/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/create">
          <Create />
        </Route>
      </HashRouter>
    </div>
  );
}

export default App;

import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header';
import Create from './screens/Create';
import Home from './screens/Home';
import Login from './screens/Login';
import Join from './screens/Join';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/create">
          <Create />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/join">
          <Join />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;

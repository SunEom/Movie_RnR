import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, useParams } from 'react-router-dom';
import Header from './container/Header';
import Create from './screens/Create';
import Home from './screens/Home';
import Login from './screens/Login';
import Join from './screens/Join';
import Detail from './screens/Detail';
import Find from './screens/Find';
import store from './store';
import './App.css';
import axios from 'axios';

function App() {
  const reloading = () => {
    axios
      .get('http://localhost:8000/auth/login', { withCredentials: true })
      .then((response) => store.dispatch({ type: 'LOGIN', user: response }));
  };

  const DetailView = () => {
    interface ParamTypes {
      id: string;
    }
    const { id } = useParams<ParamTypes>();

    return <Detail id={id} />;
  };

  const [user, setUser] = useState(store.getState().user);
  const login = () => {
    const user = store.getState().user;
    setUser(user);
  };

  const logout = async () => {
    setUser(null);
  };

  store.subscribe(login);
  store.subscribe(logout);
  useEffect(() => {
    reloading();
  }, []);

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
        <Route exact path="/post/:id">
          <DetailView />
        </Route>
        <Route exact path="/find">
          <Find />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;

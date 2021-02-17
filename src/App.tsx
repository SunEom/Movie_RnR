import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, useParams } from 'react-router-dom';
import Header from './container/Header';
import Create from './screens/Create';
import Home from './screens/Home';
import Login from './screens/Login';
import Join from './screens/Join';
import Detail from './screens/Detail';
import User from './screens/User';
import Profile from './screens/Profile';
import Search from './screens/Search';
import store from './store';
import './App.css';
import axios from 'axios';

function App() {
  const [loginCheck, setLoginCheck] = useState(false);
  const reloading = () => {
    axios
      .get('http://localhost:8000/auth/login', { withCredentials: true })
      .then(async (response) => {
        if (!response.data.data.user_id) {
          setLoginCheck(true);
        } else {
          await store.dispatch({ type: 'LOGIN', user: response.data.data });
          setLoginCheck(true);
        }
      })
      .catch((err) => setLoginCheck(true));
  };

  useEffect(() => {
    reloading();
  }, []);

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

  return (
    <div className="App">
      {loginCheck ? (
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
          <Route exact path="/profile">
            <Profile />
          </Route>
          <Route exact path="/profile/user/:id">
            <User />
          </Route>
          <Route exact path="/search/:keyword">
            <Search />
          </Route>
        </BrowserRouter>
      ) : null}
    </div>
  );
}

export default App;

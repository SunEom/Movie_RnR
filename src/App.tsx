import React, { useState } from 'react';
import { BrowserRouter, Route, useParams } from 'react-router-dom';
import Header from './components/Header';
import Create from './screens/Create';
import Home from './screens/Home';
import Login from './screens/Login';
import Join from './screens/Join';
import Detail from './screens/Detail';
import Find from './screens/Find';
import store from './store';
import './App.css';

function App() {
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
  store.subscribe(login);

  return (
    <div className="App">
      <BrowserRouter>
        <Header user={user} />
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

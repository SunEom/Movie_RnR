import React, { useEffect, useState } from 'react';
import LoginPresenter from './LoginPresenter';
import axios from 'axios';
import store from '../../store';
import { useHistory } from 'react-router';

type loginFormat = {
  id: string;
  password: string;
};

const LoginContainer = () => {
  const history = useHistory();
  const [id, setId] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  useEffect(() => {
    if (store.getState().user) {
      history.push({
        pathname: '/login',
      });
    }
  }, [history]);

  const onSubmit = async (e: any) => {
    e.preventDefault();

    const data: loginFormat = {
      id,
      password,
    };

    axios
      .post(`${process.env.REACT_APP_SERVER_URL}/auth/login`, { ...data }, { withCredentials: true })
      .then((response) => {
        store.dispatch({ type: 'LOGIN', user: response.data.data });
        history.push({
          pathname: `${process.env.REACT_APP_SERVER_URL}/`,
        });
      })
      .catch((err) => {
        if (err.response.data.error === 'Incorrect id') {
          setPassword('');
          alert("Can't find a user using this ID !");
        } else if (err.response.data.error === 'Incorrect password') {
          setPassword('');
          alert('Please check password again !');
        }
      });
  };

  const onChange = (e: any) => {
    switch (e.currentTarget.id) {
      case 'id': {
        setId(e.currentTarget.value);
        break;
      }
      case 'password': {
        setPassword(e.currentTarget.value);
        break;
      }
    }
  };

  useEffect(() => {
    return () => {
      setId('');
      setPassword('');
    };
  }, []);
  return <LoginPresenter onSubmit={onSubmit} onChange={onChange} id={id} password={password} />;
};

export default LoginContainer;

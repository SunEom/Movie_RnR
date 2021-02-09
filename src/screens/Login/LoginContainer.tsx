import React, { useEffect, useState } from 'react';
import LoginPresenter from './LoginPresenter';
import axios from 'axios';
import store from '../../store';
import { useHistory } from 'react-router';

type loginFormat = {
  id: string;
  password: string;
};

export default () => {
  const history = useHistory();
  const [id, setId] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  useEffect(() => {
    if (store.getState().user) {
      history.push({
        pathname: '/login',
      });
    }
  }, []);

  const onSubmit = async (e: any) => {
    e.preventDefault();

    const data: loginFormat = {
      id,
      password,
    };

    axios
      .post('http://localhost:8000/auth/login', { ...data }, { withCredentials: true })
      .then((response) => {
        store.dispatch({ type: 'LOGIN', user: response.data });

        history.push({
          pathname: '/',
        });
      })
      .catch((err) => console.error(err));
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
  return <LoginPresenter onSubmit={onSubmit} onChange={onChange} />;
};

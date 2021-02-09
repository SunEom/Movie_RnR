import React, { useState } from 'react';
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

  const onSubmit = async (e: any) => {
    e.preventDefault();

    const data: loginFormat = {
      id,
      password,
    };

    console.log(data);
    await axios
      .post('http://localhost:8000/auth/login', { ...data, withCredentials: true })
      .then((response) => {
        if (response.data.error) {
          return console.error(response.data.error);
        }
        store.dispatch({ type: 'LOGIN', user: response });
        history.push({
          pathname: '/',
        });
      })
      .catch((err) => console.error(err));
  };

  const onChange = (e: any) => {
    console.log(e.currentTarget);
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

  return <LoginPresenter onSubmit={onSubmit} onChange={onChange} />;
};

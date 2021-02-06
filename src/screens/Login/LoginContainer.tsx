import React, { useState } from 'react';
import LoginPresenter from './LoginPresenter';
import axios from 'axios';

type loginFormat = {
  id: string;
  password: string;
};

export default () => {
  const [id, setId] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const onSubmit = async (e: any) => {
    e.preventDefault();

    const data: loginFormat = {
      id,
      password,
    };

    await axios
      .post('http://localhost:8000/auth/login', data)
      .then(() => {
        window.location.href = '/';
      })
      .catch((err) => console.error(err));
  };

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
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

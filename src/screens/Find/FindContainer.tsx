import React, { useState } from 'react';
import FindPresenter from './FindPresenter';
import axios from 'axios';

type findFormat = {
  id: string;
  nickname: string;
};

type newPasswordFormat = {
  password: string;
  passwordCheck: string;
};

export default () => {
  const [id, setId] = useState<string>('');
  const [nickname, setNickname] = useState<string>('');
  const [checkUser, setCheckUser] = useState<boolean>(true);

  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');

  const onSubmit = async (e: any) => {
    e.preventDefault();

    const data: findFormat = {
      id,
      nickname,
    };

    await axios
      .post('http://localhost:8000/user/find', data)
      .then(() => {
        setCheckUser(true);
      })
      .catch((err) => console.error(err));
  };

  const onSecondSubmit = async (e: any) => {
    e.preventDefault();

    const data: newPasswordFormat = {
      password,
      passwordCheck,
    };

    await axios
      .post('http://localhost:8000/user/change', data)
      .then(() => {
        setId('');
        setNickname('');
        setCheckUser(false);
        setPassword('');
        setPasswordCheck('');
        window.location.href = '/login';
      })
      .catch((err) => console.error(err));
  };

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    switch (e.currentTarget.id) {
      case 'id': {
        setId(e.currentTarget.value);
        break;
      }
      case 'nickname': {
        setNickname(e.currentTarget.value);
        break;
      }
      case 'password': {
        setPassword(e.currentTarget.value);
        break;
      }
      case 'passwordCheck': {
        setPasswordCheck(e.currentTarget.value);
        break;
      }
    }
  };

  return <FindPresenter onSubmit={onSubmit} onChange={onChange} checkUser={checkUser} onSecondSubmit={onSecondSubmit} />;
};

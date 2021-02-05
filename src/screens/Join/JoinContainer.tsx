import React, { useState } from 'react';
import axios from 'axios';
import JoinPresenter from './JoinPresenter';

export default () => {
  const [id, setId] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [password_check, setPasswordCheck] = useState<string>('');
  const [nickname, setNickname] = useState<string>('');
  const [gender, setGender] = useState<'Man' | 'Woman'>('Man');

  type post = {
    id: string;
    password: string;
    nickname: string;
    gender: 'Man' | 'Woman';
  };

  const onSubmit = async (e: any) => {
    e.preventDefault();
    if (password !== password_check) {
      alert('Plase Check your passwords are same !');
      return;
    }

    const data: post = {
      id,
      password,
      nickname,
      gender,
    };

    await axios
      .post('http://localhost:8000/user', { ...data })
      .then(() => {
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
      case 'password': {
        setPassword(e.currentTarget.value);
        break;
      }
      case 'password_check': {
        setPasswordCheck(e.currentTarget.value);
        break;
      }
      case 'nickname': {
        setNickname(e.currentTarget.value);
        break;
      }
      case 'gender': {
        setGender(e.currentTarget.value as 'Man' | 'Woman');
        break;
      }
    }
  };

  return <JoinPresenter onSubmit={onSubmit} onChange={onChange} />;
};

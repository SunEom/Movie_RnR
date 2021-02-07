import React, { useState } from 'react';
import FindPresenter from './FindPresenter';
import axios from 'axios';

type findFormat = {
  id: string;
  nickname: string;
};

export default () => {
  const [id, setId] = useState<string>('');
  const [nickname, setNickname] = useState<string>('');
  const [checkUser, setCheckUser] = useState<boolean>(false);

  const onSubmit = async (e: any) => {
    e.preventDefault();

    const data: findFormat = {
      id,
      nickname,
    };

    await axios
      .post('http://localhost:8000/auth/find', data)
      .then(() => {
        setCheckUser(true);
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
    }
  };

  return <FindPresenter onSubmit={onSubmit} onChange={onChange} checkUser={checkUser} />;
};

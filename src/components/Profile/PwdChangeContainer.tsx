import React, { useState } from 'react';
import PwdChangePresenter from './PwdChangePresenter';
import store from '../../store';
import { useHistory } from 'react-router';
import axios from 'axios';

type PwdChangeContainerProps = {
  user: any;
  setMode: any;
};

const PwdChangeContainer = ({ user, setMode }: PwdChangeContainerProps) => {
  const history = useHistory();
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newPasswordCheck, setNewPasswordCheck] = useState('');

  const onSubmit = async (e: any) => {
    e.preventDefault();

    if (newPassword !== newPasswordCheck) {
      return alert('New Password and New Password Check should be same!');
    }

    const data = {
      password,
      newPassword,
      newPasswordCheck,
    };

    console.log(data);
    await axios
      .post('http://localhost:8000/user/password', data, { withCredentials: true })
      .then(async (response) => {
        alert('Updated Complete!');
        setMode('basic');
        document.querySelectorAll('.navbtn').forEach((btn, idx) => {
          if (idx === 0) {
            btn.setAttribute('class', 'navbtn text-sm p-2 w-full bg-indigo-900 text-white text-center rounded font-bold');
          } else {
            btn.setAttribute(
              'class',
              'navbtn text-sm p-2 bg-indigo-200 text-center rounded font-semibold hover:bg-indigo-700 hover:text-gray-200'
            );
          }
        });
        window.scrollTo(0, 0);
      })
      .catch((err) => console.error(err.response));
  };

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    switch (e.currentTarget.id) {
      case 'password': {
        setPassword(e.currentTarget.value);
        break;
      }
      case 'newPassword': {
        setNewPassword(e.currentTarget.value);
        break;
      }
      case 'newPasswordCheck': {
        setNewPasswordCheck(e.currentTarget.value);
        break;
      }
    }
  };
  return (
    <PwdChangePresenter
      user={user}
      password={password}
      newPassword={newPassword}
      newPasswordCheck={newPasswordCheck}
      onSubmit={onSubmit}
      onChange={onChange}
    />
  );
};

export default PwdChangeContainer;

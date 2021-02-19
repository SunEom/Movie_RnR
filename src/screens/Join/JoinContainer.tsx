import React, { useState } from 'react';
import axios from 'axios';
import JoinPresenter from './JoinPresenter';
import { useHistory } from 'react-router';
import store from '../../store';

const JoinContainer = () => {
  const history = useHistory();
  const [id, setId] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [password_check, setPasswordCheck] = useState<string>('');
  const [nickname, setNickname] = useState<string>('');
  const [gender, setGender] = useState<'Man' | 'Woman'>('Man');
  const [idConfirmation, setIdConfirmation] = useState(false);
  const [nickConfirmation, setNickConfirmation] = useState(false);

  if (store.getState().user) {
    history.push({
      pathname: '/',
    });
  }

  type user = {
    id: string;
    password: string;
    nickname: string;
    gender: 'Man' | 'Woman';
  };

  const idConfirm = async (e: any) => {
    e.preventDefault();
    if (id === '') {
      alert('Please input id !');
      return;
    }
    await axios.post('/join/id', { id }).then((response) => {
      if (response.status !== 200) {
        console.error(response.data.error);
      }
      if (response.data.already === false) {
        alert('This ID can be used 👌');
        setIdConfirmation(true);
        return;
      } else {
        alert('This ID is used already 😥');
        return;
      }
    });
  };

  const nickConfirm = async (e: any) => {
    e.preventDefault();
    await axios.post('/join/nick', { nickname }).then((response) => {
      if (response.status !== 200) {
        console.error(response.data.error);
      }
      if (response.data.already === false) {
        alert('This Nickname can be used 👌');
        setNickConfirmation(true);
        return;
      } else {
        alert('This Nickname is used already 😥');
        return;
      }
    });
  };

  const onSubmit = async (e: any) => {
    e.preventDefault();

    if (!idConfirmation) {
      alert('Please press Confirmation button to check your "ID" is available');
      return;
    }

    if (!nickConfirmation) {
      alert('Please press Confirmation button to check your "Nickname" is available');
      return;
    }

    if (password !== password_check) {
      alert('Plase Check your passwords are same !');
      return;
    }

    const data: user = {
      id,
      password,
      nickname,
      gender,
    };

    await axios
      .post(`${process.env.REACT_APP_SERVER_URL}/join`, data)
      .then(async () => {
        await alert('Join Successfully!');
        axios
          .post(`${process.env.REACT_APP_SERVER_URL}/auth/login`, { id: data.id, password: data.password }, { withCredentials: true })
          .then((response) => {
            store.dispatch({ type: 'LOGIN', user: response.data.data });
            history.push({
              pathname: '/',
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
      })
      .catch((err) => console.log(err));
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

  return <JoinPresenter onSubmit={onSubmit} onChange={onChange} idConfirm={idConfirm} nickConfirm={nickConfirm} />;
};

export default JoinContainer;

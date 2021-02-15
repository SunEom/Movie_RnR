import React, { useState } from 'react';
import EditProfilePresenter from './EditProfilePresenter';
import store from '../../store';
import { useHistory } from 'react-router';
import axios from 'axios';

type EditProfileContainerProps = {
  user: any;
};

const EditProfileContainer = ({ user }: EditProfileContainerProps) => {
  const history = useHistory();
  const [nickname, setNickname] = useState(user.nickname);
  const [gender, setGender] = useState(user.gender);
  const [nickConfirmation, setNickConfirmation] = useState(false);

  const nickConfirm = async (e: any) => {
    e.preventDefault();
    await axios.post('http://localhost:8000/join/nick', { nickname }).then((response) => {
      if (response.status !== 200) {
        console.error(response.data.error);
      }
      console.log(response);
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

    if (!nickConfirmation) {
      alert('Please press Confirmation button to check your "Nickname" is available');
      return;
    }

    const data = {
      nickname,
      gender,
    };

    await axios
      .post('http://localhost:8000/user/profile', data, { withCredentials: true })
      .then(() => {
        history.push('/profile');
      })
      .catch((err) => console.log(err));
  };

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    switch (e.currentTarget.id) {
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
  return <EditProfilePresenter user={user} nickConfirm={nickConfirm} onSubmit={onSubmit} onChange={onChange} />;
};

export default EditProfileContainer;

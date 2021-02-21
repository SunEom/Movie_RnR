import React, { useState } from 'react';
import EditProfilePresenter from './EditProfilePresenter';
import store from '../../store';
import axios from 'axios';

type EditProfileContainerProps = {
  user: any;
  setMode: any;
};

const EditProfileContainer = ({ user, setMode }: EditProfileContainerProps) => {
  const [nickname, setNickname] = useState(user.nickname);
  const [gender, setGender] = useState(user.gender);
  const [biography, setBiography] = useState(user.biography ? user.biography : '');
  const [instagram, setInstagram] = useState(user.instagram ? user.instagram : 'https://instagram.com/');
  const [facebook, setFacebook] = useState(user.facebook ? user.facebook : 'https://facebook.com/');
  const [twitter, setTwitter] = useState(user.twitter ? user.twitter : 'https://twitter.com/');

  const [nickConfirmation, setNickConfirmation] = useState(true);

  const nickConfirm = async (e: any) => {
    e.preventDefault();
    await axios.post(`${process.env.REACT_APP_SERVER_URL}/join/nick`, { nickname }).then((response) => {
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

    if (!nickConfirmation) {
      alert('Please press Confirmation button to check your "Nickname" is available');
      return;
    }

    const data = {
      nickname,
      gender,
      biography,
      instagram,
      facebook,
      twitter,
    };

    await axios
      .post(`${process.env.REACT_APP_SERVER_URL}/user/profile`, data, { withCredentials: true })
      .then(async (response) => {
        await store.dispatch({ type: 'USER_UPDATED', user: response.data.data[0] });
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
      .catch((err) => console.error(err));
  };

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    switch (e.currentTarget.id) {
      case 'nickname': {
        setNickConfirmation(false);
        setNickname(e.currentTarget.value);
        break;
      }
      case 'gender': {
        setGender(e.currentTarget.value as 'Man' | 'Woman');
        break;
      }
      case 'biography': {
        setBiography(e.currentTarget.value);
        break;
      }
      case 'instagram': {
        setInstagram(e.currentTarget.value);
        break;
      }
      case 'facebook': {
        setFacebook(e.currentTarget.value);
        break;
      }
      case 'twitter': {
        setTwitter(e.currentTarget.value);
        break;
      }
    }
  };
  return (
    <EditProfilePresenter
      user={user}
      nickConfirm={nickConfirm}
      onSubmit={onSubmit}
      onChange={onChange}
      nickname={nickname}
      gender={gender}
      biography={biography}
      instagram={instagram}
      facebook={facebook}
      twitter={twitter}
    />
  );
};

export default EditProfileContainer;

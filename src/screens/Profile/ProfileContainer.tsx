import React, { useState } from 'react';
import ProfilePresenter from './ProfilePresenter';
import { useHistory } from 'react-router';
import store from '../../store';

const ProfileContainer = () => {
  const history = useHistory();
  const user = store.getState().user;
  const [mode, setMode] = useState<'basic' | 'edit' | 'posts'>('basic');

  if (!user?.user_id) {
    history.push({ pathname: '/' });
  }
  return <ProfilePresenter user={user} modeHandler={setMode} mode={mode} />;
};

export default ProfileContainer;

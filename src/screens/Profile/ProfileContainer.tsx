import React from 'react';
import ProfilePresenter from './ProfilePresenter';
import { useHistory } from 'react-router';
import store from '../../store';

export default () => {
  const history = useHistory();
  const user = store.getState().user;

  if (!user.user_id) {
    history.push({ pathname: '/' });
  }
  return <ProfilePresenter user={user} />;
};

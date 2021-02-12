import React from 'react';
import store from '../../store';
import BasicProfilePresenter from './BasicProfilePresenter';
const BasicProfileContainer = () => {
  const user = store.getState().user;
  return <BasicProfilePresenter user={user} />;
};

export default BasicProfileContainer;

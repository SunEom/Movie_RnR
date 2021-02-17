import axios from 'axios';
import React from 'react';
import store from '../../store';
import DangerPresenter from './DangerPresenter';
import { useHistory } from 'react-router';

const DangerContainer = () => {
  const history = useHistory();
  const onSubmit = (e: any) => {
    e.preventDefault();
    const answer = window.confirm('Are you sure ? ');
    if (!answer) {
      return;
    }
    axios
      .delete('http://localhost:8000/user/', { withCredentials: true })
      .then(() => {
        store.dispatch({ type: 'LOGOUT' });
        alert('Account is deleted completely');
        history.push({ pathname: '/' });
      })
      .catch((err) => console.error(err));
  };
  return <DangerPresenter onSubmit={onSubmit} />;
};

export default DangerContainer;

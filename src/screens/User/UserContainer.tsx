import React, { useEffect, useState } from 'react';
import UserPresenter from './UserPresenter';
import { useHistory, useParams } from 'react-router';
import axios from 'axios';
import store from '../../store';

const UserContainer = () => {
  const history = useHistory();
  const [loading, setLoading] = useState(true);
  const [mode, setMode] = useState<'basic' | 'posts'>('basic');
  const [user, setUser] = useState({ id: 5, user_id: 'zxcvzxcv', nickname: 'zxcvzxcv', gender: 'Woman' });
  const params: any = useParams();

  const getUser = () => {
    axios
      .get(`http://localhost:8000/user/${params.id}`, { withCredentials: true })
      .then((response) => {
        setUser(response.data.data[0]);
        if (store.getState().user?.id == response.data.data[0]?.id) {
          history.push({ pathname: '/profile' });
        }
        setLoading(false);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getUser();
  }, []);

  return <UserPresenter modeHandler={setMode} mode={mode} user={user} loading={loading} />;
};

export default UserContainer;

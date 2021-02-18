import React, { useEffect, useState } from 'react';
import axios from 'axios';
import HomePresenter from './HomePresenter';
import store from '../../store';

const HomeContainer = () => {
  const [recent, setRecent] = useState<Array<object>>([{}]);
  const [loading, setLoading] = useState<boolean>(true);

  const getRecent = async () => {
    axios
      .get('/post', { withCredentials: true })
      .then((response) => {
        store.dispatch({ type: 'GET_RECENT', recent: response.data.data });
        setRecent(response.data.data);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getRecent();
  }, []);

  return <HomePresenter recent={recent as any} loading={loading} />;
};

export default HomeContainer;

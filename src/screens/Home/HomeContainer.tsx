import React, { useEffect, useState } from 'react';
import axios from 'axios';
import HomePresenter from './HomePresenter';
import store from '../../store';

const HomeContainer = () => {
  const [recent, setRecent] = useState<Array<object>>([{}]);
  const [loading, setLoading] = useState<boolean>(true);

  const getRecent = async () => {
    const { data } = await axios.get('/post/');
    setRecent(data);
    store.dispatch({ type: 'GET_RECENT', recent: data });
    setLoading(false);
  };

  useEffect(() => {
    getRecent();
  }, []);

  return <HomePresenter recent={recent as any} loading={loading} />;
};

export default HomeContainer;

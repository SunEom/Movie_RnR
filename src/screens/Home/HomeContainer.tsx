import React, { useEffect, useState } from 'react';
import axios from 'axios';
import HomePresenter from './HomePresenter';
import store from '../../store';

export default () => {
  const [recent, setRecent] = useState<Array<object>>([{}]);
  const [loading, setLoading] = useState<boolean>(store.getState().recent ? false : true);

  const getRecent = async () => {
    const { data } = await axios.get('/post/');
    setRecent(data);
    store.dispatch({ type: 'GET_RECENT', recent: data });
    setLoading(false);
  };

  useEffect(() => {
    if (store.getState().recent) {
      setRecent(store.getState().recent);
      setLoading(false);
    } else {
      getRecent();
    }
  }, []);

  return <HomePresenter recent={recent as any} loading={loading} />;
};

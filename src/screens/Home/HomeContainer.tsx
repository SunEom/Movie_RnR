import React, { useEffect, useState } from 'react';
import axios from 'axios';
import HomePresenter from './HomePresenter';

type movie = {
  id: number;
  title: string;
  genres: string;
  overview: string;
  rates: number;
};

export default () => {
  const [recent, setRecent] = useState<Array<object>>([{}]);
<<<<<<< HEAD
  const [loading, setLoading] = useState<boolean>(true);
=======
>>>>>>> 7e245ec63742e88ab1ea37d7a18651270bd217ad

  const getRecent = async () => {
    const { data } = await axios.get('/post/');
    setRecent(data);
<<<<<<< HEAD
    setLoading(false);
=======
>>>>>>> 7e245ec63742e88ab1ea37d7a18651270bd217ad
  };

  useEffect(() => {
    getRecent();
  }, []);

<<<<<<< HEAD
  return <HomePresenter recent={recent as any} loading={loading} />;
=======
  return <HomePresenter recent={recent as any} />;
>>>>>>> 7e245ec63742e88ab1ea37d7a18651270bd217ad
};

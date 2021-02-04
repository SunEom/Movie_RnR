import React, { useEffect, useState } from 'react';
import DetailPresenter from './DetailPresenter';
import axios from 'axios';

export default ({ id }: { id: string }) => {
  const [movie, setMovie] = useState<object>([{}]);
  const [loading, setLoading] = useState<boolean>(true);
  const getRecent = async () => {
    const { data } = await axios.get(`/post/${id}`);
    setMovie(data[0]);
    setLoading(false);
  };

  useEffect(() => {
    getRecent();
  }, []);

  return <DetailPresenter movie={movie as any} loading={loading} />;
};

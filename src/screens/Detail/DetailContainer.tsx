import React, { useEffect, useState } from 'react';
import DetailPresenter from './DetailPresenter';
import axios from 'axios';
import { useHistory } from 'react-router';

export default ({ id }: { id: string }) => {
  const [movie, setMovie] = useState<object>([{}]);
  const [loading, setLoading] = useState<boolean>(true);
  const history = useHistory();

  const getRecent = async () => {
    const { data } = await axios.get(`/post/${id}`);
    setMovie(data[0]);
    setLoading(false);
  };

  const onDeleteClick = (e: any) => {
    e.preventDefault();
    axios
      .delete(`http://localhost:8000/post/${id}`)
      .then((response) => history.push({ pathname: '/' }))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getRecent();
  }, []);

  return <DetailPresenter movie={movie as any} loading={loading} onDeleteClick={onDeleteClick} />;
};

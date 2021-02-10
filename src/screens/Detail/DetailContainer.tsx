import React, { useEffect, useState } from 'react';
import DetailPresenter from './DetailPresenter';
import axios from 'axios';
import { useHistory } from 'react-router';
import store from '../../store';

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
      .delete(`http://localhost:8000/post/${id}`, { withCredentials: true })
      .then(async (response) => {
        const { data } = await axios.get('/post/');
        store.dispatch({ type: 'GET_RECENT', recent: data });
        history.push({ pathname: '/' });
      })
      .catch((err) => console.error(err.response.data));
  };

  useEffect(() => {
    getRecent();
  }, []);

  return <DetailPresenter movie={movie as any} loading={loading} onDeleteClick={onDeleteClick} />;
};

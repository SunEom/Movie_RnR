import React, { useEffect, useState } from 'react';
import DetailPresenter from './DetailPresenter';
import axios from 'axios';
import { useHistory } from 'react-router';
import store from '../../store';

export default ({ id }: { id: string }) => {
  const [movie, setMovie] = useState<object>([{}]);
  const [loading, setLoading] = useState<boolean>(true);
  const [mode, setMode] = useState('read');
  const history = useHistory();

  const getMovie = async () => {
    axios
      .get(`/post/${id}`)
      .then(({ data }) => {
        setMovie(data[0]);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  };

  const modeToggle = () => {
    if (mode === 'read') {
      setMode('edit');
    } else if (mode === 'edit') {
      setMode('read');
    }
  };

  const onDeleteClick = async (e: any) => {
    e.preventDefault();
    await axios
      .delete(`http://localhost:8000/post/${id}`, { withCredentials: true })
      .then(() => history.push({ pathname: '/' }))
      .catch((err) => console.error(err.response.data));
  };

  const user = store.getState().user;

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <DetailPresenter movie={movie as any} loading={loading} onDeleteClick={onDeleteClick} mode={mode} modeToggle={modeToggle} user={user} />
  );
};

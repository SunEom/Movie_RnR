import React, { useEffect, useState } from 'react';
import DetailPresenter from './DetailPresenter';
import axios from 'axios';
import { useHistory } from 'react-router';
import store from '../../store';

type post = {
  id: number;
  title: string;
  genres: string;
  rates: number | undefined;
  overview: string;
};

const DetailContainer = ({ id }: { id: string }) => {
  const [movie, setMovie] = useState<any>([{}]);
  const [loading, setLoading] = useState<boolean>(true);
  const [mode, setMode] = useState('read');
  const [title, setTitle] = useState<string>('');
  const [genres, setGenres] = useState<string[]>([]);
  const [rates, setRates] = useState<number | undefined>(undefined);
  const [overview, setOverview] = useState<string>('');
  const history = useHistory();

  const onSubmit = async (e: any) => {
    e.preventDefault();

    if (title === '') {
      alert('Please input title.');
      return;
    }
    if (genres.length === 0) {
      alert('Please select at least one genre.');
      return;
    }
    if (rates === undefined) {
      alert('Please input rates.');
      return;
    }
    if (overview === '') {
      alert('Please input overview.');
      return;
    }

    let _genres = '';
    for (let i = 0; i < genres.length; i++) {
      if (i + 1 === genres.length) {
        _genres += genres[i];
        break;
      }
      _genres += `${genres[i]}, `;
    }

    const data: post = {
      id: +id,
      title,
      genres: _genres,
      rates,
      overview,
    };

    if ((rates as number) > 10) {
      alert('Rates must be lower than 10 !');
      console.log(e.target);
      return;
    }

    await axios
      .patch('http://localhost:8000/post/update', { ...data }, { withCredentials: true })
      .then((response) => {
        history.push(`/post/${response.data.data[0].id}`);
      })
      .catch((err) => console.log('response: ', err.response.data));
  };

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    switch (e.currentTarget.name) {
      case 'title': {
        setTitle(e.currentTarget.value);
        break;
      }
      case 'rates': {
        if (e.currentTarget.value === '') {
          setRates(undefined);
        } else {
          setRates(+e.currentTarget.value);
        }
        break;
      }
      case 'overview': {
        setOverview(e.currentTarget.value);
        break;
      }
    }
  };

  const onCheck = (e: any) => {
    if (e.target.checked) {
      let newItem = e.target.name;
      setGenres([...genres, newItem] as any);
    } else {
      let removedItem = e.target.name;
      setGenres([...genres].filter((genre) => genre !== removedItem));
    }
  };

  const getMovie = async () => {
    axios
      .get(`/post/${id}`)
      .then((response) => {
        const movie = response.data.data.movie[0];
        const user = response.data.data.user[0];
        setMovie({ ...movie, user: { ...user } });
        setTitle(movie.title);
        setGenres(movie.genres);
        setRates(+movie.rates);
        setOverview(movie.overview);
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

  const user = store.getState().user ? store.getState().user : null;

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <DetailPresenter
      movie={movie as any}
      loading={loading}
      onDeleteClick={onDeleteClick}
      mode={mode}
      modeToggle={modeToggle}
      user={user}
      onChange={onChange}
      onSubmit={onSubmit}
      onCheck={onCheck}
    />
  );
};

export default DetailContainer;

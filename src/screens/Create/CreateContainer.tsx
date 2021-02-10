import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CreatePresenter from './CreatePresenter';
import { useHistory } from 'react-router';
import store from '../../store';

export default () => {
  const [title, setTitle] = useState<string>('');
  const [genres, setGenres] = useState<string>('');
  const [rates, setRates] = useState<number>(0);
  const [overview, setOverview] = useState<string>('This movie is ...');
  const history = useHistory();
  useEffect(() => {
    if (!store.getState().user) {
      history.push({
        pathname: '/login',
      });
    }
  }, []);

  type post = {
    title: string;
    genres: string;
    rates: number;
    overview: string;
  };

  const onSubmit = async (e: any) => {
    e.preventDefault();
    const data: post = {
      title,
      genres,
      rates,
      overview,
    };

    if (rates > 10) {
      alert('Rates must be lower than 10 !');
      console.log(e.target);
      return;
    }

    await axios
      .post('http://localhost:8000/post', { ...data }, { withCredentials: true })
      .then((response) => {
        history.push(`/post/${response.data.data.id}`);
      })
      .catch((err) => console.log('response: ', err.response.data));
  };

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    switch (e.currentTarget.name) {
      case 'title': {
        setTitle(e.currentTarget.value);
        break;
      }
      case 'genres': {
        setGenres(e.currentTarget.value);
        break;
      }
      case 'rates': {
        setRates(+e.currentTarget.value);
        break;
      }
      case 'overview': {
        setOverview(e.currentTarget.value);
        break;
      }
    }
  };

  return <CreatePresenter onSubmit={onSubmit} onChange={onChange} />;
};

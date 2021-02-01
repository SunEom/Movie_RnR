import React, { useState } from 'react';
import axios from 'axios';
import CreatePresenter from './CreatePresenter';
export default () => {
  const [title, setTitle] = useState<string>('');
  const [genres, setGenres] = useState<string>('');
  const [rates, setRates] = useState<number>(0);
  const [overview, setOverview] = useState<string>('This movie is ...');

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
    await axios
      .post('/post', { ...data })
      .then(() => {
        window.location.href = '/';
      })
      .catch((err) => console.error(err));
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

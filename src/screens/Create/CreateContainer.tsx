import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CreatePresenter from './CreatePresenter';
import { useHistory } from 'react-router';
import store from '../../store';
import { genresToString } from '../../util';

const CreateContainer = () => {
  const [title, setTitle] = useState<string>('');
  const [genres, setGenres] = useState<string[]>([]);
  const [rates, setRates] = useState<number | undefined>();
  const [overview, setOverview] = useState<string>('');
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
    rates: number | undefined;
    overview: string;
  };

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

    const _genres: string = genresToString(genres);

    const data: post = {
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
      .post(`${process.env.REACT_APP_SERVER_URL}/post`, { ...data }, { withCredentials: true })
      .then((response) => {
        history.push(`/post/${response.data.data[0].id}`);
      })
      .catch((err) => {
        if (err.response.data.error === 'not login') {
          store.dispatch({ action: 'LOGOUT' });
          history.push({ pathname: '/login' });
        }
      });
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

  return <CreatePresenter onSubmit={onSubmit} onChange={onChange} onCheck={onCheck} overview={overview} />;
};

export default CreateContainer;

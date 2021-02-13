import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SearchPresenter from './SearchPresenter';
import store from '../../store';
import { useParams } from 'react-router';

const SearchContainer = () => {
  const params: { keyword: string } = useParams();
  const keyword = params.keyword;
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = () => {
    axios
      .get(`http://localhost:8000/post/search/${keyword}`, { withCredentials: true })
      .then((response) => {
        setResult(response.data.data);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  };
  return <SearchPresenter result={result} loading={loading} keyword={keyword} />;

  useEffect(() => {
    getData();
  }, []);
};

export default SearchContainer;

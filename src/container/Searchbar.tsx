import React, { useState } from 'react';
import Searchbar from '../components/Header/Searchbar';
import { useHistory } from 'react-router';

const SearchBarContainer = () => {
  const history = useHistory();
  const [keyword, setKeyword] = useState('');

  const onSubmit = (e: any) => {
    e.preventDefault();
    history.push({ pathname: `/search/${keyword}` });
  };

  const onChange = (e: any) => {
    setKeyword(e.target.value);
  };

  return <Searchbar onSubmit={onSubmit} onChange={onChange} />;
};

export default SearchBarContainer;

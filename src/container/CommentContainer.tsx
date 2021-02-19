import React, { useEffect, useState } from 'react';
import CommentContainer from '../components/CommentContainer';
import store from '../store';
import axios from 'axios';

type CommentContainerProps = {
  movie: { id: number; user_id: number };
};

type CommentsFormat = {
  movie_id: number;
  user_id: number;
  contents: string;
};

const CommentContainerContainer = ({ movie }: CommentContainerProps) => {
  const [contents, setContents] = useState('');
  const user = store.getState().user;
  const [comments, setComments] = useState<Array<any>>([]);
  const movie_id = movie.id;

  const getComments = () => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/comment/${movie.id}`, { withCredentials: true })
      .then((response) => {
        setComments(response.data.data);
      })
      .catch((err) => console.error(err));
  };

  const onSubmit = async (e: any) => {
    e.preventDefault();

    if (contents === '') {
      return alert('Please input Comment!');
    }

    const data: CommentsFormat = {
      movie_id,
      user_id: user.user_id,
      contents,
    };

    axios
      .post(`${process.env.REACT_APP_SERVER_URL}/comment`, { ...data }, { withCredentials: true })
      .then((response) => {
        axios.get(`${process.env.REACT_APP_SERVER_URL}/comment/${movie_id}`, { withCredentials: true }).then((response) => {
          setComments([...response.data.data]);
          setContents('');
        });
      })
      .catch((err) => console.error(err));
    setContents('');
  };

  const onChange = (e: any) => {
    setContents(e.currentTarget.value);
  };

  useEffect(() => {
    getComments();
  }, []);

  return (
    <CommentContainer
      onSubmit={onSubmit}
      onChange={onChange}
      contents={contents}
      comments={comments}
      user={user}
      setComments={setComments}
    />
  );
};

export default CommentContainerContainer;

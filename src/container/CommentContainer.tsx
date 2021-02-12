import React, { useState } from 'react';
import CommentContainer from '../components/CommentContainer';
import store from '../store';
import { useHistory } from 'react-router';
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
  const user_id = store.getState().user?.user_id;
  const [comments, setComments] = useState<Array<{ user_id: string; contents: string }>>([]);
  const movie_id = movie.id;

  const onSubmit = async (e: any) => {
    e.preventDefault();

    if (contents === '') {
      return alert('Please input Comments');
    }

    const data: CommentsFormat = {
      movie_id,
      user_id,
      contents,
    };

    // axios
    //   .post('http://localhost:8000/comments', { ...data }, { withCredentials: true })
    //   .then((response) => {
    //     setComments(response.data.data);
    //     setContents('');
    //   })
    //   .catch((err) => console.error(err));
    setComments([...comments, { user_id, contents }]);
    setContents('');
  };

  const onChange = (e: any) => {
    setContents(e.currentTarget.value);
  };

  return <CommentContainer onSubmit={onSubmit} onChange={onChange} contents={contents} comments={comments} user_id={user_id} />;
};

export default CommentContainerContainer;

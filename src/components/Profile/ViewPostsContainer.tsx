import React, { useEffect, useState } from 'react';
import ViewPostsPresenter from './ViewPostsPresenter';
import axios from 'axios';
import store from '../../store';

const ViewPostsContainer = () => {
  const [posts, setPosts] = useState();
  const [loading, setloading] = useState(true);
  const user = store.getState().user;

  const getMyPosts = () => {
    // axios
    //   .get(`http://localhost:8000/post/user/${user.user_id}`, { withCredentials: true })
    //   .then((response) => {
    //     setPosts(response.data.data);
    //     setloading(false);
    //   })
    //   .catch((err) => console.error(err));

    setTimeout(() => setloading(false), 3000);
  };

  useEffect(() => {
    getMyPosts();
  }, []);

  return <ViewPostsPresenter posts={posts as any} loading={loading} />;
};

export default ViewPostsContainer;

import React, { useEffect, useState } from 'react';
import ViewPostsPresenter from './ViewPostsPresenter';
import axios from 'axios';

type ViewPostsContainerProps = {
  user: any;
};

const ViewPostsContainer = ({ user }: ViewPostsContainerProps) => {
  const [posts, setPosts] = useState([]);
  const [loading, setloading] = useState(true);
  const [page, setPage] = useState(1);

  const getMyPosts = () => {
    axios
      .get(`http://localhost:8000/post/user/${user.id}`, { withCredentials: true })
      .then((response) => {
        setPosts(response.data.data);
        setloading(false);
      })
      .catch((err) => console.error(err));

    setTimeout(() => setloading(false), 1);
  };

  useEffect(() => {
    getMyPosts();
  }, []);

  return <ViewPostsPresenter posts={posts as any} loading={loading} page={page} pageHandler={setPage} />;
};

export default ViewPostsContainer;

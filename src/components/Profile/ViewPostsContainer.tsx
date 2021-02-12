import React, { useEffect, useState } from 'react';
import ViewPostsPresenter from './ViewPostsPresenter';
import axios from 'axios';
import store from '../../store';

const ViewPostsContainer = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'Build Your New Idea with Laravel Freamwork.',
      overview:
        '1 sit, amet consectetur adipisicing elit. Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!',
      created: 'Jun 1, 2020',
      genres: 'Laravel',
    },
    {
      id: 1,
      title: 'Build Your New Idea with Laravel Freamwork.',
      overview:
        '2 t, amet consectetur adipisicing elit. Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!',
      created: 'Jun 1, 2020',
      genres: 'Laravel',
    },
    {
      id: 1,
      title: 'Build Your New Idea with Laravel Freamwork.',
      overview:
        '3 t, amet consectetur adipisicing elit. Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!',
      created: 'Jun 1, 2020',
      genres: 'Laravel',
    },
    {
      id: 1,
      title: 'Build Your New Idea with Laravel Freamwork.',
      overview:
        '4 , amet consectetur adipisicing elit. Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!',
      created: 'Jun 1, 2020',
      genres: 'Laravel',
    },
    {
      id: 1,
      title: 'Build Your New Idea with Laravel Freamwork.',
      overview:
        '5 et consectetur adipisicing elit. Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!',
      created: 'Jun 1, 2020',
      genres: 'Laravel',
    },
    {
      id: 1,
      title: 'Build Your New Idea with Laravel Freamwork.',
      overview:
        '6 et consectetur adipisicing elit. Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!',
      created: 'Jun 1, 2020',
      genres: 'Laravel',
    },
    {
      id: 1,
      title: 'Build Your New Idea with Laravel Freamwork.',
      overview:
        '7 t consectetur adipisicing elit. Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!',
      created: 'Jun 1, 2020',
      genres: 'Laravel',
    },
    {
      id: 1,
      title: 'Build Your New Idea with Laravel Freamwork.',
      overview:
        '8  consectetur adipisicing elit. Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!',
      created: 'Jun 1, 2020',
      genres: 'Laravel',
    },
    {
      id: 1,
      title: 'Build Your New Idea with Laravel Freamwork.',
      overview:
        '9 onsectetur adipisicing elit. Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!',
      created: 'Jun 1, 2020',
      genres: 'Laravel',
    },
    {
      id: 1,
      title: 'Build Your New Idea with Laravel Freamwork.',
      overview:
        '10 tur adipisicing elit. Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!',
      created: 'Jun 1, 2020',
      genres: 'Laravel',
    },
    {
      id: 1,
      title: 'Build Your New Idea with Laravel Freamwork.',
      overview:
        '11 dipisicing elit. Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!',
      created: 'Jun 1, 2020',
      genres: 'Laravel',
    },
    {
      id: 1,
      title: 'Build Your New Idea with Laravel Freamwork.',
      overview:
        '12 dipisicing elit. Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!',
      created: 'Jun 1, 2020',
      genres: 'Laravel',
    },
  ]);
  const [loading, setloading] = useState(true);
  const user = store.getState().user;
  const [page, setPage] = useState(1);

  const getMyPosts = () => {
    // axios
    //   .get(`http://localhost:8000/post/user/${user.user_id}`, { withCredentials: true })
    //   .then((response) => {
    //     setPosts(response.data.data);
    //     setloading(false);
    //   })
    //   .catch((err) => console.error(err));

    setTimeout(() => setloading(false), 1);
  };

  useEffect(() => {
    getMyPosts();
  }, []);

  return <ViewPostsPresenter posts={posts as any} loading={loading} page={page} pageHandler={setPage} />;
};

export default ViewPostsContainer;

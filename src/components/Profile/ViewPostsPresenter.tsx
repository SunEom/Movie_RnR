import React from 'react';
import DetailPostCard from './DetailPostCard';
import ActivityIndicator from '../ActivityIndicator';
import Pagination from '../../components/Pagination';

type ViewPostsPresenterProps = {
  posts: Array<{
    title: string;
    overview: string;
    created: string;
    genres: any;
  }>;
  loading: boolean;
  page: number;
  pageHandler: any;
};

const ViewPostsPresenter = ({ posts, loading, page, pageHandler }: ViewPostsPresenterProps) => {
  return (
    <>
      {
        loading ? (
          <ActivityIndicator />
        ) : (
          <div className="w-full flex flex-col items-center">
            {posts.slice(3 * (page - 1), 3 * page).map((post, idx) => (
              <DetailPostCard key={idx} id={1} title={post.title} overview={post.overview} created={post.created} genres={post.genres} />
            ))}
            {/* <DetailPostCard
              id={1}
              title="Build Your New Idea with Laravel Freamwork."
              overview="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora expedita dicta totam aspernatur doloremque. Excepturi iste
iusto eos enim reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!"
              created="Jun 1, 2020"
              genres="Laravel"
            />
            <DetailPostCard id={2} title="Soul" overview="Soul is my fav animation movie" created="Feb 2, 2021" genres="Animation" /> */}
            <Pagination maxPage={posts.length / 3} page={page} pageHandler={pageHandler} />
          </div>
        )

        // {posts.map((post) => (
        //   <DetailPostCard {...post} />
        // ))}
      }
    </>
  );
};

export default ViewPostsPresenter;

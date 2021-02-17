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
      {loading ? (
        <ActivityIndicator />
      ) : posts.length !== 0 ? (
        <div className="w-full flex flex-col items-center">
          {posts.slice(4 * (page - 1), 4 * page).map((post, idx) => (
            <DetailPostCard key={idx} id={1} title={post.title} overview={post.overview} created={post.created} genres={post.genres} />
          ))}
          <Pagination maxPage={posts.length / 4} page={page} pageHandler={pageHandler} />
        </div>
      ) : null}
    </>
  );
};

export default ViewPostsPresenter;

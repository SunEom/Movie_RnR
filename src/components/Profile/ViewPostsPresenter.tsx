import React from 'react';
import DetailPostCard from './DetailPostCard';
import ActivityIndicator from '../ActivityIndicator';
import Pagination from '../../components/Pagination';

type ViewPostsPresenterProps = {
  posts: Array<{
    id: number;
    title: string;
    overview: string;
    created: string;
    genres: any;
    commentCount: number;
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
        <div className="px-4 pt-4">
          <div>
            <h3 className="text-2xl font-semibold font-Jua">My posts</h3>
          </div>
          <div className="w-full flex flex-col items-center mt-4">
            {posts.slice(4 * (page - 1), 4 * page).map((post, idx) => (
              <DetailPostCard
                key={idx}
                id={post.id}
                title={post.title}
                overview={post.overview}
                created={post.created}
                genres={post.genres}
                commentCount={post.commentCount}
              />
            ))}
            <Pagination maxPage={posts.length / 4} page={page} pageHandler={pageHandler} />
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ViewPostsPresenter;

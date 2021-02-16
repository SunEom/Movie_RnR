import React from 'react';
import MovieCard from '../../components/MovieCard';
import ActivityIndicator from '../../components/ActivityIndicator';

type SearchPresenterProps = {
  result: Array<any>;
  loading: boolean;
  keyword: string;
};

const SearchPresenter = ({ result, loading, keyword }: SearchPresenterProps) => {
  return (
    <div>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <>
          <div className="w-screen text-center text-2xl pt-10">Search for {keyword}</div>
          <div className="flex justify-center pt-10 ">
            <div className="flex justify-center flex-wrap md:w-11/12">
              {result?.map((m) => (
                <MovieCard
                  key={m.id}
                  id={m.id}
                  title={m.title}
                  genres={m.genres}
                  rates={m.rates}
                  overview={m.overview}
                  commentCount={m.commentCount}
                />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SearchPresenter;

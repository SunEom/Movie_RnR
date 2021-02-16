import React from 'react';
import MovieCard from '../../components/MovieCard';
import ActivityIndicator from '../../components/ActivityIndicator';

type movie = {
  id: number;
  title: string;
  genres: string;
  rates: number;
  overview: string;
  commentCount: number;
};

type HomeProps = {
  recent: Array<movie>;
  loading: boolean;
};

const Home = ({ recent, loading }: HomeProps) => {
  return (
    <div>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <>
          <div className="w-screen text-center text-2xl pt-10 font-carter">Recent Postings</div>
          <div className="flex justify-center pt-10 ">
            <div className="flex justify-center flex-wrap md:w-11/12">
              {recent.map((m) => (
                <MovieCard key={m.id} {...m} />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;

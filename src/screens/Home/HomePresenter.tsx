import React from 'react';
import MovieCard from '../../components/MovieCard';
import ActivityIndicator from '../../components/ActivityIndicator';

type movie = {
  id: number;
  title: string;
  genres: string;
  rates: number;
  overview: string;
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
          <div className="w-screen text-center text-2xl pt-10">Recent Postings</div>
          <div className="flex justify-center pt-10">
            <div className="flex justify-center flex-wrap w-10/12">
              {recent.map((m) => (
                <MovieCard key={m.id} id={m.id} title={m.title} genres={m.genres} rates={m.rates} overview={m.overview} />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;

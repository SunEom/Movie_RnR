import React from 'react';
import MovieCard from '../../components/MovieCard';

type movie = {
  id: number;
  title: string;
  genres: string;
  rates: number;
};

type HomeProps = {
  recent: Array<movie>;
};

const Home = ({ recent }: HomeProps) => {
  return (
    <div>
      <div className="flex justify-center pt-10">
        <div className="flex justify-center flex-wrap w-10/12">
          <MovieCard id={1} title="Soul" genres="Animation" rates={10} />
          {recent.map((m) => (
            <MovieCard id={m.id} title={m.title} genres={m.genres} rates={m.rates} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

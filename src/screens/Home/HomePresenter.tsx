import React from 'react';
import MovieCard from '../../components/MovieCard';
const Home = () => {
  return (
    <div>
      <div className="flex justify-center pt-10">
        <div className="flex justify-center flex-wrap w-10/12">
          <MovieCard id={1} title="Soul" genres="Animation" rates={10} />
          <MovieCard id={2} title="Wonder Woman" genres="Hero" rates={9.3} />
          <MovieCard id={3} title="Breach" genres="Science Fiction" rates={5} />

          <MovieCard id={1} title="Soul" genres="Animation" rates={10} />
          <MovieCard id={2} title="Wonder Woman" genres="Hero" rates={9.3} />
          <MovieCard id={3} title="Breach" genres="Science Fiction" rates={5} />
          <MovieCard id={3} title="Breach" genres="Science Fiction" rates={5} />
          <MovieCard id={3} title="Breach" genres="Science Fiction" rates={5} />
          <MovieCard id={3} title="Breach" genres="Science Fiction" rates={5} />
        </div>
      </div>
    </div>
  );
};

export default Home;

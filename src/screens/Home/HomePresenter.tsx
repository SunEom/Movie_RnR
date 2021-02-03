import React from 'react';
import ResultCard from '../../components/ResultCard';
const Home = () => {
  return (
    <div>
      <div className="flex justify-center">
        <div className="flex justify-center flex-wrap w-10/12">
          <ResultCard id={1} title="Soul" genres="Animation" rates={10} />
          <ResultCard id={2} title="Wonder Woman" genres="Hero" rates={9.3} />
          <ResultCard id={3} title="Breach" genres="Science Fiction" rates={5} />

          <ResultCard id={1} title="Soul" genres="Animation" rates={10} />
          <ResultCard id={2} title="Wonder Woman" genres="Hero" rates={9.3} />
          <ResultCard id={3} title="Breach" genres="Science Fiction" rates={5} />
          <ResultCard id={3} title="Breach" genres="Science Fiction" rates={5} />
          <ResultCard id={3} title="Breach" genres="Science Fiction" rates={5} />
          <ResultCard id={3} title="Breach" genres="Science Fiction" rates={5} />
        </div>
      </div>
    </div>
  );
};

export default Home;

import React from 'react';
import ActivityIndicator from '../../components/ActivityIndicator';
type movie = {
  id: number;
  title: string;
  genres: string;
  rates: number;
  overview: string;
  created: any;
};

type DetailProps = {
  movie: movie;
  loading: boolean;
};

const Detail = ({ movie, loading }: DetailProps) => {
  return (
    <>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <div className="flex justify-center pt-10">
          <div className=" w-11/12 lg:w-1/2 md:px-4 lg:px-6 py-5">
            <div className="bg-white shadow-xl">
              <div className="">
                <img
                  src="https://images.pexels.com/photos/956999/milky-way-starry-sky-night-sky-star-956999.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt=""
                  className="h-56 w-full border-white border-8 hover:opacity-25"
                />
              </div>
              <div className="px-4 py-4 md:px-10">
                <h1 className="font-bold text-lg">{movie.title}</h1>
                <div className="w-full md:w-1/3 text-xs font-medium">{movie.genres}</div>
                <div className="w-full md:w-1/3 text-sm font-medium pt-1">⭐ {movie.rates} / 10</div>
                <div>
                  <p className="py-4">{movie.overview}</p>
                </div>
                <div className="flex flex-wrap pt-5">
                  <div className="w-full md:w-1/3 text-sm font-medium">{movie.created}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Detail;

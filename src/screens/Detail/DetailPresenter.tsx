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
  onDeleteClick: any;
  mode: string;
  modeToggle: any;
};

const Detail = ({ movie, loading, onDeleteClick, mode, modeToggle }: DetailProps) => {
  return (
    <>
      {loading ? (
        <ActivityIndicator />
      ) : movie ? (
        mode === 'read' ? (
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
                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={modeToggle}
                    className="border border-black-light bg-gray text-sm text-gray-darker rounded-md px-6 py-2 m-4 mx-2 transition duration-500 ease select-none hover:bg-gray-light focus:outline-none focus:shadow-outline"
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    onClick={onDeleteClick}
                    className="border border-black-light bg-gray text-sm text-gray-darker rounded-md px-4 py-2 m-4 mr-4 transition duration-500 ease select-none hover:bg-gray-light focus:outline-none focus:shadow-outline"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
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
                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={modeToggle}
                    className="border border-black-light bg-gray text-sm text-gray-darker rounded-md px-4 py-2 m-4 mx-2 transition duration-500 ease select-none hover:bg-gray-light focus:outline-none focus:shadow-outline"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        )
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
                <h1 className="font-bold text-lg">This page is not founded!</h1>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Detail;

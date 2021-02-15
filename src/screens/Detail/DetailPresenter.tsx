import React from 'react';
import { Link } from 'react-router-dom';
import ActivityIndicator from '../../components/ActivityIndicator';
import CommentContainer from '../../container/CommentContainer';

type movie = {
  id: number;
  title: string;
  genres: string;
  rates: number;
  overview: string;
  created: any;
  user_id: number;
  user: any;
};

type DetailProps = {
  movie: movie;
  loading: boolean;
  onDeleteClick: any;
  mode: string;
  modeToggle: any;
  user?: { id: number };
  onChange: any;
  onSubmit: any;
  onCheck: any;
};

const genresList = ['Romance', 'Action', 'Comedy', 'Historical', 'Horror', 'Sci-Fi', 'Thriller', 'Mystery', 'Animation', 'Drama'];

const Detail = ({ movie, loading, onDeleteClick, mode, modeToggle, user, onChange, onSubmit, onCheck }: DetailProps) => {
  const movieGenres = movie?.genres?.split(', ');
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
                  <div className="flex flex-wrap justify-between pt-5w-full">
                    <div className="text-sm font-medium">{movie.created}</div>
                    <Link className="text-sm font-medium text-gray-dark hover:underline" to={`/profile/user/${movie.user.id}`}>
                      by {movie.user.nickname}
                    </Link>
                  </div>
                </div>
                {user?.id === movie.user.id ? (
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
                ) : null}
              </div>
              <CommentContainer movie={movie} />
            </div>
          </div>
        ) : (
          <form
            className="editor mx-auto w-10/12 flex flex-col rounded text-gray-800 border mt-10 border-gray-dark p-4 shadow-lg max-w-2xl"
            onSubmit={onSubmit}
          >
            <div className="text-xl py-5 font-bold">Edit Post</div>

            <label>Title</label>
            <input
              name="title"
              className="title bg-gray-100 border border-gray-dark p-2 mb-4 outline-none"
              spellCheck="false"
              placeholder="Title"
              type="text"
              onChange={onChange}
              defaultValue={movie.title}
            />

            <div className="bg-gray-200 text-sm mt-3 mb-6 ">
              <span className="mb-3">Genres</span>
              <div className="mt-2 flex flex-wrap items-center">
                {genresList.map((genre, idx) => {
                  if (movieGenres.includes(genre)) {
                    return (
                      <label className="mx-2 whitespace-nowrap" key={idx}>
                        <input
                          type="checkbox"
                          name={genre}
                          className="form-checkbox h-5 w-5 text-gray-600"
                          defaultChecked={true}
                          onChange={onCheck}
                        />
                        <span className="ml-2 text-gray-700">{genre}</span>
                      </label>
                    );
                  } else {
                    return (
                      <label className="mx-2 whitespace-nowrap" key={idx}>
                        <input
                          type="checkbox"
                          name={genre}
                          className="form-checkbox h-5 w-5 text-gray-600"
                          defaultChecked={false}
                          onChange={onCheck}
                        />
                        <span className="ml-2 text-gray-700">{genre}</span>
                      </label>
                    );
                  }
                })}
              </div>
            </div>

            <div className="bg-gray-200 text-sm mt-3 mb-6 flex flex-col">
              <span className="mb-2">Rates</span>
              <input
                type="number"
                name="rates"
                className="w-1/3 border border-gray-dark pl-2 py-1"
                min={0}
                max={10}
                placeholder="* / 10"
                step={0.1}
                defaultValue={movie.rates}
                onChange={onChange}
              />
            </div>

            <textarea
              name="overview"
              className="description bg-gray-100 sec p-3 h-60 border border-gray-dark outline-none"
              spellCheck="false"
              placeholder="This movie is ..."
              defaultValue={movie.overview}
              onChange={onChange}
            ></textarea>

            <div className="icons flex text-gray-500 m-2">
              <svg
                className="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <svg
                className="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <svg
                className="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                />
              </svg>
              <div className="count ml-auto text-gray-400 text-xs font-semibold">0/300</div>
            </div>
            <div className="buttons flex">
              <button
                className="btn border border-gray-dark p-1 px-4 font-semibold cursor-pointer text-gray-500 ml-auto"
                onClick={modeToggle}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="btn border border-gray-dark p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-gray-dark"
              >
                Post
              </button>
            </div>
          </form>
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

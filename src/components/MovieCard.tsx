import React from 'react';
import { Link } from 'react-router-dom';

type MovieCardProps = {
  id: number;
  title: string;
  genres: string;
  rates: number;
  overview: string;
  commentCount: number;
};

const MovieCard = ({ id, title, genres, rates, overview, commentCount }: MovieCardProps) => {
  return (
    <div className="wrapper max-w-xs bg-gray-50 rounded-b-md shadow-xl overflow-hidden mx-6 my-10 relative break-words flex flex-col justify-between">
      <div>
        <img src="https://cdn.pixabay.com/photo/2016/05/24/16/48/mountains-1412683_1280.png" alt="montaña" />
      </div>
      <div className="p-3 space-y-3 bg-gray-light flex flex-col justify-between ">
        <h3 className="text-gray-700 font-semibold text-md">{title.length > 15 ? `${title.slice(0, 15)}...` : title}</h3>
        <p className="text-sm text-gray-900 leading-sm">{overview.length > 120 ? `${overview.slice(0, 120)}...` : overview}</p>
        <p>
          <span className="flex">
            <svg fill="currentColor" viewBox="0 0 20 20" className="h-5 text-teal-600">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg fill="currentColor" viewBox="0 0 20 20" className="h-5 text-teal-600">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg fill="currentColor" viewBox="0 0 20 20" className="h-5 text-teal-600">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg fill="currentColor" viewBox="0 0 20 20" className="h-5 text-teal-600">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg fill="currentColor" viewBox="0 0 20 20" className="h-5 text-gray-200">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
          </span>
        </p>
      </div>
      <button className="bg-gray-dark w-full flex justify-center py-2 text-white font-semibold transition duration-300 hover:bg-teal-500">
        Go to Detail
      </button>
    </div>
  );
};

export default MovieCard;

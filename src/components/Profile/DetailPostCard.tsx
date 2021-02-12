import React from 'react';
import { Link } from 'react-router-dom';

type DetailPostCardProps = {
  id: number | string;
  title: string;
  overview: string;
  created: string;
  genres: any;
};

const DetailPostCard = ({ id, title, overview, created, genres }: DetailPostCardProps) => {
  return (
    <div className="w-11/12 mt-10 flex justify-center mx-5 ">
      <div className="w-full max-w-4xl px-10 py-6 bg-white rounded-lg shadow-md">
        <div className="flex justify-between items-center">
          <span className="font-light text-gray-600">{created}</span>
          <div className="px-2 py-1 bg-gray-darker text-gray-light font-bold rounded hover:bg-gray-500">{genres}</div>
        </div>
        <div className="mt-2">
          <Link to={`/post/${id}`} className="text-2xl text-gray-700 font-bold hover:underline">
            {title}
          </Link>
          <p className="mt-2 text-gray-600">{overview}</p>
        </div>
      </div>
    </div>
  );
};

export default DetailPostCard;

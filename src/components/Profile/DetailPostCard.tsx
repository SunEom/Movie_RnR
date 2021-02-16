import React from 'react';
import { Link } from 'react-router-dom';
import { dateFormat, genresToArray } from '../../util';

type DetailPostCardProps = {
  id: number | string;
  title: string;
  overview: string;
  created: string;
  genres: any;
};

const DetailPostCard = ({ id, title, overview, created, genres }: DetailPostCardProps) => {
  const mainGenres = genresToArray(genres)[0];
  return (
    <div className="w-11/12 mt-10 flex justify-center ">
      <div className="w-full max-w-4xl px-10 py-6 bg-white rounded-lg shadow-md">
        <div className="flex justify-between items-center">
          <span className="font-light text-gray-600">{dateFormat(created)}</span>
          <div className="px-2 py-1 bg-gray-darker text-gray-light font-bold rounded hover:bg-gray-500">{mainGenres}</div>
        </div>
        <div className="mt-2">
          <Link to={`/post/${id}`} className="text-2xl text-gray-700 font-bold hover:underline break-words">
            {title.length > 25 ? `${title.slice(0, 25)}...` : title}
          </Link>
          <p className="mt-2 text-gray-600 break-words">{overview.length > 250 ? `${overview.slice(0, 250)}...` : overview}</p>
        </div>
      </div>
    </div>
  );
};

export default DetailPostCard;

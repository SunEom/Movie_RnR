import React from 'react';
import { Link } from 'react-router-dom';

type ResultCardProps = {
  id: number;
  title: string;
  genres: string;
  rates: number;
};

const ResultCard = ({ id, title, genres, rates }: ResultCardProps) => {
  return (
    <div className="w-11/12 pt-10 md:w-2/5 lg:w-1/3 px-2 sm:px-6 lg:px-8 ">
      <div className="overflow-hidden shadow-lg">
        <div className="px-6 pt-4 pb-2 bg-white border-b border-gray-200 font-bold uppercase whitespace-nowrap">{title}</div>

        <div className="px-6 bg-white border-b border-gray">{genres}</div>
        <div className="px-6 bg-white border-b border-gray">⭐ {rates} / 10</div>

        <div className="p-6 bg-white border-gray-200 text-right">
          <Link
            className="bg-gray shadow-lg text-sm text-black font-bold py-3 md:px-8 px-4 hover:bg-gray-dark rounded uppercase whitespace-nowrap"
            to={`/post/${id}`}
          >
            View Detail
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;

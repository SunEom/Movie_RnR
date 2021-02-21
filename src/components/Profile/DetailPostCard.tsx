import React from 'react';
import { Link } from 'react-router-dom';
import { dateFormat } from '../../util';

type DetailPostCardProps = {
  id: number | string;
  title: string;
  overview: string;
  created: string;
  rates: number;
  genres: string;
  commentCount: number;
};

const DetailPostCard = ({ id, title, overview, created, genres, commentCount, rates }: DetailPostCardProps) => {
  return (
    <div className="flex w-11/12 bg-white shadow-lg rounded-lg mx-4 mt-4 font-MyFont">
      <div className="flex items-start px-4 py-6 w-full">
        <img
          className="w-12 h-12 rounded-full object-cover mr-4 shadow"
          src="https://images.unsplash.com/photo-1605722625766-a4c989c747a4?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80"
          alt="avatar"
        />
        <Link to={`/post/${id}`} className="w-9/12 sm:10/12 lg:w-11/12 break-words hover:underline">
          <div className="flex items-center justify-between box-border mr-0 w-full">
            <h2 className="text-sm sm:text-lg font-semibold text-gray-900 -mt-1 ">
              {title.length > 15 ? `${title.slice(0, 15)}...` : title}
            </h2>
            <small className="text-sm text-gray-700">{dateFormat(created)}</small>
          </div>
          <p className="mt-2 text-gray-700 text-xs sm:text-sm w-full">{genres}</p>
          <p className="mt-2 text-gray-700 text-sm sm:text-base w-full">
            {overview.length > 120 ? `${overview.slice(0, 120)}...` : overview}
          </p>
          <div className="mt-2 text-gray-700 text-xs w-full flex">
            <div className="mr-2">
              <i className="fas fa-star"></i> : {rates}
            </div>
            <div>
              <i className="far fa-comment"></i> : {commentCount}
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default DetailPostCard;

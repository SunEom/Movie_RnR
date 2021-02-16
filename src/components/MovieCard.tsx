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
  const rateStars = [];
  for (let i = 0; i < 5; i++) {
    if (i < Math.ceil(rates / 2)) {
      rateStars.push(<i className="fas fa-star"></i>);
    } else {
      rateStars.push(<i className="far fa-star"></i>);
    }
  }

  const randomImg = () => {
    const random = Math.floor(Math.random() * 5);
    let imgURL;
    switch (random) {
      case 0:
        imgURL = 'https://cdn.pixabay.com/photo/2016/05/24/16/48/mountains-1412683_1280.png';
        break;
      case 1:
        imgURL =
          'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80';
        break;
      case 2:
        imgURL =
          'https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80';
        break;
      case 3:
        imgURL =
          'https://images.unsplash.com/photo-1561722798-9a732d141027?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1267&q=80';
        break;
      case 4:
        imgURL =
          'https://images.unsplash.com/photo-1535016120720-40c646be5580?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80';
        break;
    }
    return imgURL;
  };

  return (
    <div className="wrapper max-w-xs rounded-b-md shadow-xl overflow-hidden mx-6 my-10 relative break-words flex flex-col justify-between">
      <div>
        <img className="w-320 h-160" src={randomImg() as string} alt="montaña" style={{ width: '320px', height: '160px' }} />
        <div className="p-3 space-y-3 bg-gray-light flex flex-col justify-between ">
          <h3 className="text-gray-700 self-center text-xl font-MyFont mb-3">{title.length > 15 ? `${title.slice(0, 15)}...` : title}</h3>
          <p className="text-sm text-gray-900 leading-sm font-MyFont">{genres}</p>
          <p className="text-base text-gray-900 leading-sm font-MyFont">
            {overview.length > 120 ? `${overview.slice(0, 120)}...` : overview}
          </p>
        </div>
      </div>
      <div>
        <div className="flex justify-between mx-3 mb-2">
          <div className="flex items-center justify-between">
            <div>{rateStars}</div>
          </div>
          <div className="text-gray-darker flex justify-end items-center text-base">
            <i className="far fa-comment mr-1"></i>
            {commentCount === null ? 0 : commentCount}
          </div>
        </div>
        <Link
          to={`/post/${id}`}
          className="bg-gray-dark w-full flex justify-center py-2 text-white transition duration-300 hover:bg-teal-500 items-center font-MyFont"
        >
          <i className="fas fa-arrow-right mr-5"></i>
          Go to Detail
        </Link>
      </div>
    </div>
  );
};

export default MovieCard;
// https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80
// https://cdn.pixabay.com/photo/2016/05/24/16/48/mountains-1412683_1280.png
// https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60

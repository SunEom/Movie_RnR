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
  return (
    // <div className="p-4 w-11/12 sm:w-3/4 md:w-1/2 lg:w-1/3 min-w-20">
    //   <div className="h-full bg-gray-dark bg-opacity-40 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
    //     <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">{genres}</h2>
    //     <h1 className="title-font sm:text-2xl text-xl font-semibold text-white mb-3">
    //       {title.length > 15 ? `${title.slice(0, 15)}...` : title}
    //     </h1>

    //     <p className="leading-relaxed mb-3 break-words">{overview.length > 120 ? `${overview.slice(0, 120)}...` : overview}</p>

    //     <Link className="text-indigo-400 inline-flex items-center" to={`/post/${id}`}>
    //       Learn More
    //       <svg
    //         className="w-4 h-4 ml-2"
    //         viewBox="0 0 24 24"
    //         stroke="currentColor"
    //         strokeWidth="2"
    //         fill="none"
    //         strokeLinecap="round"
    //         strokeLinejoin="round"
    //       >
    //         <path d="M5 12h14"></path>
    //         <path d="M12 5l7 7-7 7"></path>
    //       </svg>
    //     </Link>
    //     <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
    //       <span className="text-gray-500 inline-flex items-center leading-none text-sm">
    //         <svg
    //           className="w-4 h-4 mr-1"
    //           stroke="currentColor"
    //           strokeWidth="2"
    //           fill="none"
    //           strokeLinecap="round"
    //           strokeLinejoin="round"
    //           viewBox="0 0 24 24"
    //         >
    //           <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
    //         </svg>
    //         {commentCount === null ? 0 : commentCount}
    //       </span>
    //     </div>
    //   </div>
    // </div>

    <div className="wrapper max-w-xs  rounded-b-md shadow-xl overflow-hidden mx-6 my-10 relative break-words flex flex-col justify-between">
      <div>
        <img src="https://cdn.pixabay.com/photo/2016/05/24/16/48/mountains-1412683_1280.png" alt="montaña" />
      </div>
      <div className="p-3 space-y-3 bg-gray-light flex flex-col justify-between ">
        <h3 className="text-gray-700 self-center text-xl font-MyFont mb-3">{title.length > 15 ? `${title.slice(0, 15)}...` : title}</h3>
        <p className="text-sm text-gray-900 leading-sm font-MyFont">{genres}</p>
        <p className="text-base text-gray-900 leading-sm font-MyFont">
          {overview.length > 120 ? `${overview.slice(0, 120)}...` : overview}
        </p>
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

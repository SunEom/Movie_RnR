import React from 'react';

type PaginationProps = {
  page: number;
  pageHandler: any;
  maxPage: number;
};

const Pagination = ({ page, pageHandler, maxPage }: PaginationProps) => {
  return (
    <ul className="flex justify-center mt-10 mx-5">
      {page > 1 && (
        <li className="mx-1 px-3 py-2 bg-gray-dark text-black rounded-lg ">
          <button
            className="flex items-center font-bold focus:outline-none"
            onClick={() => {
              pageHandler(page - 1);
            }}
          >
            <span className="mx-1">Previous</span>
          </button>
        </li>
      )}
      {page < maxPage && (
        <li className="mx-1 px-3 py-2 bg-gray-dark text-black hover:bg-gray-700 hover:text-gray-200 rounded-lg mx-5">
          <button
            className="flex items-center font-bold focus:outline-none"
            onClick={() => {
              pageHandler(page + 1);
            }}
          >
            <span className="mx-1">Next</span>
          </button>
        </li>
      )}
    </ul>
  );
};

export default Pagination;

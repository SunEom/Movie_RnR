import React from 'react';

type CreateProps = { onChange: (e: any) => void; onSubmit: (e: any) => void; onCheck: (e: any) => void };

const Create = ({ onChange, onSubmit, onCheck }: CreateProps) => {
  return (
    <>
      <div className="heading text-center font-bold text-2xl m-5 text-gray-800">New Post</div>

      <form
        onSubmit={onSubmit}
        className="editor mx-auto w-10/12 flex flex-col rounded text-gray-800 border border-gray-dark p-4 shadow-lg max-w-2xl"
      >
        <input
          name="title"
          className="title bg-gray-100 border border-gray-dark p-2 mb-4 outline-none"
          spellCheck="false"
          placeholder="Title"
          type="text"
          onChange={onChange}
        />

        <div className="bg-gray-200 text-sm mt-3 mb-6 ">
          <span className="mb-3">Genres</span>
          <div className="mt-2 flex flex-wrap items-center">
            <label className="mx-2 whitespace-nowrap">
              <input type="checkbox" name="Romance" className="form-checkbox h-5 w-5 text-gray-600" onChange={onCheck} />
              <span className="ml-2 text-gray-700">Romance</span>
            </label>

            <label className="mx-2 whitespace-nowrap flex items-center mt-2">
              <input type="checkbox" name="Action" className="form-checkbox h-5 w-5 text-red-600 " onChange={onCheck} />
              <span className="ml-2 text-gray-700">Action</span>
            </label>

            <label className="mx-2 whitespace-nowrap flex items-center mt-2">
              <input type="checkbox" name="Comedy" className="form-checkbox h-5 w-5 text-orange-600 " onChange={onCheck} />
              <span className="ml-2 text-gray-700">Comedy</span>
            </label>

            <label className="mx-2 whitespace-nowrap flex items-center mt-2">
              <input type="checkbox" name="Historical" className="form-checkbox h-5 w-5 text-yellow-600 " onChange={onCheck} />
              <span className="ml-2 text-gray-700">Historical</span>
            </label>

            <label className="mx-2 whitespace-nowrap flex items-center mt-2">
              <input type="checkbox" name="Horror" className="form-checkbox h-5 w-5 text-green-600 " onChange={onCheck} />
              <span className="ml-2 text-gray-700">Horror</span>
            </label>

            <label className="mx-2 whitespace-nowrap flex items-center mt-2">
              <input type="checkbox" name="Sci-Fi" className="form-checkbox h-5 w-5 text-teal-600 " onChange={onCheck} />
              <span className="ml-2 text-gray-700">Sci-Fi</span>
            </label>

            <label className="mx-2 whitespace-nowrap flex items-center mt-2">
              <input type="checkbox" name="Thriller" className="form-checkbox h-5 w-5 text-teal-600 " onChange={onCheck} />
              <span className="ml-2 text-gray-700">Thriller</span>
            </label>

            <label className="mx-2 whitespace-nowrap flex items-center mt-2">
              <input type="checkbox" name="Mystery" className="form-checkbox h-5 w-5 text-teal-600 " onChange={onCheck} />
              <span className="ml-2 text-gray-700">Mystery</span>
            </label>

            <label className="mx-2 whitespace-nowrap flex items-center mt-2">
              <input type="checkbox" name="Animation" className="form-checkbox h-5 w-5 text-teal-600 " onChange={onCheck} />
              <span className="ml-2 text-gray-700">Animation</span>
            </label>

            <label className="mx-2 whitespace-nowrap flex items-center mt-2">
              <input type="checkbox" name="Drama" className="form-checkbox h-5 w-5 text-teal-600 " onChange={onCheck} />
              <span className="ml-2 text-gray-700">Drama</span>
            </label>
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
            onChange={onChange}
            step={0.1}
          />
        </div>

        <textarea
          name="overview"
          className="description bg-gray-100 sec p-3 h-60 border border-gray-dark outline-none"
          spellCheck="false"
          placeholder="This movie is ..."
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
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <svg
            className="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
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
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
            />
          </svg>
          <div className="count ml-auto text-gray-400 text-xs font-semibold">0/300</div>
        </div>
        <div className="buttons flex">
          <button className="btn border border-gray-dark p-1 px-4 font-semibold cursor-pointer text-gray-500 ml-auto">Cancel</button>
          <button
            type="submit"
            className="btn border border-indigo-500 p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-indigo-500"
          >
            Post
          </button>
        </div>
      </form>
    </>
  );
};

export default Create;

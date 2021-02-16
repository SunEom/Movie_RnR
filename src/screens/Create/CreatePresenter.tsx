import React from 'react';

type CreateProps = { onChange: (e: any) => void; onSubmit: (e: any) => void; onCheck: (e: any) => void; overview: string };

const Create = ({ onChange, onSubmit, onCheck, overview }: CreateProps) => {
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
          className="description bg-gray-100 sec p-3 h-60 border border-gray-dark outline-none h-320"
          spellCheck="false"
          placeholder="This movie is ..."
          onChange={onChange}
          maxLength={300}
        ></textarea>

        <div className="icons flex text-gray-500 m-2">
          <div className="count ml-auto text-gray-400 text-xs font-semibold">{overview.length}/300</div>
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

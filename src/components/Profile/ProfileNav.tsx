import React from 'react';

type ProfileNavProps = {
  modeHandler: (mode: string) => void;
};

const ProfileNav = ({ modeHandler }: ProfileNavProps) => {
  return (
    <div className="col-span-12 w-full px-3 py-6 justify-center flex space-x-4 border-gray border-solid md:space-x-0 md:space-y-4 md:flex-col md:col-span-2 md:justify-start ">
      <button
        onClick={() => {
          modeHandler('basic');
        }}
        className="text-sm p-2 w-full bg-indigo-900 text-white text-center rounded font-bold"
      >
        Basic Information
      </button>

      <button
        onClick={() => {
          modeHandler('edit');
        }}
        className="text-sm p-2 bg-indigo-200 text-center rounded font-semibold hover:bg-indigo-700 hover:text-gray-200"
      >
        Another Information
      </button>

      <button
        onClick={() => {
          modeHandler('posts');
        }}
        className="text-sm p-2 bg-indigo-200 text-center rounded font-semibold hover:bg-indigo-700 hover:text-gray-200"
      >
        Another Something
      </button>
    </div>
  );
};

export default ProfileNav;

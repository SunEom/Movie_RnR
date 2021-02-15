import React from 'react';

type ProfileNavProps = {
  modeHandler: (mode: string) => void;
  isMy: boolean;
};

const ProfileNav = ({ modeHandler, isMy }: ProfileNavProps) => {
  const navColorChange = (order: number) => {
    document.querySelectorAll('.navbtn').forEach((btn, idx) => {
      if (idx === order) {
        btn.setAttribute('class', 'navbtn text-sm p-2 w-full bg-indigo-900 text-white text-center rounded font-bold');
      } else {
        btn.setAttribute(
          'class',
          'navbtn text-sm p-2 bg-indigo-200 text-center rounded font-semibold hover:bg-indigo-700 hover:text-gray-200'
        );
      }
    });
  };
  return (
    <div className="col-span-12 w-full px-3 py-6 justify-center flex space-x-4 border-gray border-solid md:space-x-0 md:space-y-4 md:flex-col md:col-span-2 md:justify-start ">
      <button
        onClick={(e) => {
          modeHandler('basic');
          navColorChange(0);
        }}
        className="navbtn text-sm p-2 w-full bg-indigo-900 text-white text-center rounded font-bold"
      >
        Basic Information
      </button>

      {isMy && (
        <button
          onClick={() => {
            modeHandler('edit');
            navColorChange(1);
          }}
          className="navbtn text-sm p-2 bg-indigo-200 text-center rounded font-semibold hover:bg-indigo-700 hover:text-gray-200"
        >
          Edit Profile
        </button>
      )}

      <button
        onClick={() => {
          modeHandler('posts');
          navColorChange(2);
        }}
        className="navbtn text-sm p-2 bg-indigo-200 text-center rounded font-semibold hover:bg-indigo-700 hover:text-gray-200"
      >
        View Postings
      </button>
    </div>
  );
};

export default ProfileNav;

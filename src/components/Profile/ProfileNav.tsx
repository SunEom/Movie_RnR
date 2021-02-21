import React from 'react';

type ProfileNavProps = {
  modeHandler: (mode: string) => void;
  isMy: boolean;
};

const ProfileNav = ({ modeHandler, isMy }: ProfileNavProps) => {
  const navColorChange = (order: number) => {
    document.querySelectorAll('.navbtn').forEach((btn, idx) => {
      if (idx === order) {
        btn.setAttribute('class', 'navbtn text-sm  mx-2 p-2 md:mt-4 bg-indigo-900 text-white text-center rounded font-bold');
      } else {
        btn.setAttribute(
          'class',
          'navbtn text-sm p-2 mx-2 bg-indigo-200 text-center md:mt-4 rounded font-semibold hover:bg-indigo-700 hover:text-gray-200'
        );
      }
    });
  };
  return (
    <div className="col-span-12 w-full px-3 py-6 justify-center flex flex-col space-x-4 border-gray border-solid md:space-x-0  md:flex-col md:col-span-2 md:justify-start">
      <div className="md:flex md:flex-col flex justify-center">
        <button
          onClick={(e) => {
            modeHandler('basic');
            navColorChange(0);
          }}
          className="navbtn text-sm p-2 md:mt-4 bg-indigo-900 text-white text-center rounded font-bold"
        >
          Basic Information
        </button>

        {isMy && (
          <button
            onClick={() => {
              modeHandler('edit');
              navColorChange(1);
            }}
            className="navbtn text-sm p-2 mx-2 md:mt-4 bg-indigo-200 text-center  rounded font-semibold hover:bg-indigo-700 hover:text-gray-200"
          >
            Edit Profile
          </button>
        )}

        {isMy && (
          <button
            onClick={() => {
              modeHandler('pwd');
              navColorChange(2);
            }}
            className="navbtn text-sm p-2 mx-2 md:mt-4 bg-indigo-200 text-center  rounded font-semibold hover:bg-indigo-700 hover:text-gray-200"
          >
            Change Password
          </button>
        )}
      </div>
      <div className="md:flex md:flex-col flex justify-center mt-3 md:mt-0">
        <button
          onClick={() => {
            modeHandler('posts');
            navColorChange(isMy ? 3 : 1);
          }}
          className="navbtn text-sm p-2 mx-2 md:mt-4 bg-indigo-200 text-center  rounded font-semibold hover:bg-indigo-700 hover:text-gray-200"
        >
          View Postings
        </button>

        {isMy && (
          <button
            onClick={() => {
              modeHandler('danger');
              navColorChange(4);
            }}
            className="navbtn text-sm p-2 mx-2 md:mt-4 bg-indigo-200 text-center  rounded font-semibold hover:bg-indigo-700 hover:text-gray-200"
          >
            Danger Zone
          </button>
        )}
      </div>
    </div>
  );
};

export default ProfileNav;

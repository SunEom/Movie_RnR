import React from 'react';

type PwdChangePresenterProps = {
  user: any;
  password: string;
  newPassword: string;
  newPasswordCheck: string;
  onSubmit: any;
  onChange: any;
};

const PwdChangePresenter = ({ user, password, newPassword, newPasswordCheck, onSubmit, onChange }: PwdChangePresenterProps) => {
  return (
    <>
      <div className="px-4 pt-4">
        <h3 className="text-2xl font-semibold font-Jua">Change Password</h3>
      </div>
      <form className="flex flex-col w-11/12 mx-auto p-4 border border-gray-200 bg-gray mt-10 font-Jua" onSubmit={onSubmit}>
        <div className="flex flex-col mb-4">
          <label htmlFor="password" className="mb-1 text-xs sm:text-sm md:text-lg tracking-wide text-gray-600">
            Current Password
          </label>

          <div className="relative">
            <div className="absolute flex border border-transparent left-0 top-0 h-full w-10">
              <div className="flex items-center justify-center rounded-tl rounded-bl z-10 bg-gray-100 text-gray-600 text-lg h-full w-full">
                <i className="fas fa-lock"></i>
              </div>
            </div>

            <input
              id="password"
              name="password"
              type="password"
              placeholder="Current Password"
              value={password}
              minLength={8}
              maxLength={15}
              onChange={onChange}
              className="text-sm sm:text-base relative w-full border rounded placeholder-gray-400 focus:border-indigo-400 focus:outline-none py-2 pr-2 pl-12"
            />
          </div>
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="newPassword" className="mb-1 text-xs sm:text-sm md:text-lg tracking-wide text-gray-600">
            New Password
          </label>

          <div className="relative">
            <div className="absolute flex border border-transparent left-0 top-0 h-full w-10">
              <div className="flex items-center justify-center rounded-tl rounded-bl z-10 bg-gray-100 text-black text-lg h-full w-full">
                <i className="fas fa-key"></i>
              </div>
            </div>

            <input
              id="newPassword"
              name="newPassword"
              type="password"
              placeholder="New Password"
              minLength={8}
              maxLength={15}
              value={newPassword}
              onChange={onChange}
              className="text-sm sm:text-base relative w-full border rounded placeholder-gray-400 focus:border-indigo-400 focus:outline-none py-2 pr-2 pl-12"
            />
          </div>

          <div className="flex flex-col mt-4">
            <label htmlFor="password" className="mb-1 text-xs sm:text-sm md:text-lg tracking-wide text-gray-600">
              New Password Check
            </label>

            <div className="relative">
              <div className="absolute flex border border-transparent left-0 top-0 h-full w-10">
                <div className="flex items-center justify-center rounded-tl rounded-bl z-10 bg-gray-100 text-gray-600 text-lg h-full w-full">
                  <i className="fas fa-check"></i>
                </div>
              </div>

              <input
                id="newPasswordCheck"
                name="newPasswordCheck"
                type="password"
                placeholder="New Password Check"
                maxLength={15}
                minLength={8}
                value={newPasswordCheck}
                onChange={onChange}
                className={`text-sm sm:text-base relative w-full border rounded placeholder-gray-400 focus:border-indigo-400 focus:outline-none py-2 pr-2 pl-12 ${
                  newPassword !== newPasswordCheck && 'border-red-500'
                }`}
              />
            </div>
          </div>

          {newPassword !== newPasswordCheck && (
            <span className="flex items-center font-medium tracking-wide text-red-500 text-base mt-1 ml-1">
              New password and Check should be same!
            </span>
          )}
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="btn border border-gray-dark p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-gray-dark"
          >
            Save
          </button>
        </div>
      </form>
    </>
  );
};

export default PwdChangePresenter;

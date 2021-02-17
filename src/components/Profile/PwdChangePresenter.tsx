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
    <div className="px-4 pt-4 flex flex-col justify center">
      <div>
        <h3 className="text-2xl font-semibold font-Jua">Change Password</h3>
      </div>
      <form action="#" className="flex flex-col space-y-8 w-1/2 items-center pt-5" onSubmit={onSubmit}>
        <div className="form-item flex flex-col w-full">
          <label className="text-xl font-Jua">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={onChange}
            className="w-1/2 appearance-none text-black  rounded shadow py-1 px-2  mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200 "
          />
        </div>
        <div className="form-item flex flex-col w-full">
          <label className="text-xl font-Jua">New Password</label>
          <input
            type="password"
            id="newPassword"
            value={newPassword}
            onChange={onChange}
            className="w-1/2 appearance-none text-black  rounded shadow py-1 px-2  mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200"
          />
        </div>
        <div className="form-item flex flex-col w-full">
          <label className="text-xl font-Jua">New Password Check</label>
          <input
            type="password"
            id="newPasswordCheck"
            value={newPasswordCheck}
            onChange={onChange}
            className="w-1/2 appearance-none text-black  rounded shadow py-1 px-2  mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200"
          />
        </div>

        <div className="flex justify-end mr-10">
          <button
            type="submit"
            className="btn border border-gray-dark p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-gray-dark"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default PwdChangePresenter;

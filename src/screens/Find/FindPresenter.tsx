import React from 'react';
import { Link } from 'react-router-dom';

type FindProps = {
  onChange: any;
  onSubmit: any;
  checkUser: boolean;
  onSecondSubmit: any;
};

const Find = ({ onChange, onSubmit, checkUser, onSecondSubmit }: FindProps) => {
  return (
    <>
      {checkUser ? (
        <div className="w-screen flex justify-center sm:pt-20">
          <div className="mt-5 md:mt-0 md:col-span-2 w-8/12 sm:w-8/12 md:w-6/12 lg:w-5/12 bg-white bg-opacity-50 rounded-lg">
            <form action="#" method="POST" onSubmit={onSecondSubmit}>
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 ">
                  <div className="text-lg font-bold text-center pb-6">Input new password</div>
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-4">
                      <label htmlFor="id" className="block text-sm font-medium ">
                        Password
                      </label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        className="px-2 mt-1 bg-white h-7 bg-opacity-50 border border-gray-dark focus:ring-indigo-500 focus:border-indigo-500 block w-2/3 shadow-sm sm:text-sm border-gray-300 rounded-md"
                        required
                        onChange={onChange}
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label htmlFor="nickname" className="block text-sm font-medium ">
                        Password Check
                      </label>
                      <input
                        type="password"
                        name="passwordCheck"
                        id="passwordCheck"
                        className="px-2 mt-1 h-7 bg-white bg-opacity-50 border border-gray-dark focus:ring-indigo-500 focus:border-indigo-500 block w-2/3 shadow-sm sm:text-sm border-gray-300 rounded-md"
                        required
                        onChange={onChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-light text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md font-black text-base text-white bg-gray-darker hover:bg-black-lighter focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <div className="w-screen flex justify-center sm:pt-20">
          <div className="mt-5 md:mt-0 md:col-span-2 w-8/12 sm:w-8/12 md:w-6/12 lg:w-5/12 bg-white bg-opacity-50 rounded-lg">
            <form action="#" method="POST" onSubmit={onSubmit}>
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 ">
                  <div className="text-lg font-bold text-center pb-6">Find a Password</div>
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="id" className="block text-sm font-medium ">
                        ID
                      </label>
                      <input
                        type="text"
                        name="id"
                        id="id"
                        className="px-2 mt-1 bg-white h-7 bg-opacity-50 border border-gray-dark focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        required
                        onChange={onChange}
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label htmlFor="nickname" className="block text-sm font-medium ">
                        Nickname
                      </label>
                      <input
                        type="text"
                        name="nickname"
                        id="nickname"
                        className="px-2 mt-1 h-7 bg-white bg-opacity-50 border border-gray-dark focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        required
                        onChange={onChange}
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="gender" className="block text-sm font-medium ">
                        Gender
                      </label>
                      <select
                        id="gender"
                        name="gender"
                        className="px-2 mt-1 block w-full py-2 px-3 border border-gray-300 bg-white bg-opacity-50 border border-gray-dark rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        required
                        onChange={onChange}
                      >
                        <option>Man</option>
                        <option>Woman</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-light text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md font-black text-base text-white bg-gray-darker hover:bg-black-lighter focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Check
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Find;

import React from 'react';

type JoinProps = { onChange: (e: any) => void; onSubmit: (e: any) => void; idConfirm: any; nickConfirm: any };

const Join = ({ onSubmit, onChange, idConfirm, nickConfirm }: JoinProps) => {
  return (
    <div className="w-screen flex justify-center sm:pt-20">
      <div className="mt-5 md:mt-0 md:col-span-2 w-10/12 sm:w-8/12 md:w-6/12 lg:w-5/12 bg-white bg-opacity-50 rounded-lg">
        <form action="#" method="POST" onSubmit={onSubmit}>
          <div className="shadow overflow-hidden sm:rounded-md">
            <div className="px-4 py-5 ">
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="id" className="block text-sm font-medium ">
                    ID
                  </label>
                  <div className="flex ">
                    <input
                      type="text"
                      name="id"
                      id="id"
                      className="px-2 mt-1 min-w-10 bg-white h-7 bg-opacity-50 border border-gray-dark focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      required
                      onChange={onChange}
                    />
                    <button className="mx-5 border text-xs border-black px-3 rounded-md" onClick={idConfirm}>
                      Confirmation
                    </button>
                  </div>
                </div>
                <div className="col-span-6 sm:col-span-3"></div>
                <div className="col-span-3 sm:col-span-3">
                  <label htmlFor="password" className="block text-sm font-medium ">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="px-2 mt-1 bg-white h-7 bg-opacity-50 border border-gray-dark focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    required
                    onChange={onChange}
                  />
                </div>

                <div className="col-span-3 sm:col-span-3">
                  <label htmlFor="password_check" className="block text-sm font-medium ">
                    Password Check
                  </label>
                  <input
                    type="password"
                    name="password_check"
                    id="password_check"
                    className="px-2 mt-1 h-7 bg-white bg-opacity-50 border border-gray-dark focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    required
                    onChange={onChange}
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="nickname" className="block  text-sm font-medium ">
                    Nickname
                  </label>
                  <div className="flex">
                    <input
                      type="text"
                      name="nickname"
                      id="nickname"
                      className="px-2 min-w-10 mt-1 h-7 bg-white bg-opacity-50 border border-gray-dark focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      required
                      onChange={onChange}
                    />
                    <button className="mx-5 border text-xs border-black px-3 rounded-md" onClick={nickConfirm}>
                      Confirmation
                    </button>
                  </div>
                </div>
                <div className="col-span-6 sm:col-span-3"></div>

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
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Join;

import React from 'react';

type BasicProfilePresenterProps = {
  user: any;
};

const BasicProfilePresenter = ({ user }: BasicProfilePresenterProps) => {
  return (
    <div className="px-4 pt-4">
      <form action="#" className="flex flex-col space-y-8">
        <div>
          <h3 className="text-2xl font-semibold font-Jua">Basic Information</h3>
        </div>

        <div className="form-item">
          <label className="text-xl font-Jua">ID</label>
          <input
            type="text"
            value={user.user_id}
            className="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2  mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200"
            disabled
          />
        </div>

        <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4">
          <div className="form-item w-full">
            <label className="text-xl font-Jua">Nickname</label>
            <input
              type="text"
              value={user.nickname}
              className="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200 text-opacity-25 "
              disabled
            />
          </div>

          <div className="form-item w-full">
            <label className="text-xl font-Jua">Gender</label>
            <input
              type="text"
              value={user.gender}
              className="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200 text-opacity-25 "
              disabled
            />
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold font-Jua">More About Me</h3>
        </div>

        <div className="form-item w-full">
          <label className="text-xl font-Jua">Biography</label>
          <textarea
            cols={30}
            rows={10}
            className="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200 text-opacity-25 "
            disabled
            value={user.biography}
          ></textarea>
        </div>

        <div>
          <h3 className="text-2xl font-semibold font-Jua">My Social Media</h3>
        </div>

        <div className="form-item">
          <label className="text-xl font-Jua">Instagram</label>
          <input
            type="text"
            value={user.instagram}
            className="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200 text-opacity-25 "
            disabled
          />
        </div>
        <div className="form-item">
          <label className="text-xl font-Jua">Facebook</label>
          <input
            type="text"
            value={user.facebook}
            className="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200 text-opacity-25 "
            disabled
          />
        </div>
        <div className="form-item">
          <label className="text-xl font-Jua">Twitter</label>
          <input
            type="text"
            value={user.twitter}
            className="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2  mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200  "
            disabled
          />
        </div>
      </form>
    </div>
  );
};

export default BasicProfilePresenter;

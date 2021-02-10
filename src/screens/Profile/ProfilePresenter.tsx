import React from 'react';
import ActivityIndicator from '../../components/ActivityIndicator';

type ProfileProps = {
  user: any;
};

const Profile = ({ user }: ProfileProps) => {
  return (
    <div className="flex justify-center pt-10">
      <div className=" w-11/12 lg:w-1/2 md:px-4 lg:px-6 py-5">
        <div className="bg-white shadow-xl">
          <div className="">
            <img
              src="https://images.pexels.com/photos/956999/milky-way-starry-sky-night-sky-star-956999.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
              className="h-56 w-full border-white border-8 hover:opacity-25"
            />
            {user.nickname}
            {user.gender}
          </div>
          <div className="px-4 py-4 md:px-10"></div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

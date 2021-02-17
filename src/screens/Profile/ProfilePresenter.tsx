import React from 'react';
import ProfileNav from '../../components/Profile/ProfileNav';
import BasicProfile from '../../components/Profile/BasicProfileContainer';
import EditProfile from '../../components/Profile/EditProfileContainer';
import ViewPosts from '../../components/Profile/ViewPostsContainer';
import PwdChange from '../../components/Profile/PwdChangeContainer';

type ProfileProps = {
  user: any;
  modeHandler: any;
  mode: 'basic' | 'edit' | 'posts' | 'pwd';
  setMode: any;
};

const Profile = ({ user, modeHandler, mode, setMode }: ProfileProps) => {
  return (
    <>
      {user && (
        <div className="w-full relative mt-10 rounded my-24 overflow-hidden bg-gray">
          <div className="top h-64 w-full bg-blue-600 overflow-hidden relative">
            <img
              src="https://images.unsplash.com/photo-1503264116251-35a269479413?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
              alt=""
              className="bg w-full h-full object-cover object-center absolute z-0"
            />
            <div className="flex flex-col justify-center items-center relative h-full bg-gray-darker bg-opacity-50 text-white">
              <img
                src="https://images.unsplash.com/photo-1605722625766-a4c989c747a4?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80"
                alt=""
                className="h-24 w-24 object-cover rounded-full"
              />
              <h1 className="text-2xl font-MyFont">{user.nickname}</h1>
            </div>
          </div>
          <div className="grid grid-cols-12 bg-gray ">
            <ProfileNav isMy={true} modeHandler={modeHandler} />
            <div className="col-span-12 md:border-solid md:border-l md:border-black md:border-opacity-25 h-full pb-12 md:col-span-10">
              {mode === 'basic' ? (
                <BasicProfile user={user} />
              ) : mode === 'edit' ? (
                <EditProfile user={user} setMode={setMode} />
              ) : mode === 'pwd' ? (
                <PwdChange user={user} setMode={setMode} />
              ) : (
                <ViewPosts user={user} />
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;

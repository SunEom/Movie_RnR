import React from 'react';

type CommentsProps = {
  user_id: string;
  contents: string;
};

const Comments = ({ user_id, contents }: CommentsProps) => {
  return (
    <div className="bg-white rounded-lg p-3  flex flex-col justify-center items-center md:items-start shadow-lg mb-4">
      <div className="flex flex-row justify-center items-center mr-2">
        <i className="fas fa-user-circle text-xl mr-3"></i>
        <h3 className="text-purple-600 font-semibold text-base text-center md:text-left ">{user_id}</h3>
      </div>
      <p className="text-gray-600 text-base text-center md:text-left ">{contents}</p>
    </div>
  );
};

export default Comments;

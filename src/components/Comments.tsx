import React, { useState } from 'react';

type CommentsProps = {
  commenter: string;
  contents: string;
  user_id: string;
  onDelete: any;
  modeToggle: any;
  id: number;
  onChange: any;
  onSave: any;
};

const Comments = ({ commenter, contents, user_id, onDelete, modeToggle, id, onChange, onSave }: CommentsProps) => {
  const [mode, setMode] = useState('default');
  const [comment, setComment] = useState(contents);

  return (
    <>
      {mode === 'default' && (
        <div className="bg-white rounded-lg p-3  flex flex-col justify-center items-center md:items-start shadow-lg mb-4">
          <div className="flex flex-row justify-center items-center mr-2">
            <i className="fas fa-user-circle text-xl mr-3"></i>
            <h3 className="text-purple-600 font-semibold text-base text-center md:text-left ">{commenter}</h3>
          </div>
          <p className="text-gray-600 text-base text-center md:text-left ">{comment}</p>
          {commenter === user_id && (
            <div className="flex justify-end w-full">
              <button
                className="mx-2 bg-gray px-3 py-1 rounded-md focus:outline-none"
                onClick={() => {
                  modeToggle(mode, setMode);
                }}
              >
                Edit
              </button>
              <button
                className="mx-2 bg-gray px-3 py-1 rounded-md focus:outline-none"
                onClick={() => {
                  onDelete(id);
                }}
              >
                Delete
              </button>
            </div>
          )}
        </div>
      )}
      {mode === 'edit' && commenter === user_id && (
        <div className="bg-white rounded-lg p-3  flex flex-col justify-center items-center md:items-start shadow-lg mb-4">
          <div className="flex flex-row justify-center items-center mr-2">
            <i className="fas fa-user-circle text-xl mr-3"></i>
            <h3 className="text-purple-600 font-semibold text-base text-center md:text-left ">{commenter}</h3>
          </div>
          <input
            className="border-b-2 w-full my-2 border-gray focus:outline-none"
            type="text"
            value={comment}
            onChange={(e) => {
              onChange(e.target.value, setComment);
            }}
          />

          {commenter === user_id && (
            <div className="flex justify-end w-full">
              <button
                className="mx-2 bg-gray px-3 py-1 rounded-md focus:outline-none"
                onClick={() => {
                  onSave({ id, commenter, contents: comment });
                  modeToggle(mode, setMode);
                }}
              >
                Save
              </button>
              <button
                className="mx-2 bg-gray px-3 py-1 rounded-md focus:outline-none"
                onClick={(e) => {
                  e.preventDefault();
                  modeToggle(mode, setMode);
                }}
              >
                Cancel
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Comments;

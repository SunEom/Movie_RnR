import React from 'react';

type DangerPresenterProps = {
  onSubmit: any;
};

const DangerPresenter = ({ onSubmit }: DangerPresenterProps) => {
  return (
    <form className="px-4 pt-4 font-Jua" onSubmit={onSubmit}>
      <div>
        <h3 className="text-2xl font-semibold text-red-700 mb-3">Danger Zone</h3>
      </div>
      <p className="text-xl">Once you delete your account, there is no going back. Please be certain.</p>
      <button className="px-3 text-lg mt-4 py-1 rounded-md text-red-700 bg-gray-dark border-black hover:bg-red-700 hover:text-white ">
        Delete your account
      </button>
    </form>
  );
};

export default DangerPresenter;

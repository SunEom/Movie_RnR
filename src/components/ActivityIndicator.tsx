import React from 'react';

const ActivityIndicator = () => {
  return (
    <div className="w-full h-full flex justify-center">
      <div className="text-gray-darker mt-32 sm:mt-32 md:mt-52 lg:mt-80">
        <i className="fas fa-circle-notch fa-spin fa-5x"></i>
      </div>
    </div>
  );
};

export default ActivityIndicator;

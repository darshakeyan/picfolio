import React from 'react';

const BackgroundImage = ({ imageUrl, children }: any) => {
  return (
    <div
      className={`bg-cover bg-center h-screen`}
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      {children}
    </div>
  );
};

export default BackgroundImage;

import React, { useState } from 'react';

type UnsplashImageProps = {
  imageSource: string;
};

const UnsplashImage = ({ imageSource }: UnsplashImageProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={imageSource} className="border-1 border-gray-300 rounded-lg" />
      {isHovered && (
        <button
          className="absolute top-2 right-2 bg-white bg-opacity-75 p-2 rounded-md transition-opacity duration-300 opacity-0 group-hover:opacity-100"
          onClick={(e) => {
            e.stopPropagation();
            // Handle bookmark action
          }}
        >
          Bookmark
        </button>
      )}
    </div>
  );
};

export default UnsplashImage;

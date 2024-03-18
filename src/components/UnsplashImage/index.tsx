import React, { useState, useContext } from 'react';
import { BookmarkContext } from 'context/BookmarkContext';
import Add from 'assets/add.svg';
import Remove from 'assets/minus.svg';

type UnsplashImageProps = {
  imageData: any;
};

const UnsplashImage = ({ imageData }: UnsplashImageProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const { bookmarks, toggleBookmark } = useContext(BookmarkContext);
  const isBookmarked = bookmarks.some((item: any) => item.id === imageData.id);
  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={imageData?.urls?.regular}
        className="border-1 border-gray-300 rounded-lg w-full h-full object-cover filter hover:blur-sm transition duration-300"
      />
      {isHovered && (
        <button
          className={`absolute top-2 right-2 bg-white pacity-75 p-1 rounded-md transition-opacity duration-300 opacity-0 group-hover:opacity-100`}
          onClick={(e) => {
            e.stopPropagation();
            toggleBookmark(imageData);
          }}
        >
          {isBookmarked ? <img src={Remove} /> : <img src={Add} />}
        </button>
      )}
    </div>
  );
};

export default UnsplashImage;

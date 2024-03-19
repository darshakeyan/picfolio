import React from 'react';
import UnslashImage from 'components/UnsplashImage';

type MansonryProps = {
  photos: any;
};

const Mansonry = ({ photos }: MansonryProps) => {
  return (
    <div className="p-4 m-4 bg-gray-300 bg-opacity-30 border-1 border-white rounded-lg">
      {photos?.length === 0 && (
        <div className="flex justify-center items-center">
          <div className="text-lg font-bold">No Pictures Bookmarked Yet</div>
        </div>
      )}
      <div className="grid grid-cols-1 gap-x-3 gap-y-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {photos?.map((result: any) => {
          return (
            <div
              key={result?.id}
              className={`h-${result?.height} w-${result?.width}`}
            >
              <UnslashImage imageData={result} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Mansonry;

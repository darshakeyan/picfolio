import React, { useState, useEffect } from 'react';
import { useRandomPhoto, usePhotos } from 'queries/images';
import BackgroundImage from 'components/Background';
import Input from 'components/Input';
import Masonry from 'components/Masonry';
import UnslashImage from 'components/UnsplashImage';
import Spinner from 'components/Spinner';
import { useDebounce } from 'hooks/useDebounce';
import { useInView } from 'react-intersection-observer';

const Home = () => {
  const { ref, inView } = useInView();
  const [query, setQuery] = useState<string>('');
  const debouncedSearchValue = useDebounce(query || '', 600);
  const { data: randomImage } = useRandomPhoto();
  const {
    data: photos,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    fetchPreviousPage,
    isFetchingPreviousPage,
    hasNextPage,
  } = usePhotos(debouncedSearchValue);

  const photosData = photos?.pages.flatMap((page) => {
    return page?.data?.results?.map((movie: any) => {
      try {
        return movie;
      } catch (e) {
        console.log('Error', { movie });
      }
    });
  });

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  return (
    <BackgroundImage imageUrl={randomImage?.data?.urls?.regular}>
      <div className="flex flex-col h-screen">
        <Input onChange={setQuery} />
        <div className="p-4 m-4 bg-white bg-opacity-30 border-1 border-white rounded-lg h-auto overflow-y-scroll">
          <div className="flex justify-center items-center">
            {photosData?.length === 0 && (
              <div className="text-gray-800 text-lg font-bold">
                Images Display here
              </div>
            )}
          </div>
          {isLoading ? (
            <div className="flex items-center justify-center">
              <Spinner />
            </div>
          ) : (
            <div className="">
              {photosData && photosData?.length > 0 && (
                <div className="grid grid-cols-1 gap-x-3 gap-y-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {photosData?.map((result: any) => {
                    return (
                      <div
                        key={result?.id}
                        className={`h-${result?.height} w-${result?.width}`}
                      >
                        <UnslashImage imageData={result} />
                      </div>
                    );
                  })}
                  <div className="h-12 w-12">
                    {hasNextPage && !isFetchingNextPage && <div ref={ref} />}
                  </div>
                  {isFetchingNextPage && (
                    <div className="flex items-center justify-center">
                      <Spinner />
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </BackgroundImage>
  );
};

export default Home;

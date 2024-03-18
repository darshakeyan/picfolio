import React from 'react';
import { useRandomPhoto } from 'queries/images';
import BackgroundImage from 'components/Background';
import Input from 'components/Input';

const Home = () => {
  const { data: randomImage } = useRandomPhoto();
  // const { data: photos } = useInfinitePhotos();
  // console.log(photos);
  return (
    <BackgroundImage imageUrl={randomImage?.data?.urls?.regular}>
      <div className="p-4">
        <Input />
      </div>
    </BackgroundImage>
  );
};

export default Home;

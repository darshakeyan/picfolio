import React, { useContext } from 'react';
import { BookmarkContext } from 'context/BookmarkContext';
import Mansonry from 'components/Masonry';

const Starred = () => {
  const { bookmarks } = useContext(BookmarkContext);
  return <Mansonry photos={bookmarks} />;
};

export default Starred;

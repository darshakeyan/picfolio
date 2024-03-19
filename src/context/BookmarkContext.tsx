import React, { useState, createContext, useEffect } from 'react';

interface IContextType {}

type BookmarkContextProps = {};

const initialValue = {};

export const BookmarkContext = createContext<any>(initialValue);

export const BookmarkProvider = ({ children }: any) => {
  const [query, setQuery] = useState<any>('');
  const [bookmarks, setBookmarks] = useState<any>([]);

  const toggleBookmark = (imageData: any) => {
    if (bookmarks.some((item: any) => item.id === imageData?.id)) {
      setBookmarks(bookmarks.filter((item: any) => item.id !== imageData?.id));
    } else {
      setBookmarks([...bookmarks, imageData]);
    }
  };

  return (
    <BookmarkContext.Provider
      value={{ bookmarks, toggleBookmark, query, setQuery }}
    >
      {children}
    </BookmarkContext.Provider>
  );
};

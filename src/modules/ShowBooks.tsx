import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faEdit } from '@fortawesome/free-solid-svg-icons';

export const ShowBooks = () => {
  interface SavedBook {
    id: string;
    title: string;
    thumbnail: string;
    pageCount: number;
    authors: string;
  }

  const [savedBooks, setSavedBooks] = React.useState<SavedBook[]>([]);

  useEffect(() => {
    const livros = JSON.parse(localStorage.getItem('SavedBooks') || '[]');
    setSavedBooks(livros);
  }, []);

  const removeBook = (items: SavedBook) => {
    const removeBooks = savedBooks.filter(book => book.id !== items.id);
    setSavedBooks(removeBooks);
    localStorage.setItem('SavedBooks', JSON.stringify(removeBooks));
  };

  const editBook = (items: SavedBook) => {};
  return (
    <div className="flex flex-wrap justify-center items-center">
      {savedBooks.map((items: SavedBook) => (
        <div
          key={items.id}
          className="container flex bg-[#333958]  md:w-[25%] w-[90%] m-4 p-4 rounded-2xl text-white text-center"
        >
          <div>
            <Image
              src={items.thumbnail}
              width={180}
              height={200}
              alt={`image of ${items.title}`}
              className="rounded-2xl w-[200px] h-[200px]"
            />
          </div>
          <div className="w-full flex flex-col items-center justify-between">
            <div className="flex flex-col justify-center items-center w-full">
              <h1 className="text-[1.4rem] m-1 font-bold">{items.title}</h1>
              <h2>{items.authors}</h2>
            </div>
            <div className="flex flex-col justify-center items-center w-full ">
              <h2 className="m-[5px]">
                Readed Pages: 0 / <span className="font-bold text-amber-300">{items.pageCount}</span>
              </h2>
              <div className="progress-bar w-[90%] h-2 p-1 bg-[#4d4d4d] rounded-2xl" id="progress-bar"></div>
            </div>
          </div>
          <div className="items h-full ">
            <FontAwesomeIcon
              icon={faClose}
              className="text-[1.5rem] cursor-pointer md:hidden h-full flex items-center "
              onClick={() => removeBook(items)}
            />
            <FontAwesomeIcon
              icon={faEdit}
              className="text-[1.5rem] cursor-pointer md:hidden h-full flex items-center "
              onClick={() => editBook(items)}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

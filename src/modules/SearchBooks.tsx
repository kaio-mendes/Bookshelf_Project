'use client';
import Button from '@/components/Button';
import Image from 'next/image';
import { useEffect, useState } from 'react';
const SearchBooks = ({ url }: { url: string }) => {
  const [books, setBooks] = useState([]);
  const [load, setLoad] = useState(false);
  useEffect(() => {
    if (!url) return; // Evita requisições desnecessárias
    setLoad(true);

    fetch(`https://www.googleapis.com/books/v1/volumes?q=${url}&startIndex=${0}&maxResults=${15}`)
      .then(response => response.json())
      .then(data => setBooks(data.items || []))
      .catch(error => console.log('Erro ao buscar livros:', error));
  }, [url]); // Busca apenas quando 'url' mudar

  return (
    <div className="w-full  ">
      {books.length > 0 ? (
        <div className="w-full flex flex-col items-center">
          {books.map((book: any) => (
            <div
              key={book.id}
              className="container flex bg-[#333958]  md:w-[35%] w-[90%] m-4 p-4 rounded-2xl text-white"
            >
              <div>
                <Image
                  src={
                    book.volumeInfo.imageLinks?.thumbnail ||
                    'https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM='
                  }
                  width={180}
                  height={200}
                  alt={`image of ${book.volumeInfo.title}`}
                  className="rounded-2xl"
                />
              </div>
              <div className="w-full flex flex-col items-center justify-between">
                <div className="flex flex-col justify-center items-center w-full">
                  <h1 className="text-[1.4rem] m-1 font-bold">{book.volumeInfo.title}</h1>
                  <h2>{book.volumeInfo.authors}</h2>
                </div>
                <p className="bg-[#0C87D9] w-[auto] p-2 h-[1.5rem] rounded-2xl flex items-center justify-center  font-bold">
                  {book.volumeInfo.categories || 'sem categorias'}
                </p>
                <div className="flex flex-col justify-center items-center w-full ">
                  <h2 className="m-[5px]">pages: {book.volumeInfo.pageCount}</h2>
                  <button className="bg-[#ffa500] w-[5rem] h-[2rem] rounded-2xl hover:bg-[#ffd700] cursor-pointer">
                    Save
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center">Nenhum resultado encontrado...</p>
      )}
      <div className={`${!load ? 'hidden' : 'w-full flex justify-center mt-4'}`}>
        <ul className="flex space-x-2 w-full justify-center">
          <li className="bg-[#0C87D9] text-white w-10 h-10 flex justify-center items-center rounded-md cursor-pointer hover:bg-[#085a92] active:bg-[#064070]">
            1
          </li>
          <li className="bg-[#0C87D9] text-white w-10 h-10 flex justify-center items-center rounded-md cursor-pointer hover:bg-[#085a92] active:bg-[#064070]">
            2
          </li>
          <li className="bg-[#0C87D9] text-white w-10 h-10 flex justify-center items-center rounded-md cursor-pointer hover:bg-[#085a92] active:bg-[#064070]">
            3
          </li>
          <li className="bg-[#0C87D9] text-white w-10 h-10 flex justify-center items-center rounded-md cursor-pointer hover:bg-[#085a92] active:bg-[#064070]">
            4
          </li>
          <li className="bg-[#0C87D9] text-white w-10 h-10 flex justify-center items-center rounded-md cursor-pointer hover:bg-[#085a92] active:bg-[#064070]">
            5
          </li>
          <li className="bg-[#0C87D9] text-white w-10 h-10 flex justify-center items-center rounded-md cursor-pointer hover:bg-[#085a92] active:bg-[#064070]">
            6
          </li>
          <li className="bg-[#0C87D9] text-white w-10 h-10 flex justify-center items-center rounded-md cursor-pointer hover:bg-[#085a92] active:bg-[#064070]">
            7
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SearchBooks;

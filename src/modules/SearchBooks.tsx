'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
const SearchBooks = ({ url }: { url: string }) => {
  interface SavedBook {
    id: string;
    title: string;
    thumbnail: string;
    pageCount: number;
    authors: string;
  }

  const [books, setBooks] = useState([]);
  const [load, setLoad] = useState(false);
  const [start, setStart] = useState(0);

  function Pages(page: number) {
    setStart((page - 1) * 5);
  }
  useEffect(() => {
    if (!url) return; // Evita requisições desnecessárias
    setLoad(true);

    fetch(`https://www.googleapis.com/books/v1/volumes?q=${url}&startIndex=${start}&maxResults=5`)
      .then(response => response.json())
      .then(data => setBooks(data.items || []))
      .catch(error => console.log('Erro ao buscar livros:', error));
  }, [url, start]); // Busca apenas quando 'url' mudar

  function saveBooks(book: any) {
    const MyBooks: SavedBook = {
      id: book.id,
      title: book.volumeInfo.title,
      thumbnail:
        book.volumeInfo.imageLinks?.thumbnail ||
        'https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=',
      pageCount: book.volumeInfo.pageCount,
      authors: book.volumeInfo.authors,
    };
    const livrosSalvos = JSON.parse(localStorage.getItem('SavedBooks') || '[]');
    const livrosAtualizados = [...livrosSalvos, MyBooks];

    localStorage.setItem('SavedBooks', JSON.stringify(livrosAtualizados));
  }

  return (
    <div className="w-full ">
      <div className="w-full items-center justify-center flex" id="showMessage"></div>
      {books.length > 0 ? (
        <div className="w-full flex flex-col items-center">
          {books.map((book: any) => (
            <div
              key={book.id}
              className="container flex bg-[#333958]  md:w-[35%] w-[90%] m-4 p-4 rounded-2xl text-white text-center"
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
                  <button
                    className="bg-[#ffa500] w-[5rem] h-[2rem] rounded-2xl hover:bg-[#ffd700] cursor-pointer"
                    onClick={() => saveBooks(book)}
                  >
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
          {[1, 2, 3, 4, 5, 6, 7].map(num => (
            <li
              key={num}
              className="bg-[#0C87D9] text-white w-10 h-10 flex justify-center items-center rounded-md cursor-pointer hover:bg-[#085a92] active:bg-[#064070]"
              onClick={() => Pages(num)}
            >
              {num}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchBooks;

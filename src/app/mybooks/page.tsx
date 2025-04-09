'use client';
import { ShowBooks } from '@/modules/ShowBooks';

export default function MyBooks() {
  const livro = JSON.parse(localStorage.getItem('SavedBooks') || '[]');
  const countBooks = livro.length;
  return (
    <div>
      <div className="flex flex-col m-4">
        <h1 className="text-2xl font-bold text-[#161d40]">Livros: {countBooks}</h1>
        <h1 className="text-2xl font-bold text-[#161d40]">Páginas: ?</h1>
      </div>
      <ShowBooks />
    </div>
  );
}

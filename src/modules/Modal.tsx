'use client';

import Button from '@/components/Button';
import { Inputs } from '@/components/Inputs';
import { ModalContext } from '@/context/ModalContex';
import { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import SearchBooks from './SearchBooks';

export const Modal = () => {
  const modalContext = useContext(ModalContext);
  const [url, setUrl] = useState('');
  const [searchQuery, setSearchQuery] = useState(''); // Guarda a URL que será buscada

  if (!modalContext) return null;
  const { showModal, toggleModal } = modalContext;

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setUrl(event.target.value);
  }

  function handleSearch() {
    setSearchQuery(url);
  }

  return showModal ? (
    <div className="left-0 right-0 bottom-0 bg-white z-20 absolute top-15 flex justify-start items-center flex-col w-full">
      <i className="w-full flex justify-end text-3xl">
        <FontAwesomeIcon icon={faClose} className="cursor-pointer m-4 text-[#161d40]" onClick={toggleModal} />
      </i>
      <h1 className="text-3xl font-bold">Find Books</h1>
      <div className="flex h-16 mt-2">
        <Inputs placeholder="Search books..." className="h-10 w-[300px] mr-2" onChange={handleChange} value={url} />
        <Button text="Search" onClick={handleSearch} />
      </div>
      <SearchBooks url={searchQuery} />
    </div>
  ) : null;
};

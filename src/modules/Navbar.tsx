'use client';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faMagnifyingGlass, faBars, faClose } from '@fortawesome/free-solid-svg-icons';
import { Inputs } from '@/components/Inputs';
import { useState } from 'react';

export const Navbar = () => {
  const [toogleMenu, setToogleMenu] = useState(false);
  const closeMenu = () => {
    setToogleMenu(prev => !prev);
  };
  return (
    <nav className="flex items-center justify-between w-full p-1 ">
      <div className="flex justify-between p-3 items-center text-[#161d40] z-20 w-full h-16 ">
        <i
          className="text-[1.5rem] cursor-pointer md:hidden h-full flex items-center text-[#161d40]"
          onClick={closeMenu}
          aria-label="Abrir menu"
        >
          <FontAwesomeIcon icon={faBars} />
        </i>
        <div
          className={`${toogleMenu ? 'absolute z-10 h-full bg-[#f5f5f5] top-0 bottom-0 left-0 w-[15rem] md:hidden shadow-2xl' : 'hidden'}`}
        >
          <ul className="flex flex-col font-bold text-[1.1rem] p-2">
            <li className="w-full flex justify-end">
              <i
                className="text-[1.5rem] cursor-pointer md:hidden h-full flex items-center text-[#161d40]"
                onClick={closeMenu}
                aria-label="Fechar menu"
              >
                <FontAwesomeIcon icon={faClose} />
              </i>
            </li>
            <li>
              <Link href="/" className="hover:text-[#0C87D9] cursor-pointer" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/mybooks" className="hover:text-[#0C87D9] cursor-pointer" onClick={closeMenu}>
                My Books
              </Link>
            </li>
            <li>
              <Link href="/goals" className="hover:text-[#0C87D9] cursor-pointer" onClick={closeMenu}>
                Goals
              </Link>
            </li>
            <li>
              <Link href="/profile" className="hover:text-[#0C87D9] cursor-pointer" onClick={closeMenu}>
                Profile
              </Link>
            </li>
          </ul>
        </div>
        <i className="text-[1.5rem] cursor-pointer w-[10%] hidden md:block">
          <Link href="/profile">
            <FontAwesomeIcon icon={faUser} />
          </Link>
        </i>
        <div className="flex w-[30%] justify-center hidden md:block">
          <ul className="flex font-semibold text-[1.3rem] justify-between w-full">
            <li className="hover:text-[#0C87D9]">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:text-[#0C87D9]">
              <Link href="/mybooks">My Books</Link>
            </li>
            <li className="hover:text-[#0C87D9]">
              <Link href="/goals">Goals</Link>
            </li>
          </ul>
        </div>
        <div className="cursor-pointer h-full items-center w-[20%] flex justify-end relative">
          <Inputs placeholder="search" className="mr-4 w-[250px] sm:w-[300px] md:w-[350px] hidden lg:block" />
          <FontAwesomeIcon icon={faMagnifyingGlass} className="text-[1.5rem]" />
        </div>
      </div>
    </nav>
  );
};

"use client";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faMagnifyingGlass,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { Inputs } from "@/components/Inputs";

export const Navbar = () => {
  return (
    <nav className="flex w-full">
      <FontAwesomeIcon
        icon={faBars}
        className="text-[1.5rem] cursor-pointer hidden"
      />
      <div className="flex justify-between p-3 items-center text-[#161d40] z-20 w-full h-16">
        <i className="text-[1.5rem] cursor-pointer w-[10%]">
          <Link href="/profile">
            <FontAwesomeIcon icon={faUser} />
          </Link>
        </i>
        <div className="flex w-[30%] justify-cente hidden md:block">
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
          <Inputs
            placeholder="search"
            className="mr-4 w-[250px] sm:w-[300px] md:w-[350px] hidden lg:block"
          />
          <FontAwesomeIcon icon={faMagnifyingGlass} className="text-[1.5rem]" />
        </div>
      </div>
    </nav>
  );
};

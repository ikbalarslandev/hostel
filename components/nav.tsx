"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Nav = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <nav className="bg-black  py-2 flex items-center  sticky top-0 z-50 justify-between pl-1 h-[7vh] m-0 md:h-[5vh]">
      {/* hamburger icon */}
      <div className=" ml-1 mt-2 flex gap-12 items-center ">
        <button
          id="menu-btn"
          className={` block hamburger  md:mt-1 focus:outline-none md:hidden  ${
            isMenuOpen ? "open" : ""
          }`}
          onClick={toggleMenu}
        >
          <div>
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </div>
        </button>
        <ul className=" gap-4 hidden md:flex ml-4">
          <li className="text-white">
            <Link href="/rooms">ROOMS</Link>
          </li>
          <li className="text-white">
            <Link href="/about">ABOUT</Link>
          </li>
          <li className="text-white">
            <Link href="/faq">FAQ</Link>
          </li>
          <li className="text-white">
            <Link href="/contact">CONTACT</Link>
          </li>
        </ul>
      </div>
      <Link href="/">
        <Image
          src="/logo.png"
          alt="logo"
          width={210}
          height={800}
          className="mb-1"
        />
      </Link>
      <Button className="bg-pink rounded-none h-[7vh] md:h-[5vh] p-1 text-xs md:w-[19vw] w-[30vw]  md:text-lg ">
        <Link href="https://www.hostelworld.com/"> Book Your Stay</Link>
      </Button>
      {isMenuOpen && (
        <div className="bg-pink absolute top-[7vh] md:top-[5vh] left-0 h-screen min-w-[290px] animate-fade-right z-10 "></div>
      )}
    </nav>
  );
};

export default Nav;

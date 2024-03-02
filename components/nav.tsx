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
    <nav className="bg-white  py-2 flex items-center  sticky top-0 z-50 justify-between pl-1 h-[7vh] m-0 md:h-[5vh]">
      {/* hamburger icon */}
      <div className=" ml-1 mt-1 flex gap-12 items-center ">
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
          <li className="text-black">
            <Link href="/rooms">ROOMS</Link>
          </li>
          <li className="text-black">
            <Link href="/about">ABOUT</Link>
          </li>
          <li className="text-black">
            <Link href="/faq">FAQ</Link>
          </li>
          <li className="text-black">
            <Link href="/contact">CONTACT</Link>
          </li>
        </ul>
      </div>
      <Link href="/">
        <Image
          src="/logo.png"
          alt="logo"
          width={180}
          height={200}
          className="mt-3 scale-x-125"
        />
      </Link>
      <Button className=" h-[7vh] md:h-[5vh] p-1 text-xs text-white  md:w-[19vw] w-[30vw]  md:text-lg ">
        <Link
          href="https://www.hostelworld.com/"
          className="md:scale-x-125 scale-y-150 md:scale-y-100"
        >
          {" "}
          Book Your Stay
        </Link>
      </Button>
      {isMenuOpen && (
        <div className="bg-black absolute top-[7vh] md:top-[5vh] left-0 h-screen min-w-[290px] animate-fade-right z-10  flex items-start justify-center">
          <ul className="  flex flex-col items-start mt-16 scale-x-150   text-2xl  gap-10">
            <li className="text-white" onClick={toggleMenu}>
              <Link href="/rooms">ROOMS</Link>
            </li>
            <li className="text-white" onClick={toggleMenu}>
              <Link href="/about">ABOUT</Link>
            </li>
            <li className="text-white" onClick={toggleMenu}>
              <Link href="/faq">FAQ</Link>
            </li>
            <li className="text-white" onClick={toggleMenu}>
              <Link href="/contact">CONTACT</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Nav;

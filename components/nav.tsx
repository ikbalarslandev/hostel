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
    <nav className="bg-black py-2 flex items-center relative justify-between pl-1 h-12 m-0">
      {/* hamburger icon */}
      <div className="md:hidden ml-1 mt-2">
        <button
          id="menu-btn"
          className={` block hamburger  focus:outline-none ${
            isMenuOpen ? "open" : ""
          }`}
          onClick={toggleMenu}
        >
          <div>
            <span className="hamburger-top bg-yellow-300"></span>
            <span className="hamburger-middle bg-yellow-300"></span>
            <span className="hamburger-bottom bg-yellow-300"></span>
          </div>
        </button>
      </div>
      <Link href="/">
        <Image
          src="/logo.png"
          alt="logo"
          width={150}
          height={800}
          className="ml-5"
        />
      </Link>
      <Button className="bg-pink rounded-none h-12 p-1 ">Book Your Stay</Button>
    </nav>
  );
};

export default Nav;

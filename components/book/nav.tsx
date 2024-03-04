"use client";

import Link from "next/link";
import MobileAccordion from "./mobile-progress";
import DesktopProgress from "./desktop-progress";
import { Accordion } from "@/components/ui/accordion";
//icons

import { MdOutlineDoorFront } from "react-icons/md";
import { IoPricetagOutline } from "react-icons/io5";
import { HiListBullet } from "react-icons/hi2";
import { IoPersonOutline } from "react-icons/io5";
import { useEffect } from "react";

const content = [
  {
    type: "Categories",
    icon: <MdOutlineDoorFront className="ml-[5vw]  mr-[4vw]  w-8 h-8" />,
    currentIcon: (
      <MdOutlineDoorFront className="ml-[5vw] bg-pink rounded-full bg-opacity-40 mr-[4vw]  w-8 h-8 my-3" />
    ),
  },
  {
    type: "Rates",
    icon: <IoPricetagOutline className="ml-[5vw]  mr-[4vw]  w-8 h-8" />,
    currentIcon: (
      <IoPricetagOutline className="ml-[5vw] bg-pink rounded-full bg-opacity-40 mr-[4vw]  w-8 h-8 my-3" />
    ),
  },
  {
    type: "Summary",
    icon: <HiListBullet className="ml-[5vw]  mr-[4vw]  w-8 h-8" />,
    currentIcon: (
      <HiListBullet className="ml-[5vw] bg-pink rounded-full bg-opacity-40 mr-[4vw]  w-8 h-8 my-3" />
    ),
  },
  {
    type: "Details",
    icon: <IoPersonOutline className="ml-[5vw]  mr-[4vw]  w-8 h-8" />,
    currentIcon: (
      <IoPersonOutline className="ml-[5vw] bg-pink rounded-full bg-opacity-40 mr-[4vw]  w-8 h-8 my-3" />
    ),
  },
];

const Nav = () => {
  useEffect(() => {
    localStorage.setItem("currentPage", "Dates");
  }, []);
  return (
    <nav>
      <div className="flex justify-between items-center">
        <h1 className="text-white text-2xl ml-4">Booking Engine</h1>
        <Link href="/">
          <div className="aspect-square w-12 text-white text-xl ml-auto  border-l flex items-center justify-center">
            X
          </div>
        </Link>
      </div>
      <hr className="md:hidden" />
      <Accordion type="single" collapsible className="w-full md:hidden ">
        <MobileAccordion trigger="Dates" content={content} />
      </Accordion>
      <DesktopProgress />
    </nav>
  );
};

export default Nav;

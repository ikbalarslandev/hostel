"use client";

import { CiCalendar } from "react-icons/ci";
import { MdOutlineDoorFront } from "react-icons/md";
import { IoPricetagOutline } from "react-icons/io5";
import { HiListBullet } from "react-icons/hi2";
import { IoPersonOutline } from "react-icons/io5";
import { useEffect, useState } from "react";

const DesktopProgress = () => {
  const content = [
    {
      type: "Dates",
      icon: <CiCalendar className="w-8 h-8 " />,
      currentIcon: <CiCalendar className="w-8 h-8 text-white" />,
    },
    {
      type: "Categories",
      icon: <MdOutlineDoorFront className="w-8 h-8 " />,
      currentIcon: (
        <MdOutlineDoorFront className="ml-[5vw] bg-pink rounded-full bg-opacity-40 mr-[4vw]  w-8 h-8 my-3" />
      ),
    },
    {
      type: "Rates",
      icon: <IoPricetagOutline className="mr-2 w-8 h-8" />,
      currentIcon: (
        <IoPricetagOutline className="ml-[5vw] bg-pink rounded-full bg-opacity-40 mr-[4vw]  w-8 h-8 my-3" />
      ),
    },
    {
      type: "Summary",
      icon: <HiListBullet className="mr-2 w-8 h-8" />,
      currentIcon: (
        <HiListBullet className="ml-[5vw] bg-pink rounded-full bg-opacity-40 mr-[4vw]  w-8 h-8 my-3" />
      ),
    },
    {
      type: "Details",
      icon: <IoPersonOutline className="mr-2 w-8 h-8" />,
      currentIcon: (
        <IoPersonOutline className="ml-[5vw] bg-pink rounded-full bg-opacity-40 mr-[4vw]  w-8 h-8 my-3" />
      ),
    },
  ];

  const [current, setCurrent] = useState<string | undefined>();

  useEffect(() => {
    const loc = localStorage.getItem("currentPage");

    setCurrent(loc ? loc : "Dates");
  }, []);

  useEffect(() => {
    localStorage.setItem("currentPage", current);
  }, [current]);

  const handleClick = (type: string) => {
    setCurrent(type);
  };

  return (
    <section className="text-white hidden md:flex bg-gray-900 justify-between px-5 py-2 pr-10">
      {content?.map((item: any, index: number) => {
        return (
          <div key={index} className="flex text-white items-center gap-[3vw] ">
            <div
              onClick={() => handleClick(item.type)}
              className={`flex cursor-pointer  items-center  gap-2 ${
                current !== item.type && "text-gray-500"
              }`}
            >
              {item.icon}
              <p>{item.type}</p>
            </div>

            {index !== content.length - 1 && (
              <div className="w-[12vw] text-center bg-gray-600 h-[2px]"></div>
            )}
          </div>
        );
      })}
    </section>
  );
};
export default DesktopProgress;

import Link from "next/link";
import MobileAccordion from "./mobile-progress";
import { Accordion } from "@/components/ui/accordion";
//icons
import { CiCalendar } from "react-icons/ci";
import { MdOutlineDoorFront } from "react-icons/md";
import { IoPricetagOutline } from "react-icons/io5";
import { HiListBullet } from "react-icons/hi2";
import { IoPersonOutline } from "react-icons/io5";

const content = [
  {
    type: "Categories",
    icon: (
      <MdOutlineDoorFront className="ml-[5vw]  mr-[4vw] text-white w-8 h-8" />
    ),
    currentIcon: (
      <MdOutlineDoorFront className="ml-[5vw] bg-pink rounded-full bg-opacity-40 mr-[4vw] text-white w-8 h-8 my-3" />
    ),
  },
  {
    type: "Rates",
    icon: (
      <IoPricetagOutline className="ml-[5vw]  mr-[4vw] text-white w-8 h-8" />
    ),
    currentIcon: (
      <IoPricetagOutline className="ml-[5vw] bg-pink rounded-full bg-opacity-40 mr-[4vw] text-white w-8 h-8 my-3" />
    ),
  },
  {
    type: "Summary",
    icon: <HiListBullet className="ml-[5vw]  mr-[4vw] text-white w-8 h-8" />,
    currentIcon: (
      <HiListBullet className="ml-[5vw] bg-pink rounded-full bg-opacity-40 mr-[4vw] text-white w-8 h-8 my-3" />
    ),
  },
  {
    type: "Details",
    icon: <IoPersonOutline className="ml-[5vw]  mr-[4vw] text-white w-8 h-8" />,
    currentIcon: (
      <IoPersonOutline className="ml-[5vw] bg-pink rounded-full bg-opacity-40 mr-[4vw] text-white w-8 h-8 my-3" />
    ),
  },
];

const Nav = () => {
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
      <hr />
      <Accordion type="single" collapsible className="w-full ">
        <MobileAccordion trigger="Dates" content={content} />
      </Accordion>
    </nav>
  );
};

export default Nav;

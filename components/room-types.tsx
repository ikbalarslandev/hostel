"use client";

import { Button } from "./ui/button";
import Link from "next/link";

export const Section = ({ image, title, link }: any) => {
  return (
    <div
      className={`${image}  h-[60vh] md:h-full flex-1  bg-center bg-cover flex flex-col items-center justify-between pt-[23vh] pb-5 relative`}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <h2 className="text-white text-3xl md:mt-[20vh] font-bold relative z-10">
        {title}
      </h2>
      <Button className="relative z-10">
        <Link href={`${link}`}>See More</Link>
      </Button>
    </div>
  );
};

const Rooms = () => {
  return (
    <section className="overflow-hidden">
      <div className="md:flex md:h-[95vh] w-screen  ">
        <div className="md:flex flex-col flex-1">
          <Section image="private" title="PRIVATE ROOMS" link="#" />
        </div>
        <Section image="dorm" title="DORMS" link="#" />
      </div>
    </section>
  );
};

export default Rooms;

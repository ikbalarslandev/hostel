"use client";

import { Button } from "./ui/button";

export const Section = ({ image, title }: any) => {
  return (
    <div
      className={`${image}  h-[60vh] bg-center bg-cover flex flex-col items-center justify-between pt-[23vh] pb-5 relative`}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <h2 className="text-yellow-500 text-3xl font-bold relative z-10">
        {title}
      </h2>
      <Button className="relative z-10">See More</Button>
    </div>
  );
};

const Rooms = () => {
  return (
    <section>
      <Section image="dorm" title="DORMS" />
      <Section image="apartment" title="APARTMENT ROOMS" />
      <Section image="private" title="PRIVATE ROOMS" />
    </section>
  );
};

export default Rooms;

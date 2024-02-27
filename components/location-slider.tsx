"use client";

import MapPage from "./map";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { IoMdSubway } from "react-icons/io";
import { FaMapSigns } from "react-icons/fa";
import { SiOpenstreetmap } from "react-icons/si";

export const Transport = ({ icon, desc }: any) => {
  return (
    <div className="flex gap-3 items-center justify-center">
      {icon}
      <p className="text-white font-semibold">{desc}</p>
    </div>
  );
};

const Slider = () => {
  const [closeLocation, setCloseLocation] = useState(true);

  const handleLocation = () => {
    setCloseLocation(!closeLocation);
  };

  return (
    <div
      className={`z-50 fixed gap-0  items-center  hidden md:flex  ${
        closeLocation
          ? "translate-x-[84vw] transition-transform duration-700"
          : "translate-x-[14vw] transition-transform duration-500"
      }`}
    >
      <Button
        className={`${
          closeLocation && "pt-3"
        } rotate-90 w-[76px] h-[36px] -mx-5`}
        onClick={handleLocation}
      >
        {closeLocation ? "Location " : "Close"}
      </Button>
      <div className="bg-white w-[70vw]  z-50 h-[95vh] flex items-center justify-center">
        <div className="bg-black  w-[65vw]  h-[89vh] flex ">
          <div className="flex-1">
            <MapPage className="h-[89vh] w-[37vw]" />
          </div>
          <div className="bg-pink h-full w-[28vw] flex flex-col">
            <div className="flex-1 bg-yellow-400 px-10 py-28">
              <h1 className="text-pink text-xl font-semibold ">
                Example Hostel
              </h1>
              <p>
                Şehit Muhtar str. <br />
                Istanbul
              </p>
              <p className="font-bold">Turkey</p>
              <p className="text-sm mb-10">zip code: 34435</p>
              <p className="text-sm">
                Example is nestled in the part of old Istanbul that was a
                cultural hub in the 19th century. The hostel's unique location
                allows you to enjoy the city's whimsical charm and its eclectic
                architecture with all the modern, medieval, classical, and
                Soviet structures coexisting in harmony.
              </p>
            </div>
            <div className=" px-12  w-full h-[30vh] flex flex-col items-start justify-center gap-6">
              <Transport
                icon={<IoMdSubway className="text-4xl text-yellow-400" />}
                desc="3 min walk to Taksim Station (Metro)"
              />
              <Transport
                icon={<FaMapSigns className="text-4xl text-yellow-400" />}
                desc="5 min walk to Istiklal Street"
              />
              <Transport
                icon={<SiOpenstreetmap className="text-4xl text-yellow-400" />}
                desc="20 min walk to Old Town"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Slider;

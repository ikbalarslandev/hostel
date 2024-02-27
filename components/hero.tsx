import { Button } from "@/components/ui/button";
import { FaAngleDown } from "react-icons/fa6";
import Image from "next/image";
import Slider from "./location-slider";

const Hero = () => {
  return (
    <section className="bg-hero md:bg-none overflow-hidden h-[93vh] md:h-[95vh] bg-center bg-cover flex flex-col items-center justify-between">
      <video
        className="w-full h-full object-cover absolute top-0 left-0 -z-10"
        controls={false}
        autoPlay
        muted
        loop
      >
        <source
          src="https://hostelfabrika.com/wp-content/uploads/2019/08/fabrika.mp4"
          type="video/mp4"
        />
      </video>
      <Slider />

      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 ">
        <Image
          src="/logo.png"
          alt="logo"
          width={500}
          height={500}
          className="hidden md:block  m-0 "
        />
      </div>

      <div className="flex flex-col items-center md:mt-[40vh] z-0 mt-[30vh] mx-10 ">
        <hr className="w-20 bg-white" />
        <h1 className="text-center   text-white my-2 md:w-80 md:text-xl  ">
          EXAMPLE HOSTEL IN ISTANBUL, WHERE YOU SLEEP, EAT, DRINK, DESIGN,
          CREATE, INTERACT, DISCOVER AND LEARN.
        </h1>

        <hr className="w-20 mb-2 bg-white " />
        <Button variant="link" className="text-yellow-400 font-bold text-2xl ">
          About Us
        </Button>
      </div>
      <div className="text-white flex flex-col gap-10 md:hidden mt-[10vh]">
        <div className="flex gap-2">
          <Button className="w-[30vw] rounded-none text-lg">LOCATION</Button>
          <Button className="w-[30vw] rounded-none text-lg">
            WHAT&apos;S ON
          </Button>
        </div>
      </div>
      <div className="flex flex-col items-center text-white mt-auto">
        <p className="text-sm">SCROLL DOWN</p>
        <FaAngleDown className="text-xl" />
      </div>
    </section>
  );
};

export default Hero;

import { Button } from "@/components/ui/button";
import { FaAngleDown } from "react-icons/fa6";
import Image from "next/image";
import Slider from "./location-slider";
import Link from "next/link";

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

      <div className="absolute top-20 left-1/2 transform -translate-x-1/2 ">
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
          BERLIN HOSTEL & STREET IN ANTALYA, WHERE YOU SLEEP, EAT, DRINK,
          DESIGN, CREATE, INTERACT, DISCOVER AND LEARN.
        </h1>

        <hr className="w-20 mb-2 bg-white " />
        <Button variant="link" className="text-yellow-400 font-bold text-2xl ">
          <Link href="#">About Us</Link>
        </Button>
      </div>
      <div className="text-white flex flex-col gap-10 md:hidden mt-[10vh]">
        <div className="flex gap-2">
          <Button className="w-[30vw] rounded-none text-lg">
            <Link href="https://www.google.com/maps/place/Taksim+Square,+%C5%9Eehit+Muhtar,+34435+Beyo%C4%9Flu%2F%C4%B0stanbul/@41.0370013,28.974792,15z/data=!3m1!4b1!4m6!3m5!1s0x14cab7650656bd63:0x8ca058b28c20b6c3!8m2!3d41.0370023!4d28.9850917!16zL20vMDJ5cW40?entry=ttu">
              LOCATION
            </Link>
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

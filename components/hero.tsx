import { Button } from "@/components/ui/button";
import { FaAngleDown } from "react-icons/fa6";
import Image from "next/image";
import Slider from "./location-slider";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="bg-hero  md:bg-none overflow-hidden h-[93vh] md:h-[95vh] bg-center bg-cover flex flex-col items-center justify-between">
      <video
        className="w-full h-full object-cover absolute top-0 left-0 -z-10 hidden md:block"
        controls={false}
        autoPlay
        muted
        loop
      >
        <source
          src="https://utfs.io/f/8b5716fd-66dd-4c1a-b22b-1a23d490f4b2-1wkca.MP4"
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
      <div className="bg-black bg-opacity-50 z-0 absolute top-0 left-0 h-screen w-screen md:hidden"></div>
      <div className="flex flex-col  items-center md:mt-[40vh] z-0 mt-[30vh] mx-10 ">
        <hr className="w-20 bg-white" />
        <h1 className="text-center   text-white my-2 md:w-80 md:text-xl  ">
          BERLIN HOSTEL & STREET IN ANTALYA, WHERE YOU SLEEP, EAT, DRINK,
          DESIGN, CREATE, INTERACT, DISCOVER AND LEARN.
        </h1>

        <hr className="w-20 mb-2 bg-white " />
        <Button variant="link" className="text-yellow-400 font-bold text-2xl ">
          <Link href="/about">About Us</Link>
        </Button>
      </div>

      <div className="text-white flex flex-col gap-10 md:hidden mt-[10vh]">
        <div className="flex gap-2 z-10">
          <Button className="w-[30vw]  text-lg">
            <Link href="https://www.google.com/maps/place/Berlin+Hostel+%26+Street/@36.8844456,30.7060141,17z/data=!3m1!4b1!4m10!3m9!1s0x14c39006eedf3f27:0xcaa355039f162897!5m3!1s2024-05-04!4m1!1i2!8m2!3d36.8844456!4d30.7085944!16s%2Fg%2F11tfc5dq11?entry=ttu">
              LOCATION
            </Link>
          </Button>
        </div>
      </div>
      <div className="flex flex-col items-center text-white mt-auto  z-10">
        <p className="text-sm">SCROLL DOWN</p>
        <FaAngleDown className="text-xl" />
      </div>
    </section>
  );
};

export default Hero;

import { Button } from "@/components/ui/button";
import { FaAngleDown } from "react-icons/fa6";

const Hero = () => {
  return (
    <section className="bg-hero-img h-[93vh] bg-center bg-cover flex flex-col items-center justify-between pt-44 px-8">
      <div className="flex flex-col items-center">
        <hr className="w-20 bg-white" />
        <h1 className="text-center   text-white my-2 ">
          EXAMPLE HOSTEL IN ISTANBUL, WHERE YOU SLEEP, EAT, DRINK, DESIGN,
          CREATE, INTERACT, DISCOVER AND LEARN.
        </h1>

        <hr className="w-20 mb-2 bg-white " />
        <Button variant="link" className="text-yellow-400 font-bold text-2xl ">
          About Us
        </Button>
      </div>

      <div className="text-white flex flex-col gap-10">
        <div className="flex gap-2">
          <Button className="w-[30vw] rounded-none text-lg">LOCATION</Button>
          <Button className="w-[30vw] rounded-none text-lg">WHAT'S ON</Button>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-sm">SCROLL DOWN</p>
          <FaAngleDown className="text-xl" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

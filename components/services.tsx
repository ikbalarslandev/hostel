import { FaClockRotateLeft } from "react-icons/fa6";
import { MdLuggage } from "react-icons/md";
import { MdEmojiFoodBeverage } from "react-icons/md";
import { MdLocalLaundryService } from "react-icons/md";
import { FaBed } from "react-icons/fa";
import { FaWifi } from "react-icons/fa";
import { RiBeerLine } from "react-icons/ri";
import { TbToolsKitchen3 } from "react-icons/tb";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const Row = ({ icon, description }: any) => {
  return (
    <div className="flex items-center my-2">
      {icon}
      <p className="text-xl ml-2 text-white">{description}</p>
    </div>
  );
};

const Services = () => {
  return (
    <section className="h-[90vh] services  ">
      <div className="h-[90vh] flex flex-col items-center px-10 justify-center relative  md:w-[50vw]">
        <h1 className="text-yellow-400 text-center text-4xl font-bold z-10 mb-5 ">
          Facilities
        </h1>
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="bg-yellow-400 h-[2px] w-[80vw] md:w-[30vw] my-2 z-10"></div>
        <div className="flex flex-col items-start z-10  border-3 border-white">
          <Row
            icon={<FaClockRotateLeft className="w-6 h-6 text-yellow-400" />}
            description="24/7 Reception"
          />
          <Row
            icon={<MdLuggage className="w-9 h-9 text-yellow-400" />}
            description="Luggage Storage"
          />
          <Row
            icon={<MdEmojiFoodBeverage className="w-9 h-9 text-yellow-400" />}
            description="Breakfast"
          />
          <Row
            icon={
              <MdLocalLaundryService className="w-9 h-9 text-yellow-400 " />
            }
            description="Laundry Service"
          />
          <Row
            icon={<FaBed className="w-7 h-7 text-yellow-400" />}
            description="Bed Sheets Included"
          />
          <Row
            icon={<FaWifi className="w-7 h-7 text-yellow-400" />}
            description="Free Wi-Fi"
          />
          <Row
            icon={<RiBeerLine className="w-7 h-7 text-yellow-400" />}
            description="Bar"
          />
          <Row
            icon={<TbToolsKitchen3 className="w-7 h-7 text-yellow-400" />}
            description="Guest Kitchen"
          />
        </div>
        <div className="bg-yellow-400 h-[2px] w-[80vw] md:w-[30vw] my-2 z-10"></div>

        <Button className="z-10 mt-1 md:mt-20">
          <Link href="#">See More</Link>
        </Button>
      </div>
    </section>
  );
};

export default Services;

import { GiBunkBeds } from "react-icons/gi";
import { FaWifi } from "react-icons/fa";
import { TbAirConditioning } from "react-icons/tb";
import { LuLampDesk } from "react-icons/lu";
import { CiLock } from "react-icons/ci";
import { AiOutlineContainer } from "react-icons/ai";
import { MdOutlineTableBar } from "react-icons/md";
import { MdOutlineBathroom } from "react-icons/md";
import { GiPillow } from "react-icons/gi";
import { LuBedDouble } from "react-icons/lu";
import { FaBath } from "react-icons/fa";
import { TbLamp } from "react-icons/tb";

export const Template = ({ icon, desc }: any) => {
  return (
    <div
      className="flex items-center bg-white gap-3 py-2 pl-4  pr-10"
      key={desc}
    >
      {icon}
      <p className="text-black text-lg">{desc}</p>
    </div>
  );
};

const Icon = ({ icon }: { icon: string }) => {
  switch (icon) {
    case "bunk-beds":
      return (
        <Template
          icon={<GiBunkBeds className="text-black w-8 h-8" />}
          desc={icon}
        />
      );
    case "free-wifi":
      return (
        <Template
          icon={<FaWifi className="text-black w-8 h-8" />}
          desc={icon}
        />
      );
    case "air-conditioning":
      return (
        <Template
          icon={<TbAirConditioning className="text-black w-8 h-8" />}
          desc={icon}
        />
      );
    case "individual-reading-lamp":
      return (
        <Template
          icon={<LuLampDesk className="text-black w-8 h-8" />}
          desc={icon}
        />
      );

    case "individual-lockers":
      return (
        <Template
          icon={<CiLock className="text-black w-8 h-8" />}
          desc={icon}
        />
      );
    case "bed-counters":
      return (
        <Template
          icon={<AiOutlineContainer className="text-black w-8 h-8" />}
          desc={icon}
        />
      );
    case "common-table":
      return (
        <Template
          icon={<MdOutlineTableBar className="text-black w-8 h-8" />}
          desc={icon}
        />
      );
    case "shared-bathroom":
      return (
        <Template
          icon={<MdOutlineBathroom className="text-black w-8 h-8" />}
          desc={icon}
        />
      );

    case "only-girls-slumber-party":
      return (
        <Template
          icon={<GiPillow className="text-black w-8 h-8" />}
          desc={icon}
        />
      );
    case "double-bed":
      return (
        <Template
          icon={<LuBedDouble className="text-black w-8 h-8" />}
          desc={icon}
        />
      );
    case "private-bathroom":
      return (
        <Template
          icon={<FaBath className="text-black w-8 h-8" />}
          desc={icon}
        />
      );

    case "bed-lamps":
      return (
        <Template
          icon={<TbLamp className="text-black w-8 h-8" />}
          desc={icon}
        />
      );

    default:
      return <GiBunkBeds className="text-black w-8 h-8" />;
  }
};

export default Icon;

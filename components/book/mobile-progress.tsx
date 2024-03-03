import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CiCalendar } from "react-icons/ci";

export const Template = ({ content }: any) => {
  return (
    <div className=" flex flex-col items-start ">
      <div className=" mx-[9vw] w-[1px] h-[3vh] mb-3  bg-pink"></div>
      <div className="flex items-center mb-3 ">
        {content.icon}
        <p className="text-white">{content.type}</p>
      </div>
    </div>
  );
};

const MobileAccordion = ({ trigger, content }: any) => {
  return (
    <AccordionItem value={trigger}>
      <AccordionTrigger className="   pr-2 font-semibold text-left">
        <div className="flex items-center justify-start   ">
          <CiCalendar className="ml-[5vw]  mr-[4vw] text-white w-8 h-8" />
          {trigger}
        </div>
      </AccordionTrigger>
      <AccordionContent>
        {content.map((item: any, i: number) => (
          <div key={i}>
            <Template content={item} />
          </div>
        ))}
      </AccordionContent>
    </AccordionItem>
  );
};

export default MobileAccordion;

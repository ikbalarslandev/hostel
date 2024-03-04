"use client";

import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  ItemTrigger,
} from "@/components/ui/accordion";
import { CiCalendar } from "react-icons/ci";
import { useState, useEffect } from "react";

export const Template = ({ content, withLine = true, setCurrent }: any) => {
  return (
    <div
      className=" flex   flex-col items-start  "
      onClick={() => setCurrent(content.type)}
    >
      {withLine && (
        <div className=" mx-[9vw] w-[1px] h-[3vh] mb-3  bg-pink"></div>
      )}
      <div className={`flex items-center  ${withLine ? "mb-3" : "mb-0"}`}>
        {content.icon}
        <p className="text-white">{content.type}</p>
      </div>
    </div>
  );
};

interface ObjType {
  icon: any;
  type: string;
}

const MobileAccordion = ({ trigger, content }: any) => {
  const newContent = [
    {
      type: "Dates",
      icon: <CiCalendar className="ml-[5vw]   mr-[4vw] text-white w-8 h-8" />,
    },
    ...content,
  ];

  const [current, setCurrent] = useState();
  const [currentObj, setCurrentObj] = useState<ObjType | undefined>();

  useEffect(() => {
    setCurrent(newContent[0]);
  }, []);

  useEffect(() => {
    console.log(current);

    setCurrentObj(newContent.find((item) => item.type === current));
  }, [current]);
  return (
    <AccordionItem value={trigger}>
      {/* closed */}
      <AccordionTrigger className=" data-[state=open]:hidden  pr-2 font-semibold text-left">
        {currentObj ? (
          <div className=" flex  flex-col items-start">
            <div className={`flex items-center  ${"mb-0"}`}>
              {currentObj.icon}
              <p className="text-white">{currentObj.type}</p>
            </div>
          </div>
        ) : (
          <div
            className=" flex  flex-col items-start  "
            onClick={() => setCurrent(content.type)}
          >
            <div className={`flex items-center  ${"mb-0"}`}>
              <CiCalendar className="ml-[5vw]  mr-[4vw] text-white w-8 h-8" />
              <p className="text-white">Dates</p>
            </div>
          </div>
        )}
      </AccordionTrigger>
      {/* open */}
      <AccordionTrigger className=" data-[state=open]:flex  hidden  pr-2 font-semibold text-left ">
        <Template
          content={newContent[0]}
          withLine={false}
          setCurrent={setCurrent}
        />
        {current === newContent[0].type && "heheh"}
      </AccordionTrigger>
      <AccordionContent>
        {content.map((item: any, i: number) => (
          <div key={i}>
            <ItemTrigger>
              <Template content={item} setCurrent={setCurrent} />
              {current === item.type && "heheh"}
            </ItemTrigger>
          </div>
        ))}
      </AccordionContent>
    </AccordionItem>
  );
};

export default MobileAccordion;

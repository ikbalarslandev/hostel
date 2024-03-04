"use client";

import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  ItemTrigger,
} from "@/components/ui/accordion";
import { CiCalendar } from "react-icons/ci";
import { useState, useEffect } from "react";

export const Template = ({
  content,
  current,
  withLine = true,
  setCurrent,
}: any) => {
  return (
    <div
      className=" flex   flex-col items-start  "
      onClick={() => setCurrent(content.type)}
    >
      {withLine && (
        <div
          className={` mx-[9vw] w-[1px] h-[3vh] ${
            current !== content.type && "mb-3"
          }   bg-gray-500`}
        ></div>
      )}
      <div
        className={`flex items-center ${
          current !== content.type ? "text-gray-500" : "text-white"
        }  ${withLine && current !== content.type ? "mb-3 " : "mb-0 "}`}
      >
        {current !== content.type ? content.icon : content.currentIcon}
        <p>{content.type}</p>
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
      icon: <CiCalendar className="ml-[5vw]   mr-[4vw]  w-8 h-8" />,
      currentIcon: (
        <CiCalendar className="ml-[5vw] bg-pink rounded-full bg-opacity-40 mr-[4vw]  w-8 h-8" />
      ),
    },
    ...content,
  ];

  const [current, setCurrent] = useState();
  const [currentObj, setCurrentObj] = useState<ObjType | undefined>();

  useEffect(() => {
    setCurrent(newContent[0]);
  }, []);

  useEffect(() => {
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
          current={current}
          setCurrent={setCurrent}
        />
      </AccordionTrigger>
      <AccordionContent>
        {content.map((item: any, i: number) => (
          <div key={i}>
            <ItemTrigger>
              <Template
                content={item}
                current={current}
                setCurrent={setCurrent}
              />
            </ItemTrigger>
          </div>
        ))}
      </AccordionContent>
    </AccordionItem>
  );
};

export default MobileAccordion;

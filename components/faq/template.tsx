import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Template = ({ trigger, content }: any) => {
  return (
    <AccordionItem value={trigger}>
      <AccordionTrigger className=" pl-5 pr-2 mb-3 font-semibold text-left">
        {trigger}
      </AccordionTrigger>
      <AccordionContent>
        <div className=" h-[1px] mx-6 my-3 bg-pink"></div>
        <p className="mx-7 ">{content}</p>
        <div className=" h-[1px] mx-6 my-3 bg-pink"></div>
      </AccordionContent>
    </AccordionItem>
  );
};

export default Template;

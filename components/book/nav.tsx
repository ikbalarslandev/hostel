import Link from "next/link";
import MobileAccordion from "./mobile-progress";
import { Accordion } from "@/components/ui/accordion";

const content = ["Categories", "Rates", "Summary", "Details"];

const Nav = () => {
  return (
    <nav>
      <div className="flex justify-between items-center">
        <h1 className="text-white text-2xl ml-4">Booking Engine</h1>
        <Link href="/">
          <div className="aspect-square w-12 text-white text-xl ml-auto  border-l flex items-center justify-center">
            X
          </div>
        </Link>
      </div>
      <hr />
      <Accordion type="single" collapsible className="w-full  ">
        <MobileAccordion trigger="Dates" content={content} />
      </Accordion>
    </nav>
  );
};

export default Nav;

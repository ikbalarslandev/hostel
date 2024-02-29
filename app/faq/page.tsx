import { Accordion } from "@/components/ui/accordion";
import data from "@/data/faq";
import Template from "@/components/faq/template";

const FaqPage = () => {
  return (
    <main className="overflow-hidden bg-zinc-200 min-h-screen flex flex-col items-center ">
      <div className="banner3  w-screen h-28 md:h-40 flex flex-col  items-center justify-center">
        <h1 className="text-white text-5xl font-bold shadow-lg">FAQ</h1>
      </div>
      <div className="bg-white mx-3 my-5 p-4 md:w-[40vw] ">
        <Accordion type="single" collapsible className="w-full ">
          {data.map((item, i) => (
            <div key={i}>
              <Template trigger={item.trigger} content={item.desc} />
            </div>
          ))}
        </Accordion>
      </div>
    </main>
  );
};

export default FaqPage;

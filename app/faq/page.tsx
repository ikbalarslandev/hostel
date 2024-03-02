import { Accordion } from "@/components/ui/accordion";
import data from "@/data/faq";
import Template from "@/components/faq/template";
import PageTemplate from "@/components/page.template";

const FaqPage = () => {
  return (
    <main>
      <PageTemplate title="FAQ" />
      <div className="flex flex-col items-center justify-center">
        <div className="bg-white mx-3 my-5 p-4 md:w-[40vw]  ">
          <Accordion type="single" collapsible className="w-full  ">
            {data.map((item, i) => (
              <div key={i}>
                <Template trigger={item.trigger} content={item.desc} />
              </div>
            ))}
          </Accordion>
        </div>
      </div>
    </main>
  );
};

export default FaqPage;

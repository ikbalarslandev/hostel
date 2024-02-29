import Dorms from "./dorms";
import Private from "./private";

const SectionSellect = ({ selected, setSelected }: any) => {
  return (
    <div className="md:flex-1 md:max-h-[70vh] md:max-w-[20vw] my-5 md:my-0 flex flex-col items-center md:block  py-3 mx-5 md:mx-0 bg-white md:bg-none">
      <Dorms selected={selected} setSelected={setSelected} />
      <Private selected={selected} setSelected={setSelected} />
    </div>
  );
};

export default SectionSellect;

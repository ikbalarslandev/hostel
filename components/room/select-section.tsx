import Dorms from "./dorms";
import Private from "./private";

const SectionSellect = ({ selected, setSelected }: any) => {
  return (
    <div className="md:w-[40vw] mt-5">
      <Dorms selected={selected} setSelected={setSelected} />
      <Private selected={selected} setSelected={setSelected} />
    </div>
  );
};

export default SectionSellect;

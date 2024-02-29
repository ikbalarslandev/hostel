import Dorms from "./dorms";
import Private from "./private";

const SectionSellect = ({ selected, setSelected }: any) => {
  return (
    <div className="md:w-[40vw] my-5 flex flex-col items-center md:block bg-white py-3 mx-5 md:mx-0">
      <Dorms selected={selected} setSelected={setSelected} />
      <Private selected={selected} setSelected={setSelected} />
    </div>
  );
};

export default SectionSellect;

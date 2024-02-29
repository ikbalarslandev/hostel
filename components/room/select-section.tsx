import Dorms from "./dorms";
import Private from "./private";

const SectionSellect = ({ selected, setSelected }: any) => {
  return (
    <div className="md:flex-1 my-5 md:my-0 flex flex-col items-center md:block bg-white py-3 mx-5 md:mx-0">
      <Dorms selected={selected} setSelected={setSelected} />
      <Private selected={selected} setSelected={setSelected} />
    </div>
  );
};

export default SectionSellect;

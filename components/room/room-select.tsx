import { Button } from "@/components/ui/button";

const Select = ({ name, selected, setSelected }: any) => {
  const handleClick = () => {
    setSelected(name);
  };

  return (
    <div className="bg-white py-2">
      <Button
        variant="empty"
        onClick={handleClick}
        className={`${
          name === selected
            ? "bg-pink text-white md:scale-x-125 scale-x-105"
            : "bg-yellow-400 hover:scale-x-125"
        }  rounded-none font-bold text-xl w-[78vw] md:w-[15vw]  text-center transition-transform duration-700 ease-in-out transform `}
      >
        {name}
      </Button>
    </div>
  );
};

export default Select;

import { Button } from "@/components/ui/button";

const Select = ({ name, selected, setSelected }: any) => {
  const handleClick = () => {
    setSelected(name);
  };

  return (
    <Button
      variant="empty"
      onClick={handleClick}
      className={`${
        name === selected
          ? "bg-pink text-white md:scale-x-125 scale-x-105"
          : "bg-yellow-400 hover:scale-x-125"
      }  rounded-none font-bold text-xl w-[78vw] md:w-[30vw]  text-center transition-transform duration-700 ease-in-out transform `}
    >
      {name}
    </Button>
  );
};

export default Select;

const Select = ({ name, selected, setSelected }: any) => {
  const handleClick = () => {
    setSelected(name);
  };

  return (
    <p
      onClick={handleClick}
      className={`${
        name === selected
          ? "bg-pink text-white scale-x-150"
          : "bg-yellow-400 hover:scale-x-125"
      }  pointer font-bold text-xl w-[78vw] md:w-[30vw]  text-center transition-transform duration-700 ease-in-out transform `}
    >
      {name}
    </p>
  );
};

export default Select;

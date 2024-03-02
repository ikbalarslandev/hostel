import Select from "./room-select";

const Dorms = ({ selected, setSelected }: any) => {
  return (
    <div>
      <h1 className="text-center text-black font-bold text-2xl bg-white pb-4 ">
        Dorms
      </h1>
      <div className="flex flex-col ">
        <Select
          name="8 Mixed Dorm"
          selected={selected}
          setSelected={setSelected}
        />
        <Select
          name="6 Mixed Dorm"
          selected={selected}
          setSelected={setSelected}
        />
        <Select
          name="4 Mixed Dorm"
          selected={selected}
          setSelected={setSelected}
        />
      </div>
    </div>
  );
};

export default Dorms;

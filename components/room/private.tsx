import Select from "./room-select";

const Private = ({ selected, setSelected }: any) => {
  return (
    <div className="pt-10 bg-white pb-5">
      <h1 className="text-center text-black  font-bold text-2xl mb-4">
        Private Rooms
      </h1>
      <div className="flex flex-col ">
        <Select
          name="Double Room"
          selected={selected}
          setSelected={setSelected}
        />
      </div>
    </div>
  );
};

export default Private;

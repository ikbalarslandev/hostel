import Select from "./room-select";

const Private = ({ selected, setSelected }: any) => {
  return (
    <div className=" bg-white   pt-10  ">
      <h1 className="text-center text-pink font-bold text-2xl mb-4">
        Private Rooms
      </h1>
      <div className="flex flex-col gap-3">
        <Select
          name="Double Room"
          selected={selected}
          setSelected={setSelected}
        />
        <Select
          name="Twin Room Bunks"
          selected={selected}
          setSelected={setSelected}
        />
        <Select
          name="Twin Room Singles"
          selected={selected}
          setSelected={setSelected}
        />
      </div>
    </div>
  );
};

export default Private;

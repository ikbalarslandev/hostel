import Select from "./room-select";

const Dorms = ({ selected, setSelected }: any) => {
  return (
    <div>
      <h1 className="text-center text-pink font-bold text-2xl bg-white pb-4 ">
        Dorms
      </h1>
      <div className="flex flex-col ">
        <Select
          name="12 Mixed Room"
          selected={selected}
          setSelected={setSelected}
        />
        <Select
          name="10 Mixed Room"
          selected={selected}
          setSelected={setSelected}
        />
        <Select
          name="6 Mixed Room"
          selected={selected}
          setSelected={setSelected}
        />
        <Select
          name="4 Mixed Room"
          selected={selected}
          setSelected={setSelected}
        />
        <Select
          name="3 Mixed Room"
          selected={selected}
          setSelected={setSelected}
        />
        <Select
          name="6 Female Room"
          selected={selected}
          setSelected={setSelected}
        />
        <Select
          name="4 Female Room"
          selected={selected}
          setSelected={setSelected}
        />
      </div>
    </div>
  );
};

export default Dorms;

import Icon from "@/components/room/icon";

const Perks = ({ room }: any) => {
  return (
    <div className="flex flex-col mx-2   md:mx-0 md:flex-1 my-4 md:my-0 pb-3  md:max-w-[15vw] md:max-h-[60vh] ">
      <h1 className="text-black text-center text-3xl py-5   font-bold bg-white ">
        Room Perks
      </h1>

      {room.perks &&
        room.perks.map((a: any) => (
          <div key={a}>
            <Icon icon={a} />
          </div>
        ))}
    </div>
  );
};

export default Perks;

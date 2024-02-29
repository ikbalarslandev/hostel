import Icon from "@/components/room/icon";

const Perks = ({ room }: any) => {
  return (
    <div className="flex flex-col px-12 mx-5 md:mx-0 md:flex-1 my-3 pb-3 bg-pink">
      <h1 className="text-white text-center text-3xl my-5  font-bold">
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
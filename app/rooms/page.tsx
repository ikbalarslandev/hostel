"use client";
import { useState, useEffect } from "react";
import SectionSellect from "@/components/room/select-section";
import data from "@/data/rooms";
import Icon from "@/components/room/icon";

const Rooms = () => {
  const [selected, setSelected] = useState("12 Mixed Room");
  const [room, setRoom] = useState<any>({});

  useEffect(() => {
    const roomfetch = data.find((room) => room.title === selected);
    setRoom(roomfetch);
  }, [selected]);

  return (
    <main className="overflow-hidden bg-gray-300">
      <div className="banner3  w-screen h-28 md:h-40 flex flex-col  items-center justify-center">
        <h1 className="text-white text-5xl font-bold shadow-lg">Rooms</h1>
      </div>
      <div className="flex flex-col justify-between md:flex-row">
        <SectionSellect selected={selected} setSelected={setSelected} />
        <div className="flex flex-col px-12 mx-5 md:mx-0 md:w-[40vw] my-3 pb-3 bg-pink">
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
      </div>
    </main>
  );
};

export default Rooms;

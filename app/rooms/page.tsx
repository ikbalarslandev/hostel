"use client";
import { useState, useEffect } from "react";
import SectionSellect from "@/components/room/select-section";
import data from "@/data/rooms";
import Perks from "@/components/room/perks";
import Details from "@/components/room/details";

const Rooms = () => {
  const [selected, setSelected] = useState("12 Mixed Room");
  const [room, setRoom] = useState<any>({});

  useEffect(() => {
    const roomfetch = data.find((room) => room.title === selected);
    setRoom(roomfetch);
  }, [selected]);

  return (
    <main className="overflow-hidden bg-stone-200 min-h-screen">
      <div className="banner3  w-screen h-28 md:h-40 flex flex-col  items-center justify-center">
        <h1 className="text-white text-5xl font-bold shadow-lg">Rooms</h1>
      </div>
      <div className="flex flex-col md:gap-20 justify-between md:flex-row min-h-[80vh] md:mt-4">
        <SectionSellect selected={selected} setSelected={setSelected} />
        <Details room={room} />
        <Perks room={room} />
      </div>
    </main>
  );
};

export default Rooms;

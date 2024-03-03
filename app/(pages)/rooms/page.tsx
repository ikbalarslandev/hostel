"use client";
import { useState, useEffect } from "react";
import SectionSellect from "@/components/room/select-section";
import data from "@/data/rooms";
import Perks from "@/components/room/perks";
import Details from "@/components/room/details";
import PageTemplate from "@/components/page.template";

const Rooms = () => {
  const [selected, setSelected] = useState("8 Mixed Dorm");
  const [room, setRoom] = useState<any>({});

  useEffect(() => {
    const roomfetch = data.find((room) => room.title === selected);
    setRoom(roomfetch);
  }, [selected]);

  return (
    <main className="bg-zinc-200">
      <PageTemplate title="Rooms" />
      <div className="flex flex-col md:gap-20 justify-between md:flex-row min-h-[80vh] md:mt-4">
        <SectionSellect selected={selected} setSelected={setSelected} />
        <Details room={room} />
        <Perks room={room} />
      </div>
    </main>
  );
};

export default Rooms;

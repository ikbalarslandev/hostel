"use client";
import { useState, useEffect } from "react";
import SectionSellect from "@/components/room/select-section";
import data from "@/data/rooms";

const Rooms = () => {
  const [selected, setSelected] = useState("12 Mixed Room");

  useEffect(() => {
    const room = data.find((room) => room.title === selected);
    console.log(room);
  }, [selected]);

  return (
    <main className="overflow-hidden">
      <div className="banner3  w-screen h-40 flex flex-col items-center justify-center">
        <h1 className="text-white text-5xl font-bold shadow-lg">Rooms</h1>
      </div>
      <SectionSellect selected={selected} setSelected={setSelected} />
    </main>
  );
};

export default Rooms;

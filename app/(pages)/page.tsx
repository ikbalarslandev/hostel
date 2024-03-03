"use client";

import { APIProvider } from "@vis.gl/react-google-maps";
import Hero from "@/components/hero";
import Rooms from "@/components/room-types";
import Services from "@/components/services";
import Banner from "@/components/banner";
import MapPage from "@/components/map";

export default function Home() {
  return (
    process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY && (
      <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
        <main className="overflow-hidden">
          <Hero />
          <Rooms />
          <Services />
          <Banner />
          <MapPage className="h-[90vh] max-w-screen " />
        </main>
      </APIProvider>
    )
  );
}

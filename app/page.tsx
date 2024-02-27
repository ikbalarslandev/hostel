import Hero from "@/components/hero";
import Rooms from "@/components/room-types";
import Services from "@/components/services";
import Banner from "@/components/banner";
import MapPage from "@/components/map";

export default function Home() {
  return (
    <main>
      <Hero />
      <Rooms />
      <Services />
      <Banner />
      <MapPage className="h-[90vh] max-w-screen" />
    </main>
  );
}

import Hero from "@/components/hero";
import Rooms from "@/components/room-types";
import Services from "@/components/services";
import Banner from "@/components/banner";

export default function Home() {
  return (
    <main>
      <Hero />
      <Rooms />
      <Services />
      <Banner />
    </main>
  );
}

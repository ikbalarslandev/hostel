import Slider from "@/components/room/img-slider";
import { Button } from "@/components/ui/button";

const Details = ({ room }: any) => {
  return (
    <div className="flex-1 md:max-w-[50vw] md:flex-auto bg-white px-2 gap-4  flex flex-col items-center md:justify-start justify-center">
      <h1 className="text-center text-2xl -mb-8 mt-5 z-10 bg-black px-8 py-2  font-bold text-white ">
        {room.title}
      </h1>
      <Slider imgUrls={room.imgUrls} />
      <Button className="p-6 bg-pink text-black w-full text-2xl md:max-w-[20vw]">
        Book Now
      </Button>
      <p className="p-10 text-xl font-semibold">{room.description}</p>
    </div>
  );
};
export default Details;

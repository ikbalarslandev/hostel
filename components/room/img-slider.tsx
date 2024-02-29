import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const Slider = ({ imgUrls }: any) => {
  return (
    <Carousel className="w-full   ">
      <CarouselContent>
        {imgUrls?.map((item: string) => (
          <CarouselItem key={item}>
            <div className=" ">
              <Card>
                <CardContent className="flex  items-center justify-center ">
                  <Image
                    src={item}
                    alt="room"
                    width={1000}
                    height={1000}
                    objectFit="cover"
                    className="bg-black "
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default Slider;

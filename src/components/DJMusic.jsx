"use client";
import useEmblaCarousel from "embla-carousel-react";
import { SlideUpCard } from "./SlideUpCard";
import emblaCarouselAutoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

const Images = ["/images/DJMusic.png", "/images/ChendaMelam.png"];

export const DJMusic = () => {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
  return (
    <SlideUpCard>
      <div className="w-full h-full overflow-hidden">
        <Carousel plugins={[plugin.current]} className="w-full h-full">
          <CarouselContent className="w-full h-full">
            {Images?.map((img, i) => (
              <CarouselItem key={i} className="w-full h-full">
                <img src={img} className="w-full h-full object-cover" />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </SlideUpCard>
  );
};

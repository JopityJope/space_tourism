"use client";
import React, { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { type CarouselApi } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { Button } from "@/components/ui/button";

function Crew() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const crew = [
    {
      title: "commander",
      name: "Douglas Hurley",
      description:
        "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
      image: "douglas-hurley",
    },
    {
      title: "mission specialst",
      name: "Mark Shuttleworth",
      description:
        "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
      image: "mark-shuttleworth",
    },
    {
      title: "pilot",
      name: "Victor Glover",
      description:
        "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
      image: "victor-glover",
    },
    {
      title: "flight engineer",
      name: "Anousheh Ansari",
      description:
        "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
      image: "anousheh-ansari",
    },
  ];

  return (
    <div className="flex flex-col flex-1 text-tertiary">
      <h1 className="text-[2.8rem] max-laptop:text-[2rem] max-tablet:text-[2rem] max-mobile:text-[1.6rem] uppercase tracking-[4.72px] mt-[6rem] ml-[14rem] max-laptop:ml-[9rem] max-mobile:mx-[auto]">
        <span className="font-bold mr-[2rem] opacity-25">02</span>
        Meet your crew
      </h1>
      <Carousel
        setApi={setApi}
        plugins={[
          Autoplay({
            delay: 4000,
          }),
        ]}
        opts={{
          align: "start",
          loop: false,
        }}
        className="ml-[14rem] max-tablet:px-[3rem] max-laptop:ml-[0] flex flex-1 items-end max-mobile:items-start"
      >
        <CarouselContent>
          {crew.map((member, index) => (
            <CarouselItem key={index} className="">
              <div className="flex flex-1 gap-[5rem] justify-between pr-[10%] max-laptop:flex-col max-mobile:flex-col-reverse max-laptop:pr-[0] max-laptop:items-center max-mobile:pt-[5rem] ">
                <div className="max-w-[48.8rem] mt-[15rem] max-laptop:mt-[4rem] max-laptop:text-center">
                  <h2 className="font-bellefair text-hover uppercase text-[3.2rem] max-laptop:text-[2.4rem] max-laptop:text-[2.4rem]">
                    {member.title}
                  </h2>
                  <h1 className="font-bellefair uppercase text-[5.6rem] max-laptop:text-[4rem] max-talet:text-[2.4rem] max-talet:text-[2rem]">
                    {member.name}
                  </h1>
                  <p className="text-[1.8rem] max-laptop:text-[1.6rem] max-tablet:text-[1.5rem] leading-paragraph tracking-paragraph text-secondary pb-[2rem]">
                    {member.description}
                  </p>
                </div>
                <div className="flex relative">
                  <Image
                    src={`/assets/crew/image-${member.image}.webp`}
                    height={700}
                    width={600}
                    alt={member.name}
                    className="h-[70rem] w-auto max-laptop:h-[45rem] max-mobile:h-[22.5rem]"
                  />
                  <div className="absolute bottom-[-1px] left-[50%] translate-x-[-50%] bg-hover bg-opacity-60 w-[29rem] h-[1px] hidden max-mobile:block"></div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="flex absolute left-[14rem] top-[88rem] gap-[3rem] max-laptop:left-[50%] max-laptop:translate-x-[-50%] max-laptop:top-[47rem]">
        {Array.from(Array(count).keys()).map((i) => (
          <Button
            key={i}
            className={`h-[1.5rem] w-[1.5rem] max-laptop:h-[1rem] max-laptop:w-[1rem] rounded-full   ${
              i === current - 1 ? "bg-tertiary" : "bg-hover"
            }`}
            onClick={() => api?.scrollTo(i)}
          />
        ))}
      </div>
    </div>
  );
}

export default Crew;

{
  /* 

"use client";
import { useEffect } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import {
  DotButton,
  useDotButton,
} from "../../components/ui/carousel/EmblaCarouselDotButton";
import { EmblaOptionsType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

const Crew: React.FC<PropType> = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [Autoplay()]);

  const slides = [1, 2, 3];

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);



////////

<div className="flex flex-col flex-1 text-[#fff]">
<h1 className="text-[2.8rem] max-laptop:text-[2rem] max-tablet:text-[2rem] max-mobile:text-[1.6rem] uppercase tracking-[4.72px] mt-[6rem] ml-[14rem] max-laptop:ml-[9rem] max-mobile:mx-[auto]">
  <span className="font-bold mr-[2rem] opacity-25">02</span>
  Meet your crew
</h1>
<div className="carousel flex flex-1 ml-[14rem] items-end">
  <div className="embla flex flex-1" ref={emblaRef}>
    <div className="embla__container">
      {slides.map((index) => (
        <>
          <div className="embla__slide">
            <div className="flex gap-[1rem]">
              <div className="w-[48.8rem] mb-[30rem] mt-[15rem] mr-[30rem]">
                <h2 className="font-bellefair text-hover uppercase text-[3.2rem]">
                  Commander
                </h2>
                <h1 className="font-bellefair uppercase text-[5.6rem]">
                  Douglas Hurley
                </h1>
                <p className="text-[1.8rem] max-laptop:text-[1.6rem] max-tablet:text-[1.5rem] leading-paragraph tracking-paragraph text-[#D0D6F9] pb-[2rem]">
                  Lorem ipsum, dolor sit amet consectetur adipisicing
                  elit. Aut culpa quas perferendis harum consequatur
                  veniam reprehenderit officia libero illo? Ipsum
                  reprehenderit unde quo recusandae nostrum. Dolorem
                  ratione id aliquid iure!
                </p>
              </div>
              <div className="flex items-end">
                <Image
                  src="/assets/crew/image-douglas-hurley.webp"
                  width={600}
                  height={800}
                  alt=""
                />
              </div>
            </div>
          </div>
        </>
      ))}
    </div>

    <div className="embla__controls">
      <div className="embla__dots">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => onDotButtonClick(index)}
            className={"embla__dot".concat(
              index === selectedIndex ? " embla__dot--selected" : ""
            )}
          />
        ))}
      </div>
    </div>
  </div>
</div>
</div> */
}

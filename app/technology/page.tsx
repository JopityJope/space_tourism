"use client";
import React, { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { type CarouselApi } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { Button } from "@/components/ui/button";

function Technology() {
  const [orientation, setOrientation] = useState<
    "horizontal" | "vertical" | undefined
  >();
  function getWindowOrientation() {
    if (width !== null) {
      return width < 1350 ? "horizontal" : "vertical";
    }
  }
  const [width, setWidth] = useState<number | null>(null);
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
      handleResize();
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  useEffect(() => {
    console.log(width);
    setOrientation(getWindowOrientation());
  }, [width]);

  const technology = [
    {
      title: "launch vehicle",
      description:
        "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",

      image:
        orientation === "horizontal"
          ? "/assets/technology/image-launch-vehicle-landscape.jpg"
          : "/assets/technology/image-launch-vehicle-portrait.jpg",
    },
    {
      title: "space port",
      description:
        "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
      image:
        orientation === "horizontal"
          ? "/assets/technology/image-spaceport-landscape.jpg"
          : "/assets/technology/image-spaceport-portrait.jpg",
    },
    {
      title: "space capsule",
      description:
        "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
      image:
        orientation === "horizontal"
          ? "/assets/technology/image-space-capsule-landscape.jpg"
          : "/assets/technology/image-space-capsule-portrait.jpg",
    },
  ];

  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    console.log(api.scrollSnapList().length);
    console.log(technology);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  useEffect(() => {
    console.log(technology[0].image, getWindowOrientation(), orientation);
  }, [technology]);

  return (
    <div className="flex flex-col flex-1 text-tertiary">
      <h1 className="text-[2.8rem] max-laptop:text-[2rem] max-tablet:text-[2rem] max-mobile:text-[1.6rem] uppercase tracking-[4.72px] mt-[6rem] ml-[14rem] max-laptop:ml-[9rem] max-mobile:mx-[auto]">
        <span className="font-bold mr-[2rem] opacity-25">03</span>
        Space launch 101
      </h1>
      {orientation && (
        <Carousel
          setApi={setApi}
          plugins={[
            Autoplay({
              delay: 5000,
            }),
          ]}
          orientation={orientation}
          className="ml-[32.5rem] mb-[5rem] flex h-[64rem] max-laptop:h-[auto] max-laptop:ml-[0] max-laptop:mt-[3rem]"
        >
          <CarouselContent className="h-[100%]">
            {technology.map((item, index) => (
              <CarouselItem key={index}>
                <div className="flex flex-1 max-laptop:h-[auto] justify-between max-laptop:justify-start max-laptop:items-center max-laptop:flex-col-reverse">
                  <div className="w-[47rem] mt-[15rem] max-tablet:px-[3rem] max-laptop:mt-[12rem] max-laptop:text-center">
                    <h2 className="font-barlowCondensed text-secondary uppercase text-[3.2rem] tracking-[2.7px] max-laptop:text-[1.6rem] max-tablet:text-[1.4rem]">
                      The terminology...
                    </h2>
                    <h1 className="font-bellefair uppercase text-[5.6rem] max-laptop:text-[4rem] max-tablet:text-[2.4rem]">
                      {item.title}
                    </h1>
                    <p className="text-[1.8rem] max-laptop:text-[1.6rem] max-tablet:text-[1.5rem] leading-paragraph tracking-paragraph text-secondary pb-[2rem]">
                      {item.description}
                    </p>
                  </div>
                  <div className="flex items-center ng-[blue] max-tablet:w-[100%] max-tablet:h-[30rem]">
                    <Image
                      src={item.image}
                      height={527}
                      width={515}
                      alt={item.title}
                      className="h-[52.7rem] w-[51.5rem] max-laptop:w-[100%] max-laptop:h-[auto]"
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      )}

      <div className="flex flex-col max-laptop:flex-row absolute left-[14rem] top-[40rem] gap-[3rem] max-laptop:left-[50%] max-laptop:top-[50rem] max-laptop:translate-x-[-50%] max-tablet:top-[52rem]">
        {Array.from(Array(count).keys()).map((i) => (
          <Button
            key={i}
            className={`h-[8rem] w-[8rem] max-laptop:h-[5.8rem] max-laptop:w-[5.8rem] max-tablet:h-[4rem] max-tablet:w-[4rem] rounded-full border-[2px] max-laptop:border-[1px] text-[3.2rem] max-laptop:text-[2.4rem] max-laptop:text-[1.6rem] font-bellefair ${
              i === current - 1
                ? "bg-tertiary border-tertiary text-primary"
                : "bg-[transparent] border-hover text-tertiary"
            }`}
            onClick={() => api?.scrollTo(i)}
          >
            {i + 1}
          </Button>
        ))}
      </div>
    </div>
  );
}

export default Technology;

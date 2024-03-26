import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const tabs = ["Moon", "Mars", "Europa", "Titan"];

const destintaions = [
  {
    destination: "moon",
    image: "/assets/destination/image-moon.png",
    description:
      "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: "384,400 km",
    travelTime: "3 days",
  },
  {
    destination: "mars",
    image: "/assets/destination/image-mars.png",
    description:
      "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    distance: "225 mil. km",
    travelTime: "9 months",
  },
  {
    destination: "europa",
    image: "/assets/destination/image-europa.png",
    description:
      "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    distance: "628 mil. km",
    travelTime: "3 years",
  },
  {
    destination: "titan",
    image: "/assets/destination/image-moon.png",
    description:
      "See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you're there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: "1.6 bil. km",
    travelTime: "7 years",
  },
];

function Destination() {
  return (
    <main className="flex flex-col flex-1 text-[#fff] ">
      <h1 className="text-[2.8rem] max-laptop:text-[2rem] max-tablet:text-[2rem] max-mobile:text-[1.6rem] uppercase tracking-[4.72px] mt-[6rem] ml-[14rem] max-laptop:ml-[9rem] max-mobile:mx-[auto]">
        <span className="font-bold mr-[2rem] opacity-25">01</span>
        Pick your destination
      </h1>

      <Tabs
        defaultValue="moon"
        className="flex flex-1 gap-[0] flex-col items-start max-laptop:items-center ml-[55%] max-laptop:mx-[auto] mt-[6rem] max-laptop:mt-[35rem] max-laptop:mb-[1rem] max-mobile:mt-[25rem] "
      >
        <TabsList className="flex gap-[2rem] bg-[transparent] mb-[1rem]">
          {tabs.map((tab) => (
            <TabsTrigger
              className="text-[1.6rem] uppercase tracking-[2.4px]"
              key={tab.toLowerCase()}
              value={tab.toLowerCase()}
            >
              {tab}
            </TabsTrigger>
          ))}
        </TabsList>
        {destintaions.map((destination, i) => (
          <TabsContent
            className=""
            value={destination.destination}
            key={destination.destination}
          >
            <div className="absolute left-[14rem] max-laptop:left-[50%] max-laptop:translate-x-[-50%] max-laptop:top-[22rem]  max-tablet:top-[19rem] max-mobile:top-[20rem]">
              <Image
                alt={destination.destination}
                src={destination.image}
                width="400"
                height="400"
                className="w-[44rem] h-[44rem] max-laptop:w-[28rem] max-laptop:h-[28rem] max-mobile:w-[17rem] max-mobile:h-[17rem] left-[14rem] animate-spin-slow z-0"
              />
            </div>
            <div className="w-[44.5rem] pr-[2rem] max-laptop:pr-[0] max-laptop:w-[73rem] max-tablet:w-[40rem] max-mobile:max-w-[30rem] max-mobile:px-[1rem] max-laptop:text-center items-start ">
              <div className="flex flex-col items-start max-laptop:items-center">
                <h1 className="text-heading-2 max-tablet:text-[8rem] max-mobile:text-[5.6rem] font-bellefair uppercase">
                  {destination.destination}
                </h1>
                <p className="text-[1.8rem] max-laptop:text-[1.6rem]  max-tablet:text-[1.5rem] leading-paragraph tracking-paragraph text-secondary pb-[4rem] border-b-[1px] border-border h-[17rem] max-laptop:h-[9rem] max-tablet:h-[15rem] max-mobile:h-[18rem]">
                  {destination.description}
                </p>
                <div className="flex mt-[2rem] gap-[5rem] max-mobile:gap-[2rem] max-mobile:flex-col">
                  <div className="flex flex-col items-start max-laptop:items-center">
                    <p className="text-subheading-2 uppercase tracking-subheading-2 text-secondary">
                      Avg. distance
                    </p>
                    <p className="text-subheading-1 uppercase font-bellefair">
                      {destination.distance}
                    </p>
                  </div>
                  <div className="flex flex-col items-start max-laptop:items-center ">
                    <p className="text-subheading-2 uppercase tracking-subheading-2 text-secondary">
                      Est. travel time
                    </p>
                    <p className="text-subheading-1 uppercase font-bellefair">
                      {destination.travelTime}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </main>
  );
}

export default Destination;

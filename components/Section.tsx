"use client";
import React, { ReactNode } from "react";
import { usePathname } from "next/navigation";

interface SectionProps {
  children?: ReactNode;
}

const Section = ({ children }: SectionProps) => {
  const pathname = usePathname();

  let bgClassName;
  switch (pathname) {
    case "/":
      bgClassName = `bg-[url('/assets/home/background-home-desktop.jpg')] 
      max-tablet:bg-[url('/assets/home/background-home-tablet.jpg')]
      max-mobile:bg-[url('/assets/home/background-home-mobile.jpg')]`;
      break;
    case "/destination":
      bgClassName = `bg-[url('/assets/destination/background-destination-desktop.jpg')] 
      max-tablet:bg-[url('/assets/destination/background-destination-tablet.jpg')]
      max-mobile:bg-[url('/assets/destination/background-destination-mobile.jpg')]`;
      break;
    case "/crew":
      bgClassName = `bg-[url('/assets/crew/background-crew-desktop.jpg')] 
      max-tablet:bg-[url('/assets/crew/background-crew-tablet.jpg')]
      max-mobile:bg-[url('/assets/crew/background-crew-mobile.jpg')]`;
      break;

    case "/technology":
      bgClassName = `bg-[url('/assets/technology/background-technology-desktop.jpg')] 
        max-tablet:bg-[url('/assets/technology/background-technology-tablet.jpg')]
        max-mobile:bg-[url('/assets/technology/background-technology-mobile.jpg')]`;
      break;

    default:
      bgClassName = ""; // Set a default value if none of the cases match
  }

  return (
    <section
      className={`overflow-x-hidden bg-cover bg-no-repeat min-h-screen box-border flex flex-col ${bgClassName}`}
    >
      {children}
    </section>
  );
};

export default Section;

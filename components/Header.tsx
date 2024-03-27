"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";

interface NavItems {
  id: string;
  name: string;
}

const navItems: NavItems[] = [
  { id: "", name: "Home" },
  { id: "destination", name: "Destination" },
  { id: "crew", name: "Crew" },
  { id: "technology", name: "Technology" },
];

function Header() {
  const currentPage = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        !isMenuOpen && // Only open the menu if it's currently closed
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        event.target !== closeRef.current
      ) {
        setIsMenuOpen(true); // Open the menu
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  const isActive = (id: string) => {
    return `/${id}` === currentPage;
  };

  return (
    <header className="flex flex-row items-center pl-[5rem] pt-[4rem] max-laptop:pt-[0] max-tablet:pt-[2rem] max-laptop:pl-[3rem]">
      <div className="flex items-center min-w-[4.8rem]">
        <Image
          src="/assets/shared/logo.svg"
          alt="logo"
          width={48}
          height={48}
          className="w-[4.8rem] h-[4.8rem] max-tablet:h-[4rem] max-tablet:w-[4rem]"
        />
      </div>
      <div className="w-[100%] h-[0.1rem] ml-[4rem] mr-[-4rem] bg-white bg-opacity-10 backdrop-blur-lg z-10 max-laptop:hidden"></div>
      <nav
        role="navigation"
        className=" h-[9.6rem] ml-auto self-stretch flex max-tablet:hidden pl-[10%] pr-[10%] bg-white bg-opacity-10 backdrop-blur-lg "
      >
        <ul className="flex justify-between items-center text-[1.8rem] gap-[6rem] text-[1.8rem] max-laptop:text-[1.6rem] max-laptop:gap-[3rem]">
          {navItems.map((item, index) => (
            <li
              key={item.id}
              className={`text-white uppercase tracking-[0.5rem] after:content-[''] after:block after:w-[0] after:h-[0.3rem] after:translate-y-[3.2rem] max-laptop:after:translate-y-[3.3rem] max-tablet:after:hidden after:bg-hover after:transition-[width, background] after:duration-300 hover:after:w-[100%] ${
                isActive(item.id) ? "after:w-[100%] after:bg-tertiary" : ""
              }`}
            >
              <Link href={`/${item.id}`} onClick={() => setIsMenuOpen(false)}>
                <span className="font-bold max-laptop:hidden mr-[1rem]">{`0${index}`}</span>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div
        ref={closeRef}
        className="hidden relative max-tablet:flex ml-auto mr-[3rem] min-w-[2.4rem] "
      >
        <Image
          src={
            isMenuOpen
              ? "/assets/shared/icon-close.svg"
              : "/assets/shared/icon-hamburger.svg"
          }
          alt="logo"
          width={24}
          height={isMenuOpen ? 24 : 21}
          className={`hover:opacity-60 w-[2.4rem] h-[${
            isMenuOpen ? "2.4" : "2.1"
          }rem] z-20 cursor-pointer`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
        {isMenuOpen && (
          <nav
            ref={menuRef}
            role="navigation"
            className={`fixed inset-y-0 right-0 left-[30%] bg-white bg-opacity-5 backdrop-blur-lg z-10 flex pt-[18rem] pl-[4rem]`}
          >
            <ul className="flex flex-col text-[2rem] gap-[4rem]">
              {navItems.map((item, index) => (
                <li
                  key={item.id}
                  className={`text-tertiary uppercase tracking-[0.5rem] hover:opacity-60 ${
                    isActive(item.id)
                      ? "after:w-[100%] after:bg-tertiary text-[#D0D6f9]"
                      : ""
                  }`}
                >
                  <Link
                    href={`/${item.id}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="font-bold mr-[1rem]">{`0${index}`}</span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;

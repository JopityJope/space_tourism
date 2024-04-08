import Link from "next/link";
import { performRequest } from "../lib/datocms";

const HOMEPAGE_CONTENT_QUERY = `
  query Home {
    home {
      id
      paragraph
      titlePrimary
      titleSecondary
      button
    }
  }`;

export default async function Home() {
  const {
    data: { home },
  } = await performRequest({ query: HOMEPAGE_CONTENT_QUERY });
  console.log(home);

  return (
    <main className="flex-1 flex justify-between ml-[14rem] mr-[15%] max-laptop:mr-[8rem] max-laptop:ml-[5rem] items-end mb-[18rem] max-laptop:mb-[20em] max-tablet:mb-[3rem] max-tablet:ml-[0.5rem]  max-tablet:mr-[0.5rem] max-tablet:flex-col max-tablet:items-center max-tablet:justify-start">
      <div className="text-white w-[44.5rem] max-laptop:w-[40rem] max-tablet:w-[70%] max-mobile:w-[90%] max-tablet:text-center mt-[10rem] max-mobile:mt-[12rem]">
        {home.titleSecondary && home.titlePrimary && (
          <h1 className="font-bellefair uppercase text-[14rem]  max-laptop:text-[12rem] max-tablet:text-[8rem]">
            <span className="text-[2.8rem] max-laptop:text-[2rem] max-tablet:text-[1.6rem] block tracking-[4.72px] font-barlowCondensed text-[#D0D6F9] ">
              {home.titleSecondary}
            </span>
            {home.titlePrimary}
          </h1>
        )}
        {home.paragraph && (
          <p className="text-[1.8rem] max-laptop:text-[1.6rem] max-tablet:text-[1.5rem] leading-paragraph tracking-paragraph text-[#D0D6F9] pb-[2rem]">
            {home.paragraph}
          </p>
        )}
      </div>
      {home.button && (
        <Link href="/destination">
          <button className="bg-white w-[27.4rem] h-[27.4rem] ] max-tablet:mr-[0] max-tablet:mt-[12rem] max-mobile:mt-[10rem] max-laptop:w-[20rem] max-laptop:h-[20rem] max-tablet:w-[15rem] max-tablet:h-[15rem] rounded-full text-[#0B0D17] text-[3.2rem] max-laptop:text-[2.2rem] max-tablet:text-[2rem] uppercase font-bellefair hover:shadow-[0_0_0_8rem] hover:shadow-[#fff5] max-laptop:hover:shadow-[0_0_0_5.5rem] max-laptop:hover:shadow-[#fff5] transition-[box-shadow] duration-500">
            {home.button}
          </button>
        </Link>
      )}
    </main>
  );
}

import type { Metadata } from "next";
import { Barlow_Condensed, Barlow, Bellefair } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Section from "@/components/Section";

const Barlow_Condensed_init = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-barlow-condensed",
});

const Barlow_init = Barlow({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-barlow",
});

const Bellefair_init = Bellefair({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bellefair",
});

export const metadata: Metadata = {
  title: "Space tourism website",
  description: "Space tourism website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="text-[62.5%]">
      <body
        suppressHydrationWarning={true}
        className={`${Barlow_Condensed_init.variable} ${Barlow_init.variable} ${Bellefair_init.variable} font-barlowCondensed bg-primary`}
      >
        <Section>
          <Header />
          {children}
        </Section>
      </body>
    </html>
  );
}

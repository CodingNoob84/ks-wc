"use client";
import { Header } from "@/components/Header";
import { HomeButton } from "@/components/HomeButton";
import { Register } from "@/components/Register";
import { SlideUpCard } from "@/components/SlideUpCard";
import useScreenSize from "@/hooks/useScreenSize";

export default function InfoPage() {
  const { isMobileScreen } = useScreenSize();
  return (
    <>
      <div
        className={`flex flex-col ${
          isMobileScreen ? "h-full" : "h-screen"
        } items-center `}
      >
        <Header />
        <HomeButton />
        <div
          className={`flex ${isMobileScreen ? "flex-col" : "flex-row"}  gap-10`}
        >
          <SlideUpCard>maps</SlideUpCard>
          <SlideUpCard>
            <Register />
          </SlideUpCard>
        </div>
      </div>
    </>
  );
}

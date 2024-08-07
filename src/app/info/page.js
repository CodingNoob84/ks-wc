"use client";
import { Header } from "@/components/Header";
import { HomeButton } from "@/components/HomeButton";
import { Register } from "@/components/Register";
import { RegisterCard } from "@/components/RegisterCard";
import { SlideUpCard } from "@/components/SlideUpCard";
import { Venue } from "@/components/Venue";
import useScreenSize from "@/hooks/useScreenSize";

export default function InfoPage() {
  const { isMobileScreen } = useScreenSize();
  return (
    <>
      <div
        className={`flex flex-col ${
          isMobileScreen ? "h-full" : "h-screen"
        } items-center bg-orange-100 `}
      >
        <Header />
        <HomeButton />
        <div
          className={`flex ${
            isMobileScreen ? "flex-col" : "flex-row"
          }  gap-10  mx-2`}
        >
          <SlideUpCard>
            <Venue />
          </SlideUpCard>
          <SlideUpCard>
            {/* <RegisterCard /> */}
            <Register />
          </SlideUpCard>
        </div>
      </div>
    </>
  );
}

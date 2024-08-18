"use client";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HomeButton } from "@/components/HomeButton";
import { Register } from "@/components/Register";
import { RegisterCard } from "@/components/RegisterCard";
import { SlideUpCard } from "@/components/SlideUpCard";
import { Venue } from "@/components/Venue";
import useScreenSize from "@/hooks/useScreenSize";
import Confetti from "confetti-react";
import { useState } from "react";
import ConfettiExplosion from "react-confetti-explosion";

export default function InfoPage() {
  const { width, height, isMobileScreen } = useScreenSize();
  const [isExplosion, setIsExplosion] = useState(false);
  return (
    <>
      <div
        className={`flex flex-col h-full sm:h-screen items-center bg-orange-100 `}
        style={{
          backgroundImage: "url('./images/winter.gif')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: isMobileScreen ? "100%" : "100vh",
        }}
      >
        {/* {isExplosion && <Confetti width={width} height={height} />} */}
        <Header />
        <HomeButton />
        {/* <div onClick={() => setIsExplosion(true)}>click</div> */}
        <div
          className={`flex ${
            isMobileScreen ? "flex-col" : "flex-row"
          }  gap-10  mx-2`}
        >
          <SlideUpCard memeShow={false}>
            <Venue />
          </SlideUpCard>
          <SlideUpCard memeShow={false}>
            <Register />
          </SlideUpCard>
        </div>
        <Footer />
      </div>
    </>
  );
}

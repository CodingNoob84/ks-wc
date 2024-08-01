"use client";
import { BottomNav } from "@/components/BottomNav";
import { CoverComponent } from "@/components/CoverComponent";
import { DesktopIntro } from "@/components/DesktopIntro";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Info } from "@/components/Info";
import { SlideUpCard } from "@/components/SlideUpCard";
import { Tabs } from "@/components/Tabs";
import { TabsMob } from "@/components/TabsMob";
import { ImageReveal } from "@/components/test/ImageReveal";
import Intro from "@/components/test/Intro";
import { TabsOne } from "@/components/test/TabsOne";
import { TabsTwo } from "@/components/test/TabsTwo";

import useScreenSize from "@/hooks/useScreenSize";
import { useState } from "react";

export default function Home() {
  const [intro, setIntro] = useState(true);
  const { isMobileScreen } = useScreenSize();
  return (
    <div
      className={`flex flex-col ${
        isMobileScreen ? "h-full" : "h-screen"
      } items-center bg-orange-200 `}
    >
      {/* bg-gradient-to-r from-purple-300 via-purple-500 to-purple-700 */}

      {isMobileScreen ? (
        <>
          {intro ? (
            <Intro setIntro={setIntro} />
          ) : (
            <>
              <TabsMob />
              <Info />
              <Footer />
            </>
          )}
        </>
      ) : (
        <>
          {intro ? (
            <DesktopIntro setIntro={setIntro} />
          ) : (
            <>
              <Header />
              <Tabs />
              <Info />
              <Footer />
            </>
          )}
        </>
      )}
    </div>
  );
}

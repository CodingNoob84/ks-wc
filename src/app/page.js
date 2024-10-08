"use client";
import { DesktopView } from "@/components/DesktopView";
import { MobileView } from "@/components/MobileView";

import useScreenSize from "@/hooks/useScreenSize";
import { useEffect, useState } from "react";

export default function Home() {
  const [pageLoaded, setPageLoaded] = useState(false);
  const [intro, setIntro] = useState(true);
  const { isMobileScreen } = useScreenSize();

  useEffect(() => {
    // This effect runs once on component mount
    setPageLoaded(true);
  }, []);
  return (
    <>
      <div
        className="sm:hidden h-full flex flex-col"
        style={{
          backgroundImage: "url('./images/winter.gif')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "100%",
        }}
      >
        <MobileView intro={intro} setIntro={setIntro} />
      </div>
      <div
        className="hidden sm:block h-screen "
        style={{
          backgroundImage: "url('./images/winter.gif')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "100vh",
        }}
      >
        <DesktopView intro={intro} setIntro={setIntro} />
      </div>
    </>

    // <div
    //   className={`flex flex-col ${
    //     isMobileScreen ? "h-full" : "h-screen"
    //   }  items-center bg-orange-100 `}
    //   style={{
    //     backgroundImage: "url('./images/winter.gif')",
    //     backgroundSize: "cover",
    //     backgroundPosition: "center",
    //     width: "100%",
    //     height: isMobileScreen ? "100%" : "100vh",
    //   }}
    // >
    //   {pageLoaded ? (
    //     <>
    //       {isMobileScreen ? (
    //         <MobileView intro={intro} setIntro={setIntro} />
    //       ) : (
    //         <DesktopView intro={intro} setIntro={setIntro} />
    //       )}
    //     </>
    //   ) : (
    //     <div className="h-screen flex justify-center items-center text-[15px] text-bold">
    //       Wedding Invitation
    //     </div>
    //   )}
    // </div>
  );
}

"use client";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { SlideUpCard } from "./SlideUpCard";
import { Header } from "./Header";
import { DJMusic } from "./DJMusic";
import { Panthakal } from "./Panthakal";
import { Haldi } from "./Haldi";
import { Reception } from "./Reception";
import { Dinner } from "./Dinner";
import { Marriage, MarriageTimings } from "./Marriage";
import { Breakfast } from "./Breakfast";

const TabContents = [
  {
    id: "1",
    label: "Panthakal",
    cards: ["card11", "card12", "card13"],
  },
  {
    id: "2",
    label: "Reception",
    cards: ["card21", "card22", "card23"],
  },
  {
    id: "3",
    label: "Marriage",
    cards: ["card31", "card32", "card33"],
  },
];

const getItemsIds = (contents) => {
  return contents.map((item) => item.id);
};

export const TabsMob = () => {
  const [activeTab, setActiveTab] = useState("2");
  const currentContent = TabContents.find(
    (content) => content.id === activeTab
  );
  //const itemIds = getItemsIds(Contents);
  const containerRef = useRef(null);

  const handleTabChange = (newTab) => {
    if (containerRef.current) {
      console.log(containerRef.current);
      containerRef.current.scrollIntoView({ behavior: "smooth" });
    }

    // Set a slight delay to ensure the scroll happens first
    setTimeout(() => {
      setActiveTab(newTab.id);
    }, 300); // Adjust the delay time if needed
  };

  return (
    <>
      <div ref={containerRef} className="h-1"></div>
      <Header />
      <div className="w-full px-8 flex flex-col justify-center gap-20 mt-10 mb-20">
        {activeTab == "1" ? (
          <>
            <Panthakal />
            <Haldi />
          </>
        ) : activeTab == "2" ? (
          <>
            <DJMusic />
            <Reception />
            <Dinner />
          </>
        ) : (
          <>
            <Marriage />
            <MarriageTimings />
            <Breakfast />
          </>
        )}
        {/* {currentContent.cards.map((card, index) => (
          <SlideUpCard key={`${activeTab}-${index}`}>
            <div>{card}</div>
          </SlideUpCard>
        ))} */}
      </div>
      <div className="flex justify-center items-center w-full mx-auto">
        <nav className="fixed bottom-4 z-50 w-80  justify-center items-center bg-background border shadow-lg rounded-l-full rounded-r-full px-4 py-3">
          <div className="flex flex-row justify-between h-full">
            {TabContents.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab)}
                //onClick={() => setActiveTab(tab.id)}
                className={`${
                  activeTab === tab.id ? "" : "hover:text-white/60"
                } relative rounded-full px-3 py-1.5 text-sm font-medium  outline-sky-400 transition focus-visible:outline-2`}
                style={{
                  WebkitTapHighlightColor: "transparent",
                }}
              >
                {activeTab === tab.id && (
                  <motion.span
                    layoutId="bubble"
                    className="absolute inset-0 z-10 bg-white mix-blend-difference"
                    style={{ borderRadius: 9999 }}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                {tab.label}
              </button>
            ))}
          </div>
        </nav>
      </div>
      {/* <div className="flex justify-center items-center w-full mx-auto">
        <nav className="fixed bottom-4 z-50 w-80 justify-center items-center bg-background border shadow-lg rounded-t-xl rounded-b-xl px-4 py-3">
          <div className="flex flex-row justify-between">
            {itemIds.map((item, i) => (
              <div
                key={i}
                onClick={() => handleTabChange(item)}
                className="border rounded-full w-8 h-8 flex justify-center items-center cursor-pointer"
              >
                {item}
              </div>
            ))}
          </div>
        </nav>
      </div> */}
    </>
  );
};

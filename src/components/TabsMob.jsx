"use client";

import { useEffect, useRef, useState } from "react";
import { SlideUpCard } from "./SlideUpCard";
import { Header } from "./Header";

const Contents = [
  {
    id: "1",
    label: "item1",
    cards: ["card11", "card12", "card13"],
  },
  {
    id: "2",
    label: "item2",
    cards: ["card21", "card22", "card23"],
  },
  {
    id: "3",
    label: "item3",
    cards: ["card31", "card32", "card33"],
  },
];

const getItemsIds = (contents) => {
  return contents.map((item) => item.id);
};

export const TabsMob = () => {
  const [tab, setTab] = useState("1");
  const currentContent = Contents.find((content) => content.id === tab);
  const itemIds = getItemsIds(Contents);
  const containerRef = useRef(null);

  const handleTabChange = (newTab) => {
    if (containerRef.current) {
      console.log(containerRef.current);
      containerRef.current.scrollIntoView({ behavior: "smooth" });
    }

    // Set a slight delay to ensure the scroll happens first
    setTimeout(() => {
      setTab(newTab);
    }, 300); // Adjust the delay time if needed
  };

  return (
    <>
      <div ref={containerRef} className="h-1"></div>
      <Header />
      <div className="w-full px-8 flex flex-col gap-20 mt-10 mb-20">
        {currentContent.cards.map((card, index) => (
          <SlideUpCard key={`${tab}-${index}`}>
            <div>{card}</div>
          </SlideUpCard>
        ))}
      </div>
      <div className="flex justify-center items-center w-full mx-auto">
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
      </div>
    </>
  );
};

"use client";

import { useState } from "react";

import { SlideUpCard } from "./SlideUpCard";
import { BottomNav } from "./BottomNav";

const Contents = [
  {
    id: "1",
    item: "item1",
    cards: ["card11", "card12", "card13"],
  },
  {
    id: "2",
    item: "item2",
    cards: ["card21", "card22", "card23"],
  },
  {
    id: "3",
    item: "item3",
    cards: ["card31", "card32", "card33"],
  },
];

const getItemsIds = (contents) => {
  return contents.map((item) => item.id);
};

export const Tabs = () => {
  const [tab, setTab] = useState("1");
  const currentContent = Contents.find((content) => content.id === tab);
  const itemIds = getItemsIds(Contents);
  //console.log(itemIds);
  return (
    <>
      <div className="flex flex-row justify-between gap-10">
        {currentContent.cards.map((card, index) => (
          <SlideUpCard key={`${tab}-${index}`}>
            <div>{card}</div>
          </SlideUpCard>
        ))}
      </div>
      <BottomNav items={itemIds} tab={tab} setTab={setTab} />
    </>
  );
};

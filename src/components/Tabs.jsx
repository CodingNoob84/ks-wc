"use client";

import { useState } from "react";

import { SlideUpCard } from "./SlideUpCard";
import { BottomNav } from "./BottomNav";
import { BottomNavTest } from "./test/BottomNavTest";
import { DJMusic } from "./DJMusic";
import { Panthakal } from "./Panthakal";
import { Reception } from "./Reception";
import { Dinner } from "./Dinner";
import { Haldi } from "./Haldi";
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

export const Tabs = () => {
  const [activeTab, setActiveTab] = useState("2");
  const currentContent = TabContents.find(
    (content) => content.id === activeTab
  );
  const itemIds = getItemsIds(TabContents);
  //console.log(itemIds);
  return (
    <>
      <div className="flex flex-row justify-between gap-10">
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
          <SlideUpCard key={`${tab}-${index}`}>
            <div>{card}</div>
          </SlideUpCard>
        ))} */}
      </div>
      <BottomNavTest
        tabs={TabContents}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      {/* <BottomNav items={itemIds} tab={tab} setTab={setTab} /> */}
    </>
  );
};

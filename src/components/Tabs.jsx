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
import { ImageCard } from "./ImageCard";

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
      <div className="flex flex-row justify-center gap-10 my-5">
        {activeTab == "1" ? (
          <>
            <ImageCard
              key={11}
              Image={"./images/Panthakal.png"}
              memeImage={"./images/memes/9.png"}
            />
            <ImageCard
              key={12}
              Image={"./images/Haldi.png"}
              memeImage={"./images/memes/1.png"}
            />
          </>
        ) : activeTab == "2" ? (
          <>
            <ImageCard
              key={21}
              Image={"./images/Music.mp4"}
              memeImage={"./images/memes/3.png"}
              IsVideo={true}
            />
            <ImageCard
              key={22}
              Image={"./images/ReceptionDetails.png"}
              memeImage={"./images/memes/2.png"}
            />
            <ImageCard
              key={23}
              Image={"./images/Dinner.png"}
              memeImage={"./images/memes/4.png"}
            />
          </>
        ) : (
          <>
            <ImageCard
              key={31}
              Image={"./images/Marriage.png"}
              memeImage={"./images/memes/8.png"}
            />
            <ImageCard
              key={32}
              Image={"./images/MarriageDetails.png"}
              memeImage={"./images/memes/5.png"}
            />
            <ImageCard
              key={33}
              Image={"./images/Breakfast.png"}
              memeImage={"./images/memes/6.png"}
            />
          </>
        )}
      </div>
      <BottomNavTest
        tabs={TabContents}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </>
  );
};

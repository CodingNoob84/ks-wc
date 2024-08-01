import { Footer } from "@/components/Footer";
import { Info } from "@/components/Info";
import { BottomNavTest } from "@/components/test/BottomNavTest";
import { GlowingHeader } from "@/components/test/GlowingHeader";
import { HeaderTest } from "@/components/test/HeaderTest";
import Intro from "@/components/test/Intro";

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

export default function TestPage() {
  return (
    <div className=" h-screen">
      {/* <GlowingHeader />
      <HeaderTest /> */}
      {/* <ImageReveal /> */}
      {/* <Intro /> */}
      {/* <Tabs /> */}
      {/* <Info /> */}
      {/* <CoverComponent /> */}
      {/* <Footer /> */}
      <BottomNavTest tabs={TabContents} activeTab={""} setActiveTab={""} />
    </div>
  );
}

import { Footer } from "@/components/Footer";
import { Info } from "@/components/Info";
import { GlowingHeader } from "@/components/test/GlowingHeader";
import { HeaderTest } from "@/components/test/HeaderTest";
import Intro from "@/components/test/Intro";

export default function TestPage() {
  return (
    <div className=" h-screen">
      <GlowingHeader />
      <HeaderTest />
      {/* <ImageReveal /> */}
      {/* <Intro /> */}
      {/* <Tabs /> */}
      <Info />
      {/* <CoverComponent /> */}
      {/* <Footer /> */}
    </div>
  );
}

import { DesktopIntro } from "./DesktopIntro";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Info } from "./Info";
import { Tabs } from "./Tabs";

export const DesktopView = ({ intro, setIntro }) => {
  return (
    <>
      {intro ? (
        <DesktopIntro setIntro={setIntro} />
      ) : (
        <>
          <Header />
          <Tabs />
          <Info />
          {/* <Footer /> */}
        </>
      )}
    </>
  );
};

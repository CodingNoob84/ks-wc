import { Footer } from "./Footer";
import { Info } from "./Info";
import MobileIntro from "./MobileIntro";
import { TabsMob } from "./TabsMob";

export const MobileView = ({ intro, setIntro }) => {
  return (
    <>
      {intro ? (
        <MobileIntro setIntro={setIntro} />
      ) : (
        <>
          <TabsMob />
          <Info />
          <Footer />
        </>
      )}
    </>
  );
};

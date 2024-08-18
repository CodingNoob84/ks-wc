"use client";
import { motion } from "framer-motion";

export const BottomNavTest = ({ tabs, activeTab, setActiveTab }) => {
  console.log(tabs);
  return (
    <>
      <div className="flex flex-col justify-center items-center w-full mx-auto">
        <nav className="fixed bottom-10 z-50 w-80  justify-center items-center bg-gradient-to-tr from-red-400 via-orange-400 to-rose-400 border shadow-lg rounded-l-full rounded-r-full p-1">
          <div className="bg-white rounded-l-full rounded-r-full px-4 py-3">
            <div className="flex flex-row justify-between h-full">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`${
                    activeTab === tab.id ? "" : "hover:text-red-600/60"
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
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.6,
                      }}
                    />
                  )}
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </nav>
        <div className="fixed bottom-2 h-10 w-80 flex justify-center  shadow-[inset_-12px_-8px_40px_#46464620] font-extrabold items-center">
          Copyright &#169; 2024 | Made by Karthik
        </div>
      </div>
    </>
  );
};

// export const BottomNav = ({ items, tab, setTab }) => {
//   return (
//     <div className="fixed bottom-4 z-50 w-full sm:w-sm justify-center items-center bg-background border shadow-lg rounded-t-xl rounded-b-xl px-4 py-3">
//       <div className="flex flex-row justify-between">
//         {items.map((item, index) => (
//           <div
//             key={index}
//             // onClick={() => setTab(index.toString())}
//             // className={`cursor-pointer p-2 ${
//             //   tab === index.toString() ? "bg-gray-300" : ""
//             // }`}
//           >
//             {item}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default BottomNav;

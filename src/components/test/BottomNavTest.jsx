"use client";
import { motion } from "framer-motion";

export const BottomNavTest = ({ tabs, activeTab, setActiveTab }) => {
  console.log(tabs);
  return (
    <div className="flex justify-center items-center w-full mx-auto">
      <nav className="fixed bottom-4 z-50 w-80  justify-center items-center bg-background border shadow-lg rounded-l-full rounded-r-full px-4 py-3">
        <div className="flex flex-row justify-between h-full">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
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

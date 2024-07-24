export const BottomNav = ({ items, tab, setTab }) => {
  return (
    <div className="flex justify-center items-center w-full mx-auto">
      <nav className="fixed bottom-4 z-50 w-80 justify-center items-center bg-background border shadow-lg rounded-t-xl rounded-b-xl px-4 py-3">
        <div className="flex flex-row justify-between">
          {items.map((item, i) => (
            <div
              key={i}
              onClick={() => setTab(item)}
              className=" border rounded-full w-8 h-8 flex justify-center items-center cursor-pointer"
            >
              {item}
            </div>
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

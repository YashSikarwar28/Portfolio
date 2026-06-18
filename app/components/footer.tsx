"use client";

import React, { useEffect, useState } from "react";
import { TextHoverEffect } from "./ui/text-hover-effect";

const formatTime = () => new Date().toLocaleTimeString();

export default function Footer(): React.ReactElement {
  const [timeNow, setTimeNow] = useState("");
  

  useEffect(() => {
    setTimeNow(formatTime());

    const intervalId = window.setInterval(() => {
      setTimeNow(formatTime());
    }, 1000);


    return () => clearInterval(intervalId);
  }, []);

  return (
    <footer className="relative mx-auto pb-2 md:pb-0 max-w-303 bg-zinc-950 border-t border-zinc-800 text-zinc-300 overflow-hidden">
      <div className="flex flex-col md:flex-row items-center justify-between gap-1 md:gap-4 px-4 md:px-8 py-1 md:py-4">
        {/* <div className="text-lg cursor-pointer">Reach Out</div> */}
        <div className="hidden md:block md:w-[280px] md:h-[100px]">
          <TextHoverEffect text="YASH" />
        </div>

       
        <div className="text-sm text-zinc-500 md:text-lg md:text-zinc-300">
        {timeNow}
        </div>
      </div>
    </footer>
  );
}



// "use client";

// import React, { useEffect, useState } from "react";
// import { TextHoverEffect } from "./ui/text-hover-effect";

// const formatTime = () => new Date().toLocaleTimeString();

// export default function Footer(): React.ReactElement {
//   const [timeNow, setTimeNow] = useState<String>("");

//   useEffect(() => {
//     const initialId = window.setTimeout(() => setTimeNow(formatTime()), 0);
//     const intervalId = window.setInterval(() => setTimeNow(formatTime()), 1000);
//     return () => {
//       window.clearTimeout(initialId);
//       window.clearInterval(intervalId);
//     };
//   }, []);

//   return (
//     <footer className="relative mx-auto pb-12 md:pb-0 lg:pb-0 xl:pb-0 max-w-303 bg-zinc-950 border-t border-zinc-800 text-zinc-300 overflow-hidden">
//       <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-20 py-5">
//         <div className="text-lg cursor-pointer">Reach Out</div>
//         <TextHoverEffect text="YASH" />
//         <div className="text-lg">{timeNow}</div>
//       </div>
//     </footer>
//   );
// }

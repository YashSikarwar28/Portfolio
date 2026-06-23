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
    <footer
      className="
  relative
  mx-auto
  pb-2
  md:pb-0
  max-w-303
  overflow-hidden

  bg-white
  border-t
  border-zinc-200
  text-zinc-700

  dark:bg-zinc-950
  dark:border-zinc-800
  dark:text-zinc-300
"
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-1 md:gap-4 px-4 md:px-8 py-1 md:py-4">
        {/* <div className="text-lg cursor-pointer">Reach Out</div> */}
        <div className="hidden md:flex items-center">
          <span
            className="
    text-6xl
    font-black
    tracking-tight

    text-zinc-200
    dark:text-zinc-800
    "
          >
            YASH
          </span>
        </div>

        <div className="text-sm text-zinc-500 md:text-lg md:text-blue-600 dark:text-zinc-300">
          {timeNow}
        </div>
      </div>
    </footer>
  );
}



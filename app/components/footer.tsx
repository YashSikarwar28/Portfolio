"use client";

import React, { useEffect, useState } from "react";
import { TextHoverEffect } from "./ui/text-hover-effect";

export default function Footer(): React.ReactElement {
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
      <div className="flex justify-center items-center py-8">
        {/* <div className="text-lg cursor-pointer">Reach Out</div> */}
        <div className="flex flex-col items-center text-center">
          <p
            className="
      text-xs
      md:text-sm
      text-zinc-500
      dark:text-zinc-400
    "
          >
            Built with Next.js, coffee, and curiosity.
          </p>

          <p
            className="
      mt-1
      text-[11px]
      md:text-xs
      text-zinc-400
      dark:text-zinc-500
    "
          >
            © {new Date().getFullYear()} Yash Sikarwar
          </p>
        </div>
      </div>
    </footer>
  );
}

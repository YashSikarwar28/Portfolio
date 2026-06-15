"use client";

import { cn } from "@/lib/utils";
import { homePageStyles } from "@/public/dummyStyles";
import React, { useEffect, useRef } from "react";
import { Spotlight } from "./components/ui/Spotlight";

export default function HomePage(): React.ReactElement {
  const videoref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoref.current) {
      videoref.current.play().catch((e) => {
        console.log("Autoplay prevented : ", e);
      });
    }
  }, []);

  return (
    <>
      <div className={homePageStyles.container}>
        <div
          className={cn(
            homePageStyles.backgroundGrid.wrapper,
            homePageStyles.backgroundGrid.pattern,
          )}
        />
        <Spotlight className="top-40 left-0"/>
      </div>
    </>
  );
}

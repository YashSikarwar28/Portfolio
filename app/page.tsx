"use client";

import { cn } from "@/lib/utils";
import { homePageStyles, spotlightStyles } from "@/public/dummyStyles";
import React, { useEffect, useRef } from "react";
import { Spotlight } from "./components/ui/Spotlight";
import { PointerHighlight } from "./components/ui/pointer-highlight";
import Link from "next/link";
import ProjectsPage from "./projects/page";

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
    <div
      className={cn(
        homePageStyles.container,
        "relative overflow-x-hidden pb-24",
      )}
    >
      {/* Background grid - decorative only */}
      <div
        className={cn(
          homePageStyles.backgroundGrid.wrapper,
          homePageStyles.backgroundGrid.pattern,
        )}
      />

      {/* <Spotlight className={spotlightStyles.position} fill="blue" /> */}

      {/* Gradient overlay - decorative only, no content inside */}
      <div className={cn(homePageStyles.gradientOverlay, "absolute inset-0")} />

      {/* Actual page content - sibling of overlay, not inside it */}
      <section className={cn(homePageStyles.heroSection, "relative z-10")}>
        <div className="relative">
          <h1 className={homePageStyles.h1}>
            Hey, I&apos;m{" "}
            <span className={homePageStyles.spanWithMargin}>Yash</span>
          </h1>

          <h2 className={homePageStyles.h2}>
            Full Stack{" "}
            <span className={homePageStyles.spanInline}>
              <PointerHighlight>Developer</PointerHighlight>
            </span>
          </h2>

          <div className="mb-6">
            <div className={homePageStyles.calloutCard.wrapper}>
              <div className={homePageStyles.calloutCard.innerContainer}>
                <div className={homePageStyles.calloutCard.textContainer}>
                  <svg
                    className={homePageStyles.calloutCard.icon}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      d="M12 19V5M5 12l7-7 7 7"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <div className={homePageStyles.calloutCard.text}>
                    Connect with me on X
                  </div>
                </div>
                <button
                  type="button"
                  aria-label="Follow on X"
                  className={homePageStyles.calloutCard.button}
                >
                  Follow
                </button>
              </div>
            </div>
          </div>

          <p className={homePageStyles.paragraph}>
            I turn fuzzy ideas into live Products (<em>quickly</em>) —
            full-stack AI Builder. Currently working as a Founding Engineer at{" "}
            <a
              className={homePageStyles.link}
              href="https://invoicegenerator-frontend-tdng.onrender.com/"
            >
              Invoice-AI
            </a>
            . I have built multiple products in past 5 years; raised $100K
            funding for my startup{" "}
            <a className={homePageStyles.link} href="#">
              hexagondigitalservices.com
            </a>
          </p>

          <article className={homePageStyles.article.wrapper}>
            <div className={homePageStyles.article.videoContainer}>
              <video
                ref={videoref}
                className={homePageStyles.article.video}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                disablePictureInPicture
                disableRemotePlayback
                style={homePageStyles.article.videoStyles}
              >
                <source src="/homevideo.webm" type="video/webm" />
                Your browser does not support the video tag
              </video>
            </div>

            <div className={homePageStyles.article.content}>
              <div className={homePageStyles.article.header}>
                <svg
                  className={homePageStyles.article.headerIcon}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
                <span>Featured Work</span>
              </div>
              <h3 className={homePageStyles.article.title}>
                My 2026: shippings, signal, and a few uncomfortable rules
              </h3>
              <p className={homePageStyles.article.description}>
                A candid review of 2025 into 2026. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Officia, amet.
              </p>
              <div className={homePageStyles.article.linkContainer}>
                <Link href="/projects" className={homePageStyles.article.link}>
                  <span>See my projects</span>
                  <svg
                    className={homePageStyles.article.linkIcon}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}


// //error around 1:56
// "use client";

// import { cn } from "@/lib/utils";
// import { homePageStyles, spotlightStyles } from "@/public/dummyStyles";
// import React, { useEffect, useRef } from "react";
// import { Spotlight } from "./components/ui/Spotlight";
// import { PointerHighlight } from "./components/ui/pointer-highlight";
// import Link from "next/link";

// export default function HomePage(): React.ReactElement {
//   const videoref = useRef<HTMLVideoElement>(null);

//   useEffect(() => {
//     if (videoref.current) {
//       videoref.current.play().catch((e) => {
//         console.log("Autoplay prevented : ", e);
//       });
//     }
//   }, []);

//   return (
//     <>
//       <div className={homePageStyles.container}>
//         <div
//           className={cn(
//             homePageStyles.backgroundGrid.wrapper,
//             homePageStyles.backgroundGrid.pattern,
//           )}
//         />
//         <Spotlight className={spotlightStyles.position} fill="blue" />

//         <div className={homePageStyles.gradientOverlay}>
//           <section className={homePageStyles.heroSection}>
//             <div className="relative">
//               <h1 className={homePageStyles.h1}>
//                 Hey, I&apos;m{" "}
//                 <span className={homePageStyles.spanWithMargin}>
//                   Yash
//                 </span>
//                 </h1>
//               <h2 className={homePageStyles.h2}>
//                 Full Stack{" "}
//                 <span className={homePageStyles.spanInline}>
//                   <PointerHighlight>Developer</PointerHighlight>
//                 </span>
//               </h2>

//               <div className="mb-6">
//                 <div className={homePageStyles.calloutCard.wrapper}>
//                   <div className={homePageStyles.calloutCard.innerContainer}>
//                     <div className={homePageStyles.calloutCard.textContainer}>
//                       <svg
//                         className={homePageStyles.calloutCard.icon}
//                         viewBox="0 0 24 24"
//                         fill="none"
//                         stroke="currentColor"
//                         aria-hidden
//                       >
//                         <path d="M3 1219-9 9 9" strokeWidth="1.2" />
//                       </svg>

//                       <div className={homePageStyles.calloutCard.text}>
//                         Connect with me on X
//                       </div>
//                     </div>
//                     <button
//                       type="button"
//                       aria-label="Follow on X"
//                       className={homePageStyles.calloutCard.button}
//                     >
//                       Follow
//                     </button>
//                   </div>
//                 </div>
//               </div>

//               <p className={homePageStyles.paragraph}>
//                 I turn fuzzy ideas into live Products (<em>quickly</em>) —
//                 full-stack AI Builder. Currently working as a Founding Engineer
//                 at{" "}
//                 <a
//                   className={homePageStyles.link}
//                   href="https://invoicegenerator-frontend-tdng.onrender.com/"
//                 >
//                   Invoice-AI
//                 </a>
//                 . I have built multiple products in past 5 years; raised $100K
//                 funding for my startup{" "}
//                 <a className={homePageStyles.link} href="#">
//                   hexagondigitalservices.com
//                 </a>
//               </p>
//               <article className={homePageStyles.article.wrapper}>
//                 <div className={homePageStyles.article.videoContainer}>
//                   <video
//                     ref={videoref}
//                     className={homePageStyles.article.video}
//                     autoPlay
//                     muted
//                     loop
//                     playsInline
//                     preload="auto"
//                     disablePictureInPicture
//                     disableRemotePlayback
//                     style={homePageStyles.article.videoStyles}
//                   >
//                     <source src="/homevideo.webm" type="video/webm" />
//                     Your browser does not supports the video tag
//                   </video>
//                 </div>

//                 <div className={homePageStyles.article.content}>
//                   <div className={homePageStyles.article.header}>
//                     <svg
//                       className={homePageStyles.article.headerIcon}
//                       fill="currentColor"
//                       viewBox="0 0 24 24"
//                       aria-hidden="true"
//                     >
//                       <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
//                     </svg>
//                     <span>Featured Work</span>
//                   </div>
//                   <h3 className={homePageStyles.article.title}>
//                     My 2026:shippings, signal, and a few uncomfortable rules
//                   </h3>
//                   <p className={homePageStyles.article.description}>
//                     A candid review of 2025 into 2026. Lorem ipsum dolor sit
//                     amet consectetur adipisicing elit. Officia, amet.
//                   </p>
//                   <div className={homePageStyles.article.linkContainer}>
//                     <Link
//                       href="/projects"
//                       className={homePageStyles.article.link}
//                     >
//                       <span>See my projects</span>
//                       <svg
//                         className={homePageStyles.article.linkIcon}
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                         aria-hidden
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2}
//                           d="M14 5l7 7m0 0l-7 7m7-7H3"
//                         />
//                       </svg>
//                     </Link>
//                   </div>
//                 </div>
//               </article>
//             </div>
//           </section>
//         </div>
//       </div>
//     </>
//   );
// }

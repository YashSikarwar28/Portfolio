"use client";

import { cn } from "@/lib/utils";
import { homePageStyles, spotlightStyles } from "@/public/dummyStyles";
import React, { useEffect, useRef } from "react";
import { PointerHighlight } from "./components/ui/pointer-highlight";

import dynamic from "next/dynamic";
const GitHubCalendar = dynamic(
  () => import("react-github-calendar").then((mod) => mod.GitHubCalendar),
  {
    ssr: false,
    loading: () => (
      <div className="h-32 w-full animate-pulse rounded-lg bg-zinc-800/50" />
    ),
  },
);

import Link from "next/link";
import { Code2, Github, Linkedin, Mail } from "lucide-react";
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiLangchain,
  SiTypescript,
  SiTailwindcss,
  SiRedux,
  SiBootstrap,
  SiExpress,
  SiMysql,
  SiStreamlit,
  SiLanggraph,
} from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiPython } from "react-icons/si";

import { FaJava } from "react-icons/fa";
import { BsRobot } from "react-icons/bs";
import { TbApi, TbBrain } from "react-icons/tb";
import { useTheme } from "next-themes";
import Image from "next/image";

export default function HomePage(): React.ReactElement {
  const videoref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoref.current) {
      videoref.current.play().catch((e) => {
        console.log("Autoplay prevented : ", e);
      });
    }
  }, []);

  const techStack = [
    { name: "Java", icon: FaJava },
    { name: "React", icon: SiReact },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "Node.js", icon: SiNodedotjs },
    { name: "MongoDB", icon: SiMongodb },
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "Prisma", icon: SiPrisma },
    { name: "LangChain", icon: SiLangchain },
    { name: "Gen AI", icon: BsRobot },
  ];

  const Skill = ({ icon, name }: { icon: React.ReactNode; name: string }) => (
    <span
      className="
      inline-flex
items-center
gap-2
rounded-xl
border
border-zinc-300
dark:border-zinc-800
bg-white
dark:bg-zinc-900/70
px-3
py-1.5
text-[13px]
text-zinc-700
dark:text-zinc-300
shadow-sm
dark:shadow-none
hover:border-zinc-400
dark:hover:border-zinc-700
hover:bg-zinc-50
dark:hover:bg-zinc-800/80
transition-all
    "
    >
      {icon}
      {name}
    </span>
  );

  const { resolvedTheme } = useTheme();

  return (
    <>
      {/* Grid — fixed to full viewport, always visible behind everything */}
      <div
        className={cn(
          "pointer-events-none select-none hidden md:block fixed inset-0 -z-20 bg-grid",
        )}
      />

      {/* Gradient overlay — fixed, decorative only */}
      <div
        className="
    hidden md:block
    fixed inset-0
    bg-gradient-to-b
    from-black/40
    via-transparent
    to-black/60
    pointer-events-none
    -z-10
  "
      />

      {/* Spotlight */}
      {/* <Spotlight className={spotlightStyles.position} fill="blue" /> */}

      {/* Page content */}
      <div
        className={cn(
          homePageStyles.container,
          "overflow-x-hidden pb-8 md:pb-24",
        )}
      >
        <section className={cn(homePageStyles.heroSection, "relative z-10")}>
          <div className="relative">
            <div className="flex items-center gap-4 mb-4">
              <Image
                src="/profile.png"
                alt="Yash Sikarwar"
                width={85}
                height={85}
                className="rounded-full border border-zinc-200 dark:border-zinc-700 object-cover"
              />

              <div>
                <h1 className="text-[34px] md:text-[35px] font-bold text-zinc-900 dark:text-zinc-100">
                  Yash Sikarwar
                </h1>

                <h2 className=" md:text-[18px] font-medium text-zinc-700 dark:text-zinc-300">
                  Full Stack{" "}
                  <span className={homePageStyles.spanInline}>
                    <PointerHighlight>Developer</PointerHighlight>
                  </span>
                </h2>
              </div>
            </div>
            {/* <h1 className={homePageStyles.h1}>
              {"Hey, I'm "}
              <span className={homePageStyles.spanWithMargin}>Yash</span>
            </h1> */}

            {/* <h2 className={homePageStyles.h2}>
              Full Stack{" "}
              <span className={homePageStyles.spanInline}>
                <PointerHighlight>Developer</PointerHighlight>
              </span>
            </h2> */}

            {/* <div className="mb-6">
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
            </div> */}

            {/* social links */}

            <div className="mb-8">
              <div className="flex gap-3">
                <a
                  href="https://github.com/YashSikarwar28"
                  title="GitHub"
                  target="_blank"
                  className="p-3 rounded-full border border-zinc-800 hover:border-zinc-600 hover:bg-zinc-900/50 transition-all"
                >
                  <Github size={18} />
                </a>

                <a
                  href="https://www.linkedin.com/in/yash-sikarwar-sist/"
                  target="_blank"
                  title="LinkedIn"
                  className="p-3 rounded-full border border-zinc-800 hover:border-blue-600 hover:bg-zinc-900/50 transition-all"
                >
                  <Linkedin size={18} />
                </a>

                <a
                  href="mailto:yashsikarwar028@gmail.com"
                  title="Email"
                  target="_blank"
                  className="p-3 rounded-full border border-zinc-800 hover:border-red-600 hover:bg-zinc-900/50 transition-all"
                >
                  <Mail size={18} />
                </a>

                <a
                  href="https://leetcode.com/u/Yash-Sikarwar/"
                  target="_blank"
                  title="LeetCode"
                  className="p-3 rounded-full border border-zinc-800 hover:border-orange-800 hover:bg-zinc-900/50 transition-all"
                >
                  <Code2 size={18} />
                </a>
              </div>
            </div>

            <p className={`${homePageStyles.paragraph} text-left`}>
              I build full-stack applications using{" "}
              <span className="font-medium text-zinc-900 dark:text-zinc-100 hover:text-blue-400 transition-colors">
                React
              </span>
              ,{" "}
              <span className="font-medium dark:text-zinc-100 text-zinc-900 hover:text-gray-600 transition-colors">
                Next.js
              </span>
              ,{" "}
              <span className="font-medium dark:text-zinc-100 text-zinc-900 hover:text-green-300 transition-colors">
                Node.js
              </span>
              ,{" "}
              <span className="font-medium dark:text-zinc-100 text-zinc-900 hover:text-emerald-600 transition-colors">
                MongoDB
              </span>
              , and{" "}
              <span className="font-medium dark:text-zinc-100 text-zinc-900 hover:text-sky-400 transition-colors">
                PostgreSQL
              </span>
              . Currently exploring{" "}
              <span className="text-zinc-900 font-medium dark:text-zinc-100 hover:text-red-400 transition-colors">
                Generative AI
              </span>
              , contributing to open source, and building projects that solve
              real-world problems.
            </p>

            {/* GitHub Graph */}

            <div className="mt-8">
              <h3 className="mb-4 text-sm uppercase tracking-wider text-zinc-800 font-semibold dark:text-zinc-500">
                GitHub Contributions
              </h3>

              <div
                className="overflow-x-auto no-scrollbar
rounded-2xl
border border-zinc-200
dark:border-zinc-800/60
bg-white
dark:bg-zinc-900/30
shadow-sm
dark:shadow-none
backdrop-blur-sm
p-5"
              >
                <GitHubCalendar
                  username="YashSikarwar28"
                  colorScheme={resolvedTheme === "dark" ? "dark" : "light"}
                  blockSize={9}
                  blockMargin={3}
                  fontSize={12}
                  theme={{
                    light: [
                      "#ebedf0",
                      "#9be9a8",
                      "#40c463",
                      "#30a14e",
                      "#216e39",
                    ],
                    dark: [
                      "#18181b",
                      "#27272a",
                      "#3f3f46",
                      "#52525b",
                      "#71717a",
                    ],
                  }}
                />
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-100 mt-8 mb-4">
              Tech Stack
            </h2>

            <p className="text-zinc-600 dark:text-zinc-400 mb-10">
              This list grows faster than my GitHub stars — and I kinda like
              that.
            </p>
            <div className="mt-2">
              <p className="mb-4 text-xs uppercase tracking-wider text-zinc-700 dark:text-zinc-500">
                {"< Languages />"}
              </p>

              <div className="flex flex-wrap gap-3">
                <Skill icon={<FaJava />} name="Java" />
                <Skill icon={<SiJavascript />} name="JavaScript" />
                <Skill icon={<SiTypescript />} name="TypeScript" />
                <Skill icon={<SiPython />} name="Python" />
              </div>
            </div>
            <div className="mt-4">
              <p className="mb-4 text-xs uppercase tracking-wider text-zinc-600 dark:text-zinc-500">
                {"< Frontend />"}
              </p>

              <div className="flex flex-wrap gap-2">
                <Skill icon={<SiReact />} name="React" />
                <Skill icon={<SiNextdotjs />} name="Next.js" />
                <Skill icon={<SiTailwindcss />} name="Tailwind CSS" />
                <Skill icon={<SiRedux />} name="Redux" />
                <Skill icon={<SiBootstrap />} name="Bootstrap" />
              </div>
            </div>
            <div className="mt-4">
              <p className="mb-4 text-xs uppercase tracking-wider text-zinc-600 dark:text-zinc-500">
                {"< Backend />"}
              </p>

              <div className="flex flex-wrap gap-2">
                <Skill icon={<SiNodedotjs />} name="Node.js" />
                <Skill icon={<SiExpress />} name="Express.js" />
                <Skill icon={<TbApi />} name="REST APIs" />
                <Skill icon={<SiPrisma />} name="Prisma" />
              </div>
            </div>
            <div className="mt-4">
              <p className="mb-4 text-xs uppercase tracking-wider text-zinc-600 dark:text-zinc-500">
                {"< Database />"}
              </p>

              <div className="flex flex-wrap gap-2">
                <Skill icon={<SiMongodb />} name="MongoDB" />
                <Skill icon={<SiPostgresql />} name="PostgreSQL" />
                <Skill icon={<SiMysql />} name="MySQL" />
              </div>
            </div>
            <div className="mt-4">
              <p className="mb-4 text-xs uppercase tracking-wider text-zinc-600 dark:text-zinc-500">
                {"< In Progress />"}
              </p>

              <div className="flex flex-wrap gap-2">
                <Skill icon={<SiLangchain />} name="LangChain" />
                <Skill icon={<TbBrain />} name="Gen AI" />
                <Skill icon={<SiLanggraph />} name="LangGraph" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

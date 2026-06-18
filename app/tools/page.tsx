"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CometCard } from "../components/ui/comet-card";
// Adjust import path based on where you placed dummyStyles.js
import { toolsPageStyles } from "@/public/dummyStyles";

interface Tool {
  name: string;
  category: string;
  icon: string;
  href: string;
}

const tools: Tool[] = [
  {
    name: "Cursor",
    category: "IDE",
    icon: "/cursor.webp",
    href: "https://cursor.sh",
  },
  {
    name: "ChatGPT",
    category: "Productivity",
    icon: "/chatgpt.webp",
    href: "https://chat.openai.com",
  },
  {
    name: "Notion",
    category: "Productivity",
    icon: "/notion.webp",
    href: "https://notion.so",
  },
  {
    name: "PyCharm",
    category: "IDE",
    icon: "/pycharm.webp",
    href: "https://jetbrains.com/pycharm",
  },
  {
    name: "VS Code",
    category: "IDE",
    icon: "/VSCODE.webp",
    href: "https://code.visualstudio.com",
  },
  {
    name: "Medium",
    category: "Writing",
    icon: "/medium.webp",
    href: "https://medium.com",
  },
  {
    name: "Claude AI",
    category: "Productivity",
    icon: "/claude.webp",
    href: "https://claude.ai",
  },
  {
    name: "Gemini",
    category: "Productivity",
    icon: "/gemini.webp",
    href: "https://gemini.google.com",
  },
  {
    name: "Lovable",
    category: "Productivity",
    icon: "/lovable.webp",
    href: "https://lovable.dev",
  },
  {
    name: "Perplexity",
    category: "Research",
    icon: "/perplexity.webp",
    href: "https://perplexity.ai",
  },
];

export default function ToolsPage() {
  return (
    <div className={toolsPageStyles.pageContainer}>
      <div className={toolsPageStyles.contentContainer}>
        <div className={toolsPageStyles.headerContainer}>
          <h1 className={toolsPageStyles.headerTitle}>Shovels</h1>
          <p className={toolsPageStyles.headerSubtitle}>
            Tools I frequently use.
          </p>
        </div>
        <div className={toolsPageStyles.toolsGrid}>
          {tools.map((tool) => (
            <CometCard key={tool.name}>
              <Link
                href={tool.href}
                target="_blank"
                rel="noopener noreferrer"
                className={toolsPageStyles.toolCardLink}
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className={toolsPageStyles.toolIconContainer}>
                  <Image
                    src={tool.icon}
                    alt={`${tool.name}`}
                    width={56}
                    height={56}
                    className={toolsPageStyles.toolIcon}
                  />
                </div>

                <div className={toolsPageStyles.toolTextContainer}>
                  <h3 className={toolsPageStyles.toolName}>{tool.name}</h3>
                  <p className={toolsPageStyles.toolCategory}>
                    {tool.category}
                  </p>
                </div>
              </Link>
            </CometCard>
          ))}
        </div>
      </div>
    </div>
  );
}

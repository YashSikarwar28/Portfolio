//project data to be displayed

export interface Project {
  id: string;
  title: string;
  description: string;
  detailedDescription: string;
  slug: string;
  image: string;
  tags: string[];
  status: "active" | "archived";
  links: {
    visit?: string;
    github?: string;
    pypi?: string;
    link?: string;
    youtube?: string;
    archive?: string;
    howIBuilt?: string;
  };
  author: string;
  authorAvatar: string;
  techStack: string[];
  features: string[];
  learningOutcomes: string[];
}

/**
 * Main projects array — update content here as required.
 * Ensure slug values are URL-safe and unique.
 */
export const projects: Project[] = [
  {
    id: "1",
    title: "LucidDocs",
    slug: "AI-powered PDF",
    description:
      "AI-powered PDF intelligence platform for document chat, summarization, and semantic search.",
    detailedDescription:
      "Built an AI-powered PDF analysis platform that enables users to upload documents, generate summaries, ask contextual questions, and extract insights instantly. Integrated semantic search and document chat capabilities to reduce document analysis time and improve information retrieval.",
    image: "/LucidDocs.png",
    tags: ["AI", "SaaS", "LangChain", "Full-Stack"],
    status: "active",
    techStack: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Prisma",
      "LangChain",
      "Gemini",
      "Convex",
      "Vercel",
    ],
    features: [
      " PDF Upload & Processing",
      "AI-powered Document Chat",
      "Smart Summarization",
      "Semantic Search",
      "Context-aware Q&A",
      "Modern Responsive UI",
      "OCR-ready Architecture",
    ],
    learningOutcomes: [
      "Built a full-stack AI application using Next.js, Prisma, and LangChain",
      "Learned RAG and semantic search for intelligent document querying",
      "Implemented PDF processing and AI-powered document chat for contextual question answering",
      "Worked with embeddings and vector-based retrieval to improve information discovery",
      "Gained experience deploying and optimizing a production-ready SaaS application.",
    ],
    links: {
      visit: "https://lucid-docs-ai-pdf.vercel.app/",
      github: "https://github.com/YashSikarwar28/LucidDocs---AI-PDF",
      howIBuilt: "",
    },
    author: "LucidDocs",
    authorAvatar: "/jj.png",
  },
  {
    id: "2",
    title: "VidTube",
    slug: "youtube-clone",
    description:
      "Modern video streaming platform with trending feeds, search, and responsive video browsing experience",
    detailedDescription:
      "A full-stack YouTube-inspired video streaming platform built with React and modern web technologies. The application features trending video feeds, responsive layouts, video cards, search functionality, and a clean user experience similar to popular video streaming platforms.",

    image: "/Youtube.png",

    tags: ["React", "Frontend", "UI/UX", "Streaming"],

    status: "active",

    techStack: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "REST APIs",
      "React Router",
      "Vite",
    ],

    features: [
      "Trending video feed with responsive grid layout",
      "Video cards with thumbnails, views, and channel details",
      "Search and video discovery functionality",
      "Mobile-first responsive design",
      "Category-based content browsing",
      "Modern YouTube-inspired user interface",
    ],

    learningOutcomes: [
      "Built responsive layouts using React and Tailwind CSS",
      "Integrated APIs and managed asynchronous data fetching",
      "Improved component-based architecture and state management",
      "Learned routing and dynamic page rendering",
      "Enhanced UI/UX design and frontend optimization",
    ],

    links: {
      visit: "https://yashsikarwaryoutube.netlify.app/",
      github: "https://github.com/YashSikarwar28/youtubeclone",
    },

    author: "Vidtube",
    authorAvatar: "/jj.png",
  },

  {
    id: "3",
    title: "BookHeaven",
    slug: "bookheaven",
    description:
      "Full-stack online bookstore platform with book browsing, authentication, and user management",

    detailedDescription:
      "BookHeaven is a modern MERN stack bookstore application designed to help users discover and explore books through an intuitive and responsive interface. The platform features authentication, book catalog management, user-friendly navigation, and a visually appealing landing page inspired by modern e-commerce websites.",

    image: "/BookHeaven.png",

    tags: ["MERN", "E-Commerce", "Full-Stack", "Bookstore"],

    status: "active",

    techStack: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "JWT",
      "REST APIs",
    ],

    features: [
      "User authentication and authorization",
      "Browse and discover books through a modern catalog",
      "Responsive design for desktop and mobile devices",
      "Book search and navigation system",
      "Secure backend APIs for data management",
      "Clean and interactive user interface",
    ],

    learningOutcomes: [
      "Built a full-stack MERN application from scratch",
      "Implemented authentication using JWT",
      "Designed and consumed RESTful APIs",
      "Worked with MongoDB for data management",
      "Improved frontend UI/UX and responsive design skills",
    ],

    links: {
      visit: "https://curious-stardust-9f9080.netlify.app/",
      github:
        "https://github.com/YashSikarwar28/BookHeavens-BookStore-Management-Frontend",
    },

    author: "BookHeaven",
    authorAvatar: "/jj.png",
  },

  {
    id: "4",
    title: "RoadWatch",
    slug: "roadwatch",

    description:
      "AI-powered road issue reporting platform with authority identification and complaint routing",

    detailedDescription:
      "RoadWatch is a civic-tech platform designed to simplify road issue reporting by helping citizens identify the responsible authority for a road segment and submit complaints efficiently. The system uses OpenStreetMap road data, location-based matching, and authority mapping to provide accurate road information, maintenance responsibility, and complaint tracking.",

    image: "/RoadWatch.png",

    tags: ["Civic-Tech", "GIS", "OpenStreetMap", "Full-Stack"],

    status: "active",

    techStack: [
      "Python",
      "Streamlit",
      "OpenStreetMap",
      "GeoPandas",
      "Pandas",
      "SQLite",
      "REST APIs",
    ],

    features: [
      "Road issue reporting and complaint submission",
      "Authority identification for road maintenance",
      "Road information lookup using OpenStreetMap data",
      "Location-based road matching system",
      "Issue categorization (Potholes, Drainage, Lighting, etc.)",
      "Interactive dashboard with road insights",
    ],

    learningOutcomes: [
      "Worked with geospatial datasets and OpenStreetMap data",
      "Learned GIS concepts using GeoPandas and spatial analysis",
      "Built data-driven dashboards with Streamlit",
      "Implemented road authority mapping and routing logic",
      "Developed practical civic-tech solutions using real-world data",
    ],

    links: {
      visit: "https://roadwatch-mvp.streamlit.app/",
      github: "https://github.com/YashSikarwar28/RoadWatch",
    },

    author: "RoadWatch",
    authorAvatar: "/jj.png",
  },

];

/* -------------------------
   Helper utilities
   ------------------------- */

/** Return a project by slug or null */
export function getProjectBySlug(
  slug: string | undefined | null,
): Project | null {
  // defensive normalization: decode URI components, coerce to string, trim
  const normalized = decodeURIComponent(String(slug ?? "")).trim();
  if (!normalized) return null;
  return projects.find((p) => p.slug === normalized) ?? null;
}
/** Return all slugs (useful for generateStaticParams or getStaticPaths) */
export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}

/** Compose the canonical URL for a project (useful in UIs) */
export function getProjectUrl(project: Project | { slug: string }) {
  return `/projects/${project.slug}`;
}

/** Return all projects (shallow copy) */
export function getAllProjects(): Project[] {
  return [...projects];
}

import { aboutPageStyles } from "@/public/dummyStyles";
import { BackgroundBeamsWithCollision } from "../components/ui/background-beams-with-collision";
import Link from "next/link";

export default function AboutPage() {
  const interests = [
    "FULL-STACK DEV",
    "AI PRACTITIONER",
    "DSA",
    "LLMS",
    "MUSIC",
    "F1",
  ];

  const techStack = [
    "React",
    "LLM",
    "Next.js",
    "TypeScript",
    "Postgres",
  ];

  const email: string = "yashsikarwar028@gmail.com";

  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`;

  return (
    <div className={aboutPageStyles.pageContainer}>
      <div className={aboutPageStyles.contentContainer}>
        <div className={aboutPageStyles.backgroundContainer}>
          <div className={aboutPageStyles.backgroundEffect}>
            <BackgroundBeamsWithCollision className="rounded-3xl" />
          </div>
          <div
            className="
    relative z-10
    rounded-3xl
    bg-white/80
    dark:bg-transparent
    backdrop-blur-sm
    p-8
    md:p-10
  "
          >
            <h1 className={aboutPageStyles.mainHeading}>Yash</h1>
            <div className={aboutPageStyles.interestsContainer}>
              {interests.map((interest, index) => (
                <span key={interest} className={aboutPageStyles.interestItem}>
                  {interest}
                  {index < interests.length - 1 && (
                    <span className={aboutPageStyles.interestSeparator}></span>
                  )}
                </span>
              ))}
            </div>

            <div className={aboutPageStyles.techStackContainer}>
              {techStack.map((tech) => (
                <span key={tech} className={aboutPageStyles.techPill}>
                  {tech}
                </span>
              ))}
            </div>

            <div className={aboutPageStyles.sectionsContainer}>
              <section>
                <h2 className={aboutPageStyles.sectionHeading}>Who I Am</h2>
                <p className={aboutPageStyles.paragraph}>
                  Hey! I'm Yash, a Computer Science student who enjoys building
                  things for the internet. Most of my time is spent developing
                  projects, learning new technologies, and improving my
                  problem-solving skills through DSA. I'm always curious about
                  how things work and constantly looking for opportunities to
                  build, learn, and grow as a developer.
                </p>
              </section>

              {/* What I Do */}
              <section>
                <h2 className={aboutPageStyles.sectionHeading}>What I Do</h2>
                <p className={aboutPageStyles.paragraph}>
                  I'm a third-year Computer Science student at
                  <a
                    href="https://www.sathyabama.ac.in/"
                    className={aboutPageStyles.contentLink}
                    target="_blank"
                  >
                    {" "}
                    Sathyabama Institute of Science and Technology
                  </a>
                  , Chennai. I build full-stack applications, experiment with
                  AI-powered products, and enjoy solving real-world problems
                  through technology. Currently, I'm focused on full-stack
                  development, Generative AI, open source, and Data Structures &
                  Algorithms while continuously building projects and expanding
                  my technical skills.
                </p>
              </section>

              {/* Vision */}
              <section>
                <h2 className={aboutPageStyles.sectionHeading}>Vision</h2>
                <p className={aboutPageStyles.paragraph}>
                  LLMs and AI will automate the mundane and reshape how we work.
                  I strive to stay at the forefront of this transformation.
                </p>
              </section>
            </div>

            <div className={aboutPageStyles.ctaContainer}>
              <Link
                href="/contact"
                className={aboutPageStyles.primaryButton}
                aria-label="Get in touch — open contact page"
              >
                Get in Touch
              </Link>

              <a
                href={gmailComposeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={aboutPageStyles.secondaryButton}
                aria-label={`Compose email to ${email} in Gmail`}
              >
                <svg
                  className={aboutPageStyles.emailIcon}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                E-Mail
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

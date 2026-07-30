import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import PropTypes from "prop-types";

const experience = [
  {
    role: "AI Quality Analyst",
    company: "TELUS Digital",
    location: "Remote, Canada",
    dates: "Feb 2025 – Present",
    bullets: [
      "Evaluate and annotate web content to improve search relevance and user experience.",
      "Review results against guidelines and identify usability issues and edge cases to improve model quality.",
    ],
    tech: ["Quality", "Evaluation", "Guidelines", "UX Signals"],
  },
  {
    role: "Co-founder & Software Engineer",
    company: "Simor.co",
    location: "Remote, Canada",
    dates: "Jan 2025 – May 2026",
    bullets: [
      "Built the MVP frontend in Next.js and implemented backend endpoints in Node.js.",
      "Ran prototype reviews and shipped fast iterations based on user and team feedback.",
      "Improved page speed using route-level code splitting and image optimization.",
    ],
    tech: ["Next.js", "Node.js", "React", "CI/CD"],
  },
  {
    role: "Software Engineer",
    company: "Freelance",
    location: "Tehran, Iran",
    dates: "Feb 2024 – Jul 2024",
    bullets: [
      "Refactored TypeScript codebases for modularity and performance using route-level splitting.",
      "Integrated REST APIs and implemented robust client-side error handling and retry logic.",
    ],
    tech: ["TypeScript", "React", "REST APIs", "Performance"],
  },
  {
    role: "Software Engineer",
    company: "Estarbad",
    location: "Tehran, Iran",
    dates: "Aug 2021 – Dec 2023",
    bullets: [
      "Maintained and enhanced 10+ React/React Native apps; improved reliability with component-level tests and CI checks.",
      "Coordinated with designers and back-end teams to align API contracts and reduce integration rework.",
      "Streamlined Git peer reviews and hotfix workflows to improve release cadence and production stability.",
    ],
    tech: ["React", "React Native", "Jest", "CI", "Git"],
  },
];

function Chip({ text }) {
  return (
    <span className="rounded-full border border-[color:var(--border)] bg-white/[0.05] px-2.5 py-1 text-xs text-[color:var(--muted)] transition group-hover:border-[color:var(--accent)]/40">
      {text}
    </span>
  );
}

Chip.propTypes = {
  text: PropTypes.string.isRequired,
};

export default function Experience() {
  const reduced = useReducedMotion();
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const smooth = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 22,
    mass: 0.2,
  });

  const shellY = useTransform(smooth, [0, 1], [24, -24]);
  const shellOpacity = useTransform(smooth, [0, 0.18, 1], [0.62, 1, 1]);
  const shellScale = useTransform(smooth, [0, 0.2, 1], [0.988, 1, 1]);

  const gridY = useTransform(smooth, [0, 1], [16, -20]);
  const glowX = useTransform(smooth, [0, 1], [-10, 18]);
  const glowY = useTransform(smooth, [0, 1], [6, -8]);

  const headerY = useTransform(smooth, [0, 1], [14, -10]);
  const introOpacity = useTransform(smooth, [0.05, 0.22, 1], [0.4, 1, 1]);

  const timelineOpacity = useTransform(smooth, [0.08, 0.24], [0.2, 1]);
  const footerY = useTransform(smooth, [0, 1], [18, -6]);
  const footerOpacity = useTransform(smooth, [0.22, 0.42], [0.35, 1]);

  const item1Y = useTransform(smooth, [0, 1], [24, -8]);
  const item2Y = useTransform(smooth, [0, 1], [34, -2]);
  const item3Y = useTransform(smooth, [0, 1], [44, 4]);
  const item4Y = useTransform(smooth, [0, 1], [54, 10]);

  const item1Opacity = useTransform(smooth, [0.08, 0.24], [0.3, 1]);
  const item2Opacity = useTransform(smooth, [0.14, 0.3], [0.25, 1]);
  const item3Opacity = useTransform(smooth, [0.2, 0.36], [0.2, 1]);
  const item4Opacity = useTransform(smooth, [0.26, 0.42], [0.18, 1]);

  const scanY = useTransform(smooth, [0, 1], [0, 760]);

  const itemStyles = [
    { y: item1Y, opacity: item1Opacity },
    { y: item2Y, opacity: item2Opacity },
    { y: item3Y, opacity: item3Opacity },
    { y: item4Y, opacity: item4Opacity },
  ];

  return (
    <section
      ref={sectionRef}
      className="mx-auto max-w-6xl px-5 pt-3 pb-20 sm:pt-5 sm:pb-24"
    >
      <motion.div
        style={
          reduced
            ? undefined
            : {
                y: shellY,
                opacity: shellOpacity,
                scale: shellScale,
              }
        }
        className="relative overflow-hidden rounded-[32px] border border-[color:var(--border)] bg-[rgba(8,12,24,0.58)] shadow-[0_30px_120px_rgba(0,0,0,0.34)] backdrop-blur-xl"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
        >
          <motion.div
            style={reduced ? undefined : { y: gridY }}
            className="absolute inset-0 opacity-[0.07]"
          >
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)",
                backgroundSize: "72px 72px",
              }}
            />
          </motion.div>

          <motion.div
            style={reduced ? undefined : { x: glowX, y: glowY }}
            className="absolute -left-20 top-8 h-[300px] w-[300px] rounded-full blur-[100px]"
          >
            <div className="h-full w-full rounded-full bg-[radial-gradient(circle,rgba(104,92,255,0.22)_0%,rgba(104,92,255,0.06)_42%,rgba(104,92,255,0)_74%)]" />
          </motion.div>

          <motion.div
            style={reduced ? undefined : { x: -glowX, y: -glowY }}
            className="absolute -bottom-24 right-[-90px] h-[320px] w-[320px] rounded-full blur-[105px]"
          >
            <div className="h-full w-full rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.09)_0%,rgba(255,255,255,0.03)_42%,rgba(255,255,255,0)_74%)]" />
          </motion.div>

          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(102,89,255,0.10)_0%,rgba(8,12,24,0)_42%,rgba(255,255,255,0.03)_100%)]" />

          <motion.div
            style={reduced ? undefined : { y: scanY }}
            className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(124,108,255,0.42),transparent)] opacity-50"
          />
        </div>

        <div className="relative p-7 sm:p-10 lg:p-11">
          <motion.div style={reduced ? undefined : { y: headerY }}>
            <p className="text-xs uppercase tracking-[0.24em] text-[color:var(--muted)]">
              Experience
            </p>

            <motion.h2
              style={reduced ? undefined : { opacity: introOpacity }}
              className="mt-4 max-w-[12ch] text-3xl font-semibold leading-[1.02] sm:text-5xl"
            >
              Where I’ve built and shipped
              <span className="text-[color:var(--accent)]">.</span>
            </motion.h2>

            <motion.p
              style={reduced ? undefined : { opacity: introOpacity }}
              className="mt-5 max-w-3xl text-base leading-7 text-white/88 sm:text-lg"
            >
              Experience across product work, frontend systems, backend
              delivery, and quality-focused execution.
            </motion.p>
          </motion.div>

          <motion.div
            style={reduced ? undefined : { opacity: timelineOpacity }}
            className="relative mt-10"
          >
            <div className="absolute bottom-0 left-[7px] top-2 hidden w-px bg-[linear-gradient(to_bottom,rgba(255,255,255,0.12),rgba(255,255,255,0.04))] md:block" />

            <ol className="space-y-6">
              {experience.map((e, index) => (
                <motion.li
                  key={`${e.company}-${e.role}-${e.dates}`}
                  style={reduced ? undefined : itemStyles[index]}
                >
                  <div className="grid items-start gap-4 md:grid-cols-[190px_1fr] md:gap-6">
                    <div className="md:pt-2">
                      <div className="inline-flex items-center gap-2 text-sm text-[color:var(--muted)]">
                        <span className="h-2.5 w-2.5 rounded-full border border-[color:var(--accent)] bg-[color:var(--accent)]/80 shadow-[0_0_20px_rgba(99,102,241,0.45)]" />
                        <span>{e.dates}</span>
                      </div>
                    </div>

                    <motion.div
                      whileHover={reduced ? undefined : { scale: 1.008 }}
                      transition={{
                        type: "spring",
                        stiffness: 240,
                        damping: 20,
                      }}
                      className="group relative overflow-hidden rounded-[28px] border border-[color:var(--border)] bg-[rgba(255,255,255,0.03)] p-6 backdrop-blur-xl sm:p-7"
                    >
                      <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
                        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(108,92,255,0.10),transparent_58%,rgba(255,255,255,0.04))]" />
                      </div>

                      <div className="relative">
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                          <div>
                            <h3 className="text-xl font-semibold text-white sm:text-2xl">
                              {e.role}
                              <span className="text-[color:var(--accent)]">
                                .
                              </span>
                            </h3>
                            <p className="mt-1 text-[15px] text-[color:var(--muted)]">
                              {e.company} · {e.location}
                            </p>
                          </div>
                        </div>

                        <ul className="mt-5 space-y-3 text-sm leading-6 text-[color:var(--muted)] sm:text-[15px]">
                          {e.bullets.map((b) => (
                            <li key={b} className="flex gap-3">
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--accent)]" />
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="mt-6 flex flex-wrap gap-2">
                          {e.tech.map((t) => (
                            <Chip key={t} text={t} />
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.li>
              ))}
            </ol>
          </motion.div>

          <motion.div
            style={reduced ? undefined : { y: footerY, opacity: footerOpacity }}
            className="mt-10 rounded-[24px] border border-[color:var(--border)] bg-white/[0.035] p-5 sm:p-6"
          >
            <p className="text-sm leading-7 text-[color:var(--muted)]">
              For the complete timeline and additional details, see the resume.
            </p>

            <a
              href="/Fateme_Ghalandari_CV.pdf"
              className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-white transition hover:text-[color:var(--accent)]"
            >
              Download resume
              <span className="text-[color:var(--accent)]">→</span>
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

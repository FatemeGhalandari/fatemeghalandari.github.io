import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

const cards = [
  {
    title: "Frontend Systems",
    subtitle:
      "Interfaces designed for clarity, maintainability, responsiveness, and real product usage.",
    bullets: [
      "Component architecture and reusable UI systems",
      "Complex state flows across forms, filters, dashboards, and admin tools",
      "Accessibility, responsive behavior, and interaction quality",
      "Performance work across rendering, asset loading, and perceived latency",
    ],
    tools: ["React", "TypeScript", "Tailwind", "Framer Motion"],
  },
  {
    title: "Backend & APIs",
    subtitle:
      "Services built to stay consistent, testable, and easy to extend as the product grows.",
    bullets: [
      "REST API design, request validation, and error handling",
      "Authentication and authorization patterns",
      "Database modeling, relations, and query performance",
      "Integrations, async workflows, and backend orchestration",
    ],
    tools: ["Node.js", "FastAPI", "PostgreSQL", "Prisma"],
  },
  {
    title: "AI & LLM Applications",
    subtitle:
      "AI-enabled product features built around useful workflows, structured outputs, and careful quality evaluation.",
    bullets: [
      "LLM API integration across user-facing product workflows",
      "FastAPI services for structured AI-assisted content generation",
      "Prompt-aware evaluation of output quality, consistency, and edge cases",
      "Interfaces that turn model responses into clear, usable experiences",
    ],
    tools: ["Python", "FastAPI", "OpenRouter", "LLM APIs"],
  },
];

const highlights = [
  "UI Systems",
  "API Design",
  "Data Modeling",
  "Auth",
  "Performance",
  "Testing",
  "Deployment",
];

export default function Strengths() {
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

  const shellY = useTransform(smooth, [0, 1], [30, -30]);
  const shellOpacity = useTransform(smooth, [0, 0.18, 1], [0.6, 1, 1]);
  const shellScale = useTransform(smooth, [0, 0.2, 1], [0.985, 1, 1]);

  const gridY = useTransform(smooth, [0, 1], [20, -24]);
  const glowX = useTransform(smooth, [0, 1], [-16, 22]);
  const glowY = useTransform(smooth, [0, 1], [8, -10]);

  const headerY = useTransform(smooth, [0, 1], [20, -14]);
  const introOpacity = useTransform(smooth, [0.05, 0.22, 1], [0.35, 1, 1]);

  const chipsY = useTransform(smooth, [0, 1], [12, -8]);

  const card1Opacity = useTransform(smooth, [0.08, 0.25], [0.35, 1]);
  const card2Opacity = useTransform(smooth, [0.14, 0.31], [0.25, 1]);
  const card3Opacity = useTransform(smooth, [0.2, 0.37], [0.2, 1]);

  const scanY = useTransform(smooth, [0, 1], [0, 760]);

  const cardStyles = [
    { opacity: card1Opacity },
    { opacity: card2Opacity },
    { opacity: card3Opacity },
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
            className="absolute -left-24 top-8 h-[340px] w-[340px] rounded-full blur-[105px]"
          >
            <div className="h-full w-full rounded-full bg-[radial-gradient(circle,rgba(104,92,255,0.24)_0%,rgba(104,92,255,0.06)_42%,rgba(104,92,255,0)_74%)]" />
          </motion.div>

          <motion.div
            style={reduced ? undefined : { x: -glowX, y: -glowY }}
            className="absolute -bottom-24 right-[-100px] h-[360px] w-[360px] rounded-full blur-[110px]"
          >
            <div className="h-full w-full rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.10)_0%,rgba(255,255,255,0.03)_42%,rgba(255,255,255,0)_74%)]" />
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
              Engineering strengths
            </p>

            <motion.h2
              style={reduced ? undefined : { opacity: introOpacity }}
              className="mt-4 max-w-[10ch] text-3xl font-semibold leading-[1.02] sm:text-5xl"
            >
              How I build software
              <span className="text-[color:var(--accent)]">.</span>
            </motion.h2>

            <motion.p
              style={reduced ? undefined : { opacity: introOpacity }}
              className="mt-5 max-w-3xl text-base leading-7 text-white/88 sm:text-lg"
            >
              I work across the full stack, but the value I bring is not just
              touching frontend and backend. It’s building{" "}
              <span className="text-white">
                product UI, API layers, backend logic, and database-backed
                workflows
              </span>{" "}
              that hold together as one system.
            </motion.p>

            <motion.p
              style={reduced ? undefined : { opacity: introOpacity }}
              className="mt-3 max-w-2xl text-sm leading-6 text-[color:var(--muted)] sm:text-[15px]"
            >
              I care about implementation quality, system consistency, and what
              happens after the feature ships, not just how it looks in a demo.
            </motion.p>

            <motion.div
              style={reduced ? undefined : { y: chipsY, opacity: introOpacity }}
              className="mt-7 flex flex-wrap gap-2"
            >
              {highlights.map((item) => (
                <motion.span
                  key={item}
                  whileHover={reduced ? undefined : { y: -2 }}
                  transition={{ duration: 0.2 }}
                  className="rounded-full border border-[color:var(--border)] bg-white/[0.045] px-3 py-1.5 text-xs text-[color:var(--muted)] transition hover:border-[color:var(--accent)] hover:text-white"
                >
                  {item}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {cards.map((card, index) => (
              <motion.article
                key={card.title}
                style={reduced ? undefined : cardStyles[index]}
                whileHover={reduced ? undefined : { y: -8, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 240, damping: 20 }}
                className="group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-[color:var(--border)] bg-[rgba(255,255,255,0.03)] p-6 backdrop-blur-xl"
              >
                <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(108,92,255,0.10),transparent_58%,rgba(255,255,255,0.04))]" />
                </div>

                <div className="relative flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {card.title}
                      <span className="text-[color:var(--accent)]">.</span>
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-[color:var(--muted)]">
                      {card.subtitle}
                    </p>
                  </div>

                  <div className="text-lg text-[color:var(--muted)] transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[color:var(--accent)]">
                    ↗
                  </div>
                </div>

                <ul className="relative mt-6 flex-1 space-y-4 text-[15px] leading-7 text-[color:var(--muted)]">
                  {card.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--accent)]" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="relative mt-6 flex flex-wrap gap-2">
                  {card.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full border border-[color:var(--border)] bg-white/[0.05] px-2.5 py-1 text-xs text-[color:var(--muted)]"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

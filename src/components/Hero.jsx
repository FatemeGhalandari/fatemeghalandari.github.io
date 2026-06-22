import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

const featured = [
  {
    title: "Ontario Service Finder",
    tag: "Full-stack Platform",
    desc: "Directory and search experience with maps, admin workflows, relational data modeling, and production-style constraints.",
    stack: ["React", "Node", "PostgreSQL", "Prisma"],
    links: {
      live: "https://ontario-service-finder.vercel.app/",
      code: "https://github.com/FatemeGhalandari/ontario-service-finder",
    },
  },
  {
    title: "SkillMate",
    tag: "AI + Backend System",
    desc: "Learning workflow that turns raw content into structured study material through API-first services and a clean product UI.",
    stack: ["React", "FastAPI", "LLMs"],
    links: {
      live: "https://skillmate-orcin.vercel.app/",
      code: "https://github.com/FatemeGhalandari/skillmate",
    },
  },
];

const stack = [
  "React",
  "TypeScript",
  "Node.js",
  "FastAPI",
  "PostgreSQL",
  "Prisma",
  "Docker",
  "Firebase",
];

const proof = [
  { k: "Focus", v: "Full-stack product engineering" },
  { k: "Strength", v: "Frontend systems + backend APIs" },
  { k: "Core", v: "React, Node, Python, SQL" },
];

export default function Hero() {
  const reduced = useReducedMotion();
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const smooth = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 22,
    mass: 0.2,
  });

  const shellY = useTransform(smooth, [0, 1], [0, -34]);
  const shellScale = useTransform(smooth, [0, 1], [1, 0.982]);
  const shellOpacity = useTransform(smooth, [0, 0.8, 1], [1, 0.96, 0.9]);

  const gridY = useTransform(smooth, [0, 1], [0, -28]);
  const glowX = useTransform(smooth, [0, 1], [0, 22]);
  const glowY = useTransform(smooth, [0, 1], [0, -16]);

  const leftY = useTransform(smooth, [0, 1], [0, -18]);
  const rightY = useTransform(smooth, [0, 1], [0, 20]);

  const cardOneY = useTransform(smooth, [0, 1], [0, 14]);
  const cardTwoY = useTransform(smooth, [0, 1], [0, 28]);

  const titleOpacity = useTransform(smooth, [0, 1], [1, 0.94]);
  const copyOpacity = useTransform(smooth, [0, 1], [1, 0.9]);

  const scanY = useTransform(smooth, [0, 1], [0, 620]);

  return (
    <section ref={sectionRef} className="min-h-[calc(100vh-92px)] pb-2 sm:pb-4">
      <div className="mx-auto max-w-6xl px-5 pb-6 pt-5 sm:pb-8 sm:pt-6">
        <motion.div
          style={
            reduced
              ? undefined
              : {
                  y: shellY,
                  scale: shellScale,
                  opacity: shellOpacity,
                }
          }
          className="relative overflow-hidden rounded-[32px] border border-[color:var(--border)] bg-[rgba(8,12,24,0.62)] shadow-[0_30px_120px_rgba(0,0,0,0.42)] backdrop-blur-xl"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
          >
            <motion.div
              style={reduced ? undefined : { y: gridY }}
              className="absolute inset-0 opacity-[0.08]"
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
              className="absolute -left-24 top-8 h-[380px] w-[380px] rounded-full blur-[100px]"
            >
              <div className="h-full w-full rounded-full bg-[radial-gradient(circle,rgba(104,92,255,0.30)_0%,rgba(104,92,255,0.08)_40%,rgba(104,92,255,0)_72%)]" />
            </motion.div>

            <motion.div
              style={reduced ? undefined : { x: -glowX, y: -glowY }}
              className="absolute -bottom-24 right-[-110px] h-[420px] w-[420px] rounded-full blur-[110px]"
            >
              <div className="h-full w-full rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0.04)_42%,rgba(255,255,255,0)_74%)]" />
            </motion.div>

            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(102,89,255,0.14)_0%,rgba(8,12,24,0)_44%,rgba(255,255,255,0.04)_100%)]" />

            <motion.div
              style={reduced ? undefined : { y: scanY }}
              className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(124,108,255,0.45),transparent)] opacity-55"
            />
          </div>

          <div className="relative p-7 sm:p-10 lg:p-11">
            <div className="grid items-start gap-10 lg:grid-cols-[1.08fr_0.92fr]">
              <motion.div style={reduced ? undefined : { y: leftY }}>
                <p className="text-xs uppercase tracking-[0.24em] text-[color:var(--muted)]">
                  Fateme Ghalandari
                </p>

                <motion.h1
                  style={reduced ? undefined : { opacity: titleOpacity }}
                  className="mt-4 max-w-[10ch] text-4xl font-semibold leading-[0.98] sm:text-6xl"
                >
                  Full-stack
                  <br />
                  software engineer
                  <span className="text-[color:var(--accent)]">.</span>
                </motion.h1>

                <motion.p
                  style={reduced ? undefined : { opacity: copyOpacity }}
                  className="mt-5 max-w-2xl text-base leading-7 text-white/88 sm:text-lg"
                >
                  I build end-to-end web products using{" "}
                  <span className="text-white">
                    React, TypeScript, Node, FastAPI, and PostgreSQL
                  </span>
                  , with a focus on{" "}
                  <span className="text-white">
                    polished interfaces, backend services, API design, and
                    data-backed application logic
                  </span>
                  .
                </motion.p>

                <motion.p
                  style={reduced ? undefined : { opacity: copyOpacity }}
                  className="mt-3 max-w-xl text-sm leading-6 text-[color:var(--muted)] sm:text-[15px]"
                >
                  I’m targeting software and full-stack engineering roles where
                  I can ship real product features across the UI, API layer, and
                  database-backed workflows, not just isolated screens.
                </motion.p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <motion.a
                    href="Projects"
                    whileHover={reduced ? undefined : { y: -2, scale: 1.02 }}
                    whileTap={reduced ? undefined : { scale: 0.98 }}
                    className="rounded-xl bg-[color:var(--accent)] px-5 py-3 text-sm font-medium text-white shadow-[0_20px_70px_rgba(82,74,255,0.35)] transition hover:brightness-110"
                  >
                    View projects
                  </motion.a>

                  <motion.a
                    href="#Contact"
                    whileHover={reduced ? undefined : { y: -2 }}
                    whileTap={reduced ? undefined : { scale: 0.98 }}
                    className="rounded-xl border border-[color:var(--border)] bg-white/[0.05] px-5 py-3 text-sm font-medium transition hover:bg-white/[0.10]"
                  >
                    Contact
                  </motion.a>

                  <motion.a
                    href="/Fateme_Ghalandari_CV.pdf"
                    whileHover={reduced ? undefined : { y: -2 }}
                    whileTap={reduced ? undefined : { scale: 0.98 }}
                    className="rounded-xl border border-[color:var(--border)] bg-transparent px-5 py-3 text-sm font-medium text-[color:var(--muted)] transition hover:bg-white/[0.05] hover:text-white"
                  >
                    Resume
                  </motion.a>
                </div>

                <div className="mt-8 flex max-w-2xl flex-wrap gap-2">
                  {stack.map((item) => (
                    <motion.span
                      key={item}
                      whileHover={reduced ? undefined : { y: -2 }}
                      className="rounded-full border border-[color:var(--border)] bg-white/[0.04] px-3 py-1.5 text-xs text-[color:var(--muted)] transition hover:border-[color:var(--accent)] hover:text-white"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>

                <div className="mt-8 grid max-w-2xl gap-3 sm:grid-cols-3">
                  {proof.map((item) => (
                    <motion.div
                      key={item.k}
                      whileHover={reduced ? undefined : { y: -4 }}
                      className="rounded-2xl border border-[color:var(--border)] bg-white/[0.045] p-4 transition hover:bg-white/[0.07]"
                    >
                      <p className="text-[10px] uppercase tracking-[0.22em] text-[color:var(--muted)]">
                        {item.k}
                      </p>
                      <p className="mt-2 text-sm font-medium leading-6 text-white">
                        {item.v}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                style={reduced ? undefined : { y: rightY }}
                className="lg:pt-2"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--muted)]">
                      Selected work
                    </p>
                    <p className="mt-1 max-w-sm text-sm leading-6 text-[color:var(--muted)]">
                      Product-minded builds with frontend, backend, and
                      data-backed logic.
                    </p>
                  </div>

                  <a
                    href="#Projects"
                    className="text-sm text-[color:var(--muted)] transition hover:text-white"
                  >
                    See all →
                  </a>
                </div>

                <div className="mt-5 space-y-4">
                  {featured.map((project, index) => (
                    <motion.div
                      key={project.title}
                      style={
                        reduced
                          ? undefined
                          : { y: index === 0 ? cardOneY : cardTwoY }
                      }
                    >
                      <motion.article
                        whileHover={reduced ? undefined : { scale: 1.01 }}
                        transition={{
                          type: "spring",
                          stiffness: 240,
                          damping: 20,
                        }}
                        className="group relative overflow-hidden rounded-[28px] border border-[color:var(--border)] bg-[rgba(255,255,255,0.03)] p-6 backdrop-blur-xl"
                      >
                        <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
                          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(108,92,255,0.12),transparent_55%,rgba(255,255,255,0.05))]" />
                        </div>

                        <div className="relative flex items-start justify-between gap-3">
                          <div>
                            <p className="text-xs text-[color:var(--muted)]">
                              {project.tag}
                              <span className="text-[color:var(--accent)]">
                                {" "}
                                •
                              </span>
                            </p>

                            <h3 className="mt-2 text-xl font-semibold text-white">
                              {project.title}
                            </h3>

                            <p className="mt-3 max-w-md text-sm leading-6 text-[color:var(--muted)]">
                              {project.desc}
                            </p>
                          </div>

                          <div className="text-lg text-[color:var(--muted)] transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[color:var(--accent)]">
                            ↗
                          </div>
                        </div>

                        <div className="relative mt-5 flex flex-wrap gap-2">
                          {project.stack.map((tech) => (
                            <span
                              key={tech}
                              className="rounded-full border border-[color:var(--border)] bg-white/[0.05] px-2.5 py-1 text-xs text-[color:var(--muted)]"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        <div className="relative mt-6 flex gap-4 text-sm">
                          <a
                            href={project.links.live}
                            className="font-medium text-white transition hover:text-[color:var(--accent)]"
                          >
                            Live
                          </a>
                          <a
                            href={project.links.code}
                            target="_blank"
                            rel="noreferrer"
                            className="font-medium text-white transition hover:text-[color:var(--accent)]"
                          >
                            Code
                          </a>
                        </div>
                      </motion.article>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

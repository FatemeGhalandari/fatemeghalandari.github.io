import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import PropTypes from "prop-types";

const projects = [
  {
    title: "Ontario Service Finder",
    type: "Full-stack Platform",
    description:
      "Search and discovery experience with maps, admin workflows, and relational data modeling built to feel fast and usable.",
    highlights: [
      "End-to-end product flow across UI, API, and database",
      "Responsive search, filtering, and admin interactions",
      "Structured schema designed for maintainability and clarity",
    ],
    stack: ["React", "Node.js", "PostgreSQL", "Prisma"],
    image: "/ontario-service-finder.png",
    imageAlt: "Ontario Service Finder project screenshot",
    links: {
      live: "https://ontario-service-finder.vercel.app/",
      code: "https://github.com/FatemeGhalandari/ontario-service-finder",
    },
  },
  {
    title: "SkillMate",
    type: "AI + Backend System",
    description:
      "Turns content into structured learning workflows through API-first backend services and a guided product UI.",
    highlights: [
      "Backend endpoints and data flow for structured output",
      "Handled constraints, edge cases, and output consistency",
      "UI designed to make complex generated content easier to use",
    ],
    stack: ["React", "FastAPI", "LLMs"],
    image: "/skillmate.png",
    imageAlt: "SkillMate project screenshot",
    links: {
      live: "https://skillmate-orcin.vercel.app/",
      code: "https://github.com/FatemeGhalandari/skillmate",
    },
  },
  {
    title: "GraphHub",
    type: "Frontend + Data",
    description:
      "Interactive dashboards and visualization flows with a focus on clarity, responsiveness, and rendering performance.",
    highlights: [
      "Charts and filtering patterns designed for usability",
      "Smooth rendering with real datasets and interaction states",
      "Analytics and feedback loops integrated into the UI",
    ],
    stack: ["React", "Firebase", "Charts"],
    image: "/GraphHub.png",
    imageAlt: "GraphHub project screenshot",
    links: {
      live: "https://graph-hub.vercel.app/login",
      code: "https://github.com/FatemeGhalandari/GraphHub",
    },
  },
];

function LinkButton({ href, children, variant }) {
  if (!href) return null;

  const external = typeof href === "string" && href.startsWith("http");

  const base =
    "inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-sm transition";
  const styles =
    variant === "primary"
      ? "border-transparent bg-[color:var(--accent)] text-white hover:brightness-110"
      : "border-[color:var(--border)] bg-white/5 text-white hover:bg-white/10";

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className={`${base} ${styles}`}
    >
      {children}
    </a>
  );
}

LinkButton.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(["primary", "secondary"]),
};

LinkButton.defaultProps = {
  href: "",
  variant: "secondary",
};

function ProjectMedia({ image, alt, fallbackTitle, href, reduced }) {
  const clickable = Boolean(href);
  const external = typeof href === "string" && href.startsWith("http");

  const media = (
    <motion.div
      whileHover={reduced ? undefined : { scale: 1.015 }}
      transition={{ type: "spring", stiffness: 220, damping: 18 }}
      className="relative overflow-hidden rounded-[22px] border border-[color:var(--border)] bg-white/5"
    >
      <div className="aspect-[16/10] w-full">
        {image ? (
          <motion.img
            src={image}
            alt={alt || ""}
            loading="lazy"
            className="h-full w-full object-cover"
            initial={{ opacity: 0.7, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45 }}
          />
        ) : (
          <div className="grid h-full w-full place-items-center">
            <div className="px-6 text-center">
              <div className="text-xs uppercase tracking-[0.22em] text-[color:var(--muted)]">
                Project
              </div>
              <div className="mt-2 text-lg font-semibold text-white">
                {fallbackTitle}
                <span className="text-[color:var(--accent)]">.</span>
              </div>
              <div className="mx-auto mt-3 h-px w-24 bg-[color:var(--accent)] opacity-60" />
            </div>
          </div>
        )}
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100 [background:radial-gradient(900px_circle_at_18%_0%,rgba(79,70,229,0.16),transparent_55%)]"
      />
    </motion.div>
  );

  if (!clickable) return media;

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      aria-label={`Open ${fallbackTitle}`}
      className="block"
    >
      {media}
    </a>
  );
}

ProjectMedia.propTypes = {
  image: PropTypes.string,
  alt: PropTypes.string,
  fallbackTitle: PropTypes.string.isRequired,
  href: PropTypes.string,
  reduced: PropTypes.bool.isRequired,
};

ProjectMedia.defaultProps = {
  image: "",
  alt: "",
  href: "",
};

export default function Projects() {
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
  const shellOpacity = useTransform(smooth, [0, 0.18, 1], [0.58, 1, 1]);
  const shellScale = useTransform(smooth, [0, 0.2, 1], [0.986, 1, 1]);

  const gridY = useTransform(smooth, [0, 1], [20, -24]);
  const glowX = useTransform(smooth, [0, 1], [-14, 24]);
  const glowY = useTransform(smooth, [0, 1], [8, -10]);

  const headerY = useTransform(smooth, [0, 1], [18, -14]);
  const introOpacity = useTransform(smooth, [0.05, 0.22, 1], [0.35, 1, 1]);

  const footerY = useTransform(smooth, [0, 1], [22, -8]);
  const footerOpacity = useTransform(smooth, [0.18, 0.4], [0.35, 1]);

  const scanY = useTransform(smooth, [0, 1], [0, 760]);

  const card1Y = useTransform(smooth, [0, 1], [34, -10]);
  const bottomRowY = useTransform(smooth, [0, 1], [50, 0]);

  const card1Opacity = useTransform(smooth, [0.08, 0.25], [0.35, 1]);
  const bottomRowOpacity = useTransform(smooth, [0.14, 0.31], [0.25, 1]);

  const cardStyles = [
    { y: card1Y, opacity: card1Opacity },
    { y: bottomRowY, opacity: bottomRowOpacity },
    { y: bottomRowY, opacity: bottomRowOpacity },
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
              Selected work
            </p>

            <motion.h2
              style={reduced ? undefined : { opacity: introOpacity }}
              className="mt-4 max-w-[11ch] text-3xl font-semibold leading-[1.02] sm:text-5xl"
            >
              Projects that show real product engineering
              <span className="text-[color:var(--accent)]">.</span>
            </motion.h2>

            <motion.p
              style={reduced ? undefined : { opacity: introOpacity }}
              className="mt-5 max-w-3xl text-base leading-7 text-white/88 sm:text-lg"
            >
              A few builds that show how I work across{" "}
              <span className="text-white">
                frontend systems, backend services, API design, and
                database-backed workflows
              </span>
              .
            </motion.p>
          </motion.div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {projects.map((project, index) => {
              const primaryHref =
                project.links.live || project.links.code || "";
              const isWide = index === 0;

              return (
                <motion.div
                  key={project.title}
                  style={reduced ? undefined : cardStyles[index]}
                  className={isWide ? "lg:col-span-2" : ""}
                >
                  <motion.article
                    whileHover={reduced ? undefined : { y: -6, scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 240, damping: 20 }}
                    className="group relative h-full overflow-hidden rounded-[28px] border border-[color:var(--border)] bg-[rgba(255,255,255,0.03)] p-6 backdrop-blur-xl"
                  >
                    <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
                      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(108,92,255,0.12),transparent_58%,rgba(255,255,255,0.04))]" />
                    </div>

                    <div
                      className={`relative grid gap-6 ${
                        isWide
                          ? "lg:grid-cols-[1.08fr_0.92fr] lg:items-center"
                          : ""
                      }`}
                    >
                      <div>
                        <ProjectMedia
                          image={project.image}
                          alt={project.imageAlt}
                          fallbackTitle={project.title}
                          href={primaryHref}
                          reduced={reduced}
                        />
                      </div>

                      <div>
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <p className="text-xs text-[color:var(--muted)]">
                              <span className="inline-flex items-center gap-2">
                                <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--accent)]" />
                                {project.type}
                              </span>
                            </p>

                            <h3 className="mt-2 text-xl font-semibold text-white sm:text-2xl">
                              {project.title}
                              <span className="text-[color:var(--accent)]">
                                .
                              </span>
                            </h3>
                          </div>

                          <div className="text-sm text-[color:var(--muted)]">
                            {String(index + 1).padStart(2, "0")}
                          </div>
                        </div>

                        <p className="mt-3 text-sm leading-6 text-[color:var(--muted)] sm:text-[15px]">
                          {project.description}
                        </p>

                        <ul className="mt-5 space-y-3 text-sm leading-6 text-[color:var(--muted)]">
                          {project.highlights.map((item) => (
                            <li key={item} className="flex gap-3">
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--accent)]" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="mt-6 flex flex-wrap gap-2">
                          {project.stack.map((tech) => (
                            <span
                              key={tech}
                              className="rounded-full border border-[color:var(--border)] bg-white/[0.05] px-2.5 py-1 text-xs text-[color:var(--muted)] transition group-hover:border-[color:var(--accent)]/40"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        <div className="mt-7 flex flex-wrap gap-3">
                          <LinkButton
                            href={project.links.live}
                            variant="primary"
                          >
                            Live <span className="text-white/90">↗</span>
                          </LinkButton>
                          <LinkButton
                            href={project.links.code}
                            variant="secondary"
                          >
                            Code <span className="text-white/80">↗</span>
                          </LinkButton>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            style={reduced ? undefined : { y: footerY, opacity: footerOpacity }}
            className="mt-10 rounded-[24px] border border-[color:var(--border)] bg-white/[0.035] p-5 sm:p-6"
          >
            <p className="text-sm leading-7 text-[color:var(--muted)]">
              More experiments and implementation work live on GitHub.
            </p>

            <a
              href="https://github.com/FatemeGhalandari"
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-white transition hover:text-[color:var(--accent)]"
            >
              View GitHub
              <span className="text-[color:var(--accent)]">→</span>
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

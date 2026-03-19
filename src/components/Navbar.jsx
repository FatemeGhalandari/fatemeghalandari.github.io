import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faXTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const navLinks = [
  { id: "Home", label: "Home" },
  { id: "Projects", label: "Projects" },
  { id: "Experience", label: "Experience" },
  { id: "Strengths", label: "Strengths" },
  { id: "Contact", label: "Contact" },
];

const socials = [
  {
    href: "https://www.linkedin.com/in/fghalandarii/",
    icon: faLinkedin,
    label: "LinkedIn",
  },
  {
    href: "https://github.com/FatemeGhalandari",
    icon: faGithub,
    label: "GitHub",
  },
  {
    href: "https://twitter.com/fghalandarii",
    icon: faXTwitter,
    label: "X (Twitter)",
  },
  { href: "mailto:fghalandarii@gmail.com", icon: faEnvelope, label: "Email" },
];

const iconMotion = {
  whileHover: { y: -2, scale: 1.06 },
  whileTap: { scale: 0.95 },
};

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="max-w-6xl mx-auto px-5">
        <div className="mt-3 rounded-2xl border border-[color:var(--border)] bg-[rgba(11,15,30,0.72)] backdrop-blur shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
          <div className="h-[80px] px-4 sm:px-5 flex items-center justify-between">
            {/* Left: mobile menu + brand */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                aria-label="Open menu"
                onClick={() => setOpen(true)}
                className="md:hidden h-10 w-10 rounded-xl border border-[color:var(--border)] bg-white/5 hover:bg-white/10 transition-colors grid place-items-center"
              >
                <div className="space-y-1">
                  <div className="h-0.5 w-5 bg-white/80" />
                  <div className="h-0.5 w-5 bg-white/55" />
                  <div className="h-0.5 w-5 bg-white/80" />
                </div>
              </button>

              <a href="#Home" className="font-semibold tracking-wide">
                Fateme G<span className="text-[color:var(--accent)]">.</span>
              </a>
            </div>

            {/* Center: desktop nav */}
            <nav className="hidden md:flex items-center gap-7 text-sm text-[color:var(--muted)]">
              {navLinks.map((l) => (
                <a
                  key={l.id}
                  href={`#${l.id}`}
                  className="hover:text-white transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </nav>

            {/* Right: socials */}
            <ul className="flex items-center gap-4">
              {socials.map((s) => (
                <li key={s.label}>
                  <motion.a
                    {...iconMotion}
                    href={s.href}
                    target={s.href.startsWith("mailto:") ? undefined : "_blank"}
                    rel={
                      s.href.startsWith("mailto:") ? undefined : "noreferrer"
                    }
                    aria-label={s.label}
                    className="text-[color:var(--muted)] hover:text-[color:var(--accent)] transition-colors"
                  >
                    <FontAwesomeIcon icon={s.icon} className="h-5 w-5" />
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open ? (
          <>
            {/* Overlay */}
            <motion.button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 bg-black/60"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Drawer */}
            <motion.aside
              className="fixed top-0 left-0 z-50 h-full w-[82vw] max-w-[360px]
                         border-r border-[color:var(--border)]
                         bg-[rgba(11,15,30,0.86)] backdrop-blur
                         p-5"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 420, damping: 42 }}
            >
              <div className="flex items-center justify-between">
                <div className="font-semibold">
                  Menu<span className="text-[color:var(--accent)]">.</span>
                </div>

                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                  className="h-10 w-10 rounded-xl border border-[color:var(--border)] bg-white/5 hover:bg-white/10 transition-colors grid place-items-center"
                >
                  ✕
                </button>
              </div>

              <nav className="mt-6 flex flex-col gap-2">
                {navLinks.map((l) => (
                  <a
                    key={l.id}
                    href={`#${l.id}`}
                    onClick={() => setOpen(false)}
                    className="group rounded-2xl px-4 py-3
                               border border-transparent hover:border-[color:var(--border)]
                               bg-white/0 hover:bg-white/5 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-base">{l.label}</span>
                      <span className="text-[color:var(--muted)] group-hover:text-[color:var(--accent)] transition-colors">
                        →
                      </span>
                    </div>
                  </a>
                ))}
              </nav>

              <div className="mt-8 rounded-2xl border border-[color:var(--border)] bg-white/5 p-4">
                <p className="text-sm text-[color:var(--muted)]">
                  Full-stack developer building production-grade web apps.
                </p>
                <a
                  href="#Contact"
                  onClick={() => setOpen(false)}
                  className="mt-3 inline-flex items-center gap-2 text-sm text-white"
                >
                  Let’s talk{" "}
                  <span className="text-[color:var(--accent)]">↗</span>
                </a>
              </div>
            </motion.aside>
          </>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const links = [
  { id: "Home", label: "Home" },
  { id: "Portfolio", label: "Work" },
  { id: "Skills", label: "Capabilities" },
  { id: "Contact", label: "Contact" },
];

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      {/* Hamburger */}
      <button
        type="button"
        aria-label="Open menu"
        onClick={() => setOpen(true)}
        className="h-10 w-10 rounded-xl border border-[color:var(--border)] bg-white/5 hover:bg-white/10 transition-colors grid place-items-center"
      >
        <span className="sr-only">Open menu</span>
        <div className="space-y-1">
          <div className="h-0.5 w-5 bg-white/80" />
          <div className="h-0.5 w-5 bg-white/60" />
          <div className="h-0.5 w-5 bg-white/80" />
        </div>
      </button>

      <AnimatePresence>
        {open ? (
          <>
            {/* Overlay */}
            <motion.button
              type="button"
              aria-label="Close menu overlay"
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 bg-black/60"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Drawer */}
            <motion.aside
              className="fixed top-0 left-0 z-50 h-full w-[82vw] max-w-[340px]
                         border-r border-[color:var(--border)]
                         bg-[rgba(11,15,30,0.82)] backdrop-blur
                         p-5"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 380, damping: 38 }}
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
                {links.map((l) => (
                  <a
                    key={l.id}
                    href={`#${l.id}`}
                    onClick={() => setOpen(false)}
                    className="group rounded-2xl border border-transparent hover:border-[color:var(--border)]
                               px-4 py-3 transition-colors bg-white/0 hover:bg-white/5"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-base">{l.label}</span>
                      <span className="text-[color:var(--muted)] group-hover:text-[color:var(--accent)] transition-colors">
                        →
                      </span>
                    </div>
                    <div className="mt-2 h-px w-full bg-[color:var(--border)] opacity-0 group-hover:opacity-100 transition-opacity" />
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
    </div>
  );
}

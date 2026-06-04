import { useMemo, useRef, useState } from "react";
import PropTypes from "prop-types";
import emailjs from "@emailjs/browser";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

const EMAIL = "fghalandarii@gmail.com";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

function SocialLink({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="rounded-xl border border-[color:var(--border)] bg-white/5 px-3 py-2 text-sm transition hover:bg-white/10"
    >
      {children}
    </a>
  );
}

SocialLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

function ActionLink({ href, children, primary = false }) {
  const external =
    typeof href === "string" &&
    (href.startsWith("http") || href.startsWith("mailto:"));

  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className={
        primary
          ? "rounded-xl bg-[color:var(--accent)] px-4 py-2.5 text-sm text-white transition hover:brightness-110"
          : "rounded-xl border border-[color:var(--border)] bg-white/5 px-4 py-2.5 text-sm transition hover:bg-white/10"
      }
    >
      {children}
    </a>
  );
}

ActionLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  primary: PropTypes.bool,
};

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

export default function Contact() {
  const reduced = useReducedMotion();
  const sectionRef = useRef(null);

  const [name, setName] = useState("");
  const [fromEmail, setFromEmail] = useState("");
  const [message, setMessage] = useState("");
  const [copied, setCopied] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState({ type: "", text: "" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const smooth = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 22,
    mass: 0.2,
  });

  const shellY = useTransform(smooth, [0, 1], [20, -18]);
  const shellOpacity = useTransform(smooth, [0, 0.18, 1], [0.62, 1, 1]);
  const shellScale = useTransform(smooth, [0, 0.2, 1], [0.99, 1, 1]);

  const gridY = useTransform(smooth, [0, 1], [14, -18]);
  const glowX = useTransform(smooth, [0, 1], [-10, 18]);
  const glowY = useTransform(smooth, [0, 1], [6, -8]);

  const headerY = useTransform(smooth, [0, 1], [14, -8]);
  const introOpacity = useTransform(smooth, [0.05, 0.22, 1], [0.4, 1, 1]);

  const leftCardY = useTransform(smooth, [0, 1], [20, -4]);
  const rightCardY = useTransform(smooth, [0, 1], [30, 6]);

  const leftCardOpacity = useTransform(smooth, [0.08, 0.24], [0.35, 1]);
  const rightCardOpacity = useTransform(smooth, [0.14, 0.3], [0.25, 1]);

  const scanY = useTransform(smooth, [0, 1], [0, 700]);

  const missingConfig = useMemo(() => {
    return !SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY;
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setStatus({ type: "success", text: "Email copied." });
      window.setTimeout(() => setCopied(false), 1200);
    } catch {
      window.prompt("Copy email:", EMAIL);
      setStatus({
        type: "info",
        text: "Clipboard permission was blocked, so the email was shown instead.",
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (missingConfig) {
      setStatus({
        type: "error",
        text: "EmailJS is not configured yet. Add your service ID, template ID, and public key to the environment variables.",
      });
      return;
    }

    if (!name.trim()) {
      setStatus({ type: "error", text: "Please enter your name." });
      return;
    }

    if (!fromEmail.trim()) {
      setStatus({ type: "error", text: "Please enter your email." });
      return;
    }

    if (!isValidEmail(fromEmail)) {
      setStatus({ type: "error", text: "Please enter a valid email address." });
      return;
    }

    if (!message.trim()) {
      setStatus({ type: "error", text: "Please enter a message." });
      return;
    }

    setIsSending(true);
    setStatus({ type: "info", text: "Sending message..." });

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: name.trim(),
          reply_to: fromEmail.trim(),
          message: message.trim(),
          to_name: "Fateme",
        },
        {
          publicKey: PUBLIC_KEY,
          blockHeadless: true,
          limitRate: {
            id: "portfolio-contact-form",
            throttle: 10000,
          },
        },
      );

      setStatus({
        type: "success",
        text: "Message sent successfully.",
      });

      setName("");
      setFromEmail("");
      setMessage("");
    } catch (error) {
      const errorText =
        typeof error === "object" && error && "text" in error
          ? error.text
          : "Something went wrong while sending. Please try again.";

      setStatus({
        type: "error",
        text: errorText,
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section
      ref={sectionRef}
      className="mx-auto max-w-6xl px-5 pt-0 pb-8 sm:pt-5 sm:pb-12"
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
              Contact
            </p>

            <motion.h2
              style={reduced ? undefined : { opacity: introOpacity }}
              className="mt-4 max-w-[12ch] text-3xl font-semibold leading-[1.02] sm:text-5xl"
            >
              Let&apos;s talk about the role or project
              <span className="text-[color:var(--accent)]">.</span>
            </motion.h2>

            <motion.p
              style={reduced ? undefined : { opacity: introOpacity }}
              className="mt-5 max-w-3xl text-base leading-7 text-white/88 sm:text-lg"
            >
              Open to full-stack, software, and web engineering roles. Reach out
              for opportunities, collaborations, or product work.
            </motion.p>
          </motion.div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <motion.div
              style={
                reduced ? undefined : { y: leftCardY, opacity: leftCardOpacity }
              }
            >
              <motion.div
                whileHover={reduced ? undefined : { scale: 1.008 }}
                transition={{ type: "spring", stiffness: 240, damping: 20 }}
                className="group relative h-full overflow-hidden rounded-[28px] border border-[color:var(--border)] bg-[rgba(255,255,255,0.03)] p-6 backdrop-blur-xl sm:p-7"
              >
                <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(108,92,255,0.10),transparent_58%,rgba(255,255,255,0.04))]" />
                </div>

                <div className="relative">
                  <p className="text-sm text-[color:var(--muted)]">
                    Direct contact
                  </p>

                  <div className="mt-3 text-lg font-semibold text-white sm:text-xl">
                    {EMAIL}
                    <span className="text-[color:var(--accent)]">.</span>
                  </div>

                  <p className="mt-4 max-w-md text-sm leading-6 text-[color:var(--muted)]">
                    Best for hiring conversations, project inquiries, and
                    collaboration opportunities.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <button
                      type="button"
                      onClick={handleCopy}
                      className="rounded-xl border border-[color:var(--border)] bg-white/5 px-4 py-2.5 text-sm transition hover:bg-white/10"
                    >
                      {copied ? "Copied ✓" : "Copy email"}
                    </button>

                    <ActionLink href={`mailto:${EMAIL}`} primary>
                      Email me ↗
                    </ActionLink>

                    <ActionLink href="/Fateme_Ghalandari_CV.pdf">
                      Resume ↗
                    </ActionLink>
                  </div>

                  <div className="mt-8">
                    <p className="text-sm text-[color:var(--muted)]">Links</p>

                    <div className="mt-3 flex flex-wrap gap-2">
                      <SocialLink href="https://github.com/FatemeGhalandari">
                        GitHub ↗
                      </SocialLink>
                      <SocialLink href="https://www.linkedin.com/in/fghalandarii/">
                        LinkedIn ↗
                      </SocialLink>
                      <SocialLink href="https://twitter.com/fghalandarii">
                        X ↗
                      </SocialLink>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              style={
                reduced
                  ? undefined
                  : { y: rightCardY, opacity: rightCardOpacity }
              }
            >
              <motion.div
                whileHover={reduced ? undefined : { scale: 1.008 }}
                transition={{ type: "spring", stiffness: 240, damping: 20 }}
                className="group relative h-full overflow-hidden rounded-[28px] border border-[color:var(--border)] bg-[rgba(255,255,255,0.03)] p-6 backdrop-blur-xl sm:p-7"
              >
                <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(108,92,255,0.10),transparent_58%,rgba(255,255,255,0.04))]" />
                </div>

                <div className="relative">
                  <p className="text-sm text-[color:var(--muted)]">
                    Send a message
                  </p>

                  <form
                    onSubmit={handleSubmit}
                    className="mt-4 space-y-4"
                    noValidate
                  >
                    <div className="grid gap-4 sm:grid-cols-2">
                      <label className="block">
                        <span className="text-xs text-[color:var(--muted)]">
                          Name
                        </span>
                        <input
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Your name"
                          autoComplete="name"
                          className="mt-2 w-full rounded-2xl border border-[color:var(--border)] bg-white/5 px-4 py-3 text-sm outline-none transition focus:border-[color:var(--accent)]/60"
                        />
                      </label>

                      <label className="block">
                        <span className="text-xs text-[color:var(--muted)]">
                          Email
                        </span>
                        <input
                          value={fromEmail}
                          onChange={(e) => setFromEmail(e.target.value)}
                          placeholder="you@email.com"
                          autoComplete="email"
                          type="email"
                          className="mt-2 w-full rounded-2xl border border-[color:var(--border)] bg-white/5 px-4 py-3 text-sm outline-none transition focus:border-[color:var(--accent)]/60"
                        />
                      </label>
                    </div>

                    <label className="block">
                      <span className="text-xs text-[color:var(--muted)]">
                        Message
                      </span>
                      <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Tell me about the role, team, or project..."
                        rows={6}
                        className="mt-2 w-full resize-none rounded-2xl border border-[color:var(--border)] bg-white/5 px-4 py-3 text-sm outline-none transition focus:border-[color:var(--accent)]/60"
                      />
                    </label>

                    <div className="flex flex-wrap items-center gap-3">
                      <button
                        type="submit"
                        disabled={isSending}
                        className="rounded-xl bg-[color:var(--accent)] px-5 py-2.5 text-sm text-white transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
                      >
                        {isSending ? "Sending..." : "Send message ↗"}
                      </button>
                    </div>

                    {status.text ? (
                      <div
                        className={`rounded-2xl border px-4 py-3 text-sm ${
                          status.type === "error"
                            ? "border-red-400/30 bg-red-400/10 text-red-200"
                            : status.type === "success"
                              ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-200"
                              : "border-[color:var(--border)] bg-white/[0.04] text-[color:var(--muted)]"
                        }`}
                      >
                        {status.text}
                      </div>
                    ) : null}
                  </form>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

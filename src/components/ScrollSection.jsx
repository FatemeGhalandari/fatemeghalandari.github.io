import PropTypes from "prop-types";
import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

export default function ScrollSection({
  children,
  className = "",
  innerClassName = "",
  intensity = "md",
}) {
  const reduced = useReducedMotion();
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const smooth = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 22,
    mass: 0.2,
  });

  const configMap = {
    sm: {
      shellY: [20, -20],
      gridY: [14, -18],
      glowX: [-8, 14],
      opacity: [0.8, 1],
    },
    md: {
      shellY: [28, -28],
      gridY: [18, -26],
      glowX: [-12, 24],
      opacity: [0.72, 1],
    },
    lg: {
      shellY: [36, -36],
      gridY: [22, -32],
      glowX: [-16, 30],
      opacity: [0.68, 1],
    },
  };

  const config = configMap[intensity] ?? configMap.md;

  const shellY = useTransform(smooth, [0, 1], config.shellY);
  const gridY = useTransform(smooth, [0, 1], config.gridY);
  const glowX = useTransform(smooth, [0, 1], config.glowX);
  const opacity = useTransform(smooth, [0, 0.2], config.opacity);
  const scanY = useTransform(smooth, [0, 1], [0, 700]);

  return (
    <section ref={ref} className={className}>
      <motion.div
        style={reduced ? undefined : { y: shellY, opacity }}
        className="relative overflow-hidden rounded-[32px] border border-[color:var(--border)] bg-[rgba(8,12,24,0.56)] shadow-[0_30px_120px_rgba(0,0,0,0.32)] backdrop-blur-xl"
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
            style={reduced ? undefined : { x: glowX }}
            className="absolute -left-20 top-10 h-[320px] w-[320px] rounded-full blur-[100px]"
          >
            <div className="h-full w-full rounded-full bg-[radial-gradient(circle,rgba(104,92,255,0.24)_0%,rgba(104,92,255,0.06)_42%,rgba(104,92,255,0)_74%)]" />
          </motion.div>

          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(102,89,255,0.10)_0%,rgba(8,12,24,0)_42%,rgba(255,255,255,0.03)_100%)]" />

          <motion.div
            style={reduced ? undefined : { y: scanY }}
            className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(124,108,255,0.42),transparent)] opacity-50"
          />
        </div>

        <div className={`relative ${innerClassName}`}>{children}</div>
      </motion.div>
    </section>
  );
}

ScrollSection.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  innerClassName: PropTypes.string,
  intensity: PropTypes.oneOf(["sm", "md", "lg"]),
};

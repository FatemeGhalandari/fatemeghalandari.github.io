import PropTypes from "prop-types";
import { motion, useReducedMotion } from "framer-motion";

export default function Reveal({
  children,
  className = "",
  delay = 0,
  y = 18,
  blur = 10,
  once = true,
}) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      initial={
        reduced ? { opacity: 1 } : { opacity: 0, y, filter: `blur(${blur}px)` }
      }
      whileInView={
        reduced ? { opacity: 1 } : { opacity: 1, y: 0, filter: "blur(0px)" }
      }
      viewport={{ once, amount: 0.18 }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

Reveal.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  delay: PropTypes.number,
  y: PropTypes.number,
  blur: PropTypes.number,
  once: PropTypes.bool,
};

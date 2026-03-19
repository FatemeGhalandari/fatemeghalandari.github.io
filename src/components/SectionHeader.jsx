import PropTypes from "prop-types";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 14, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6 },
  },
};

export default function SectionHeader({ eyebrow, title, subtitle }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <motion.p
        variants={fadeUp}
        className="text-xs tracking-[0.22em] uppercase text-[color:var(--muted)]"
      >
        {eyebrow}
      </motion.p>

      <motion.div variants={fadeUp} className="mt-3">
        <h2 className="text-3xl sm:text-4xl font-semibold">
          {title}
          <span className="text-[color:var(--accent)]">.</span>
        </h2>
      </motion.div>

      {subtitle ? (
        <motion.p
          variants={fadeUp}
          className="mt-4 max-w-2xl text-[color:var(--muted)]"
        >
          {subtitle}
        </motion.p>
      ) : null}
    </motion.div>
  );
}

SectionHeader.propTypes = {
  eyebrow: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

SectionHeader.defaultProps = {
  subtitle: "",
};

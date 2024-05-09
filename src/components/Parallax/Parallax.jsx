import PropTypes from "prop-types";
import "./Parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Parallax = ({ type }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);

  return (
    <div
      ref={ref}
      className="parallax"
      style={{
        background:
          type === "skills"
            ? "linear-gradient(180deg, #1a1a2e 0%, #323258 100%)"
            : "linear-gradient(180deg, #1a1a2e 0%, #3f3f5b 100%)",
      }}
    >
      <motion.h1 style={{ y: yText }}>
        {type === "skills" ? "skills" : "portfolio"}
      </motion.h1>
      <motion.div className="mountains"></motion.div>
      <motion.div className="planets" style={{ y: yBg }}></motion.div>
      <motion.div className="stars" style={{ x: yBg }}></motion.div>
    </div>
  );
};

Parallax.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Parallax;

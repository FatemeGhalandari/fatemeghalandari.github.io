import PropTypes from "prop-types";
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
      className="w-[100%] h-[100%] relative overflow-hidden flex items-center justify-center"
      style={{
        background:
          type === "skills"
            ? "linear-gradient(180deg, #1a1a2e 0%, #323258 100%)"
            : "linear-gradient(180deg, #1a1a2e 0%, #3f3f5b 100%)",
      }}
    >
      <motion.h1 className="text-[80px] sm:text-[100px] font-playfair" style={{ y: yText }}>
        {type === "skills" ? "skills" : "portfolio"}
      </motion.h1>
      <motion.div className="bg-mountains w-[100%] h-[100%] bg-cover bg-bottom absolute z-[3]"></motion.div>
      <motion.div
        className="bg-planets w-[100%] h-[100%] bg-cover bg-bottom absolute z-[2]"
        style={{ y: yBg }}
      ></motion.div>
      <motion.div
        className="bg-stars w-[100%] h-[100%] bg-cover bg-bottom absolute z-[1]"
        style={{ x: yBg }}
      ></motion.div>
    </div>
  );
};

Parallax.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Parallax;

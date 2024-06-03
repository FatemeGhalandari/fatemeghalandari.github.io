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
        background: "linear-gradient(180deg, #EADBC8 0%, #5E88B2 100%)",
      }}
    >
      <motion.h1
        className="text-[80px] sm:text-[100px] font-bold font-montserrat text-[#CA8787] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.3)] z-[3]"
        style={{ y: yText }}
      >
        {type === "skills" ? "skills" : "portfolio"}
      </motion.h1>
      <motion.div className="bg-mountains w-[100%] h-[100%] sm:bg-cover bg-contain bg-no-repeat bg-bottom absolute z-[3]"></motion.div>
      <motion.div
        className="bg-planets w-[100%] h-[100%] sm:bg-cover bg-contain bg-no-repeat bg-bottom absolute z-[2]"
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

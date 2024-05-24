import Links from "./Links";
import { useState } from "react";
import { motion } from "framer-motion";
import ToggleButton from "./ToggleButton";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const variants = {
    open: {
      clipPath: "circle(1200px at 50px 50px)",
      transition: {
        type: "spring",
        stiffness: 20,
      },
    },
    closed: {
      clipPath: "circle(30px at 50px 50px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
    initial: {
      clipPath: "circle(30px at 50px 50px)",
    },
  };
  return (
    <motion.div
      className="flex flex-col items-start justify-center bg-white text-black"
      animate={open ? "open" : "closed"}
      initial="initial"
    >
      <motion.div
        className="z-[1] fixed top-0 left-0 bottom-0 sm:w-[400px] w-[200px] bg-white"
        variants={variants}
      >
        <Links />
      </motion.div>
      <ToggleButton setOpen={setOpen} open={open} />
    </motion.div>
  );
};

export default Sidebar;

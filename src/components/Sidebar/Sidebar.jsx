import Links from "./Links";
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import ToggleButton from "./ToggleButton";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const ref = useRef();

  const handleClick = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  });

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
        ref={ref}
        className={`z-[15] fixed top-0 left-0 bottom-0 sm:w-[400px] w-[200px] bg-white ${
          open ? "open" : "closed"
        }`}
        variants={variants}
      >
        <Links />
      </motion.div>
      <ToggleButton setOpen={setOpen} open={open} />
    </motion.div>
  );
};

export default Sidebar;

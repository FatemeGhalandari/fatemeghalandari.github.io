import Links from "./Links";
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
// import ToggleButton from "./ToggleButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";

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
  const toggleSidebar = (event) => {
    event.stopPropagation();
    console.log("toggleSidebar: current open state", open);
    setOpen(!open);
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
      <button
        className="fixed z-[20] top-6 left-6 w-[50px] h-[50px] bg-transparent border-r-4 border-none cursor-pointer"
        onClick={toggleSidebar}
      >
        {open ? (
          <FontAwesomeIcon icon={faX} />
        ) : (
          <FontAwesomeIcon icon={faBars} />
        )}
      </button>
    </motion.div>
  );
};

export default Sidebar;

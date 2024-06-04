import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import {
  faLinkedin,
  faXTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "./Sidebar/Sidebar";

const Navbar = () => {
  return (
    <div className="h-[100px] bg-[#F1F1F1]">
      <Sidebar />
      <div className="h-[100%] max-w-[1366px] flex m-auto items-center justify-end sm:pl-5 p-5">
        {/* <a href="/">
          <motion.span
            className="font-bold sm:block hidden font-mono"
            initial={{ opacity: 0.5, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Fateme Ghalandari
          </motion.span>
        </a> */}
        <ul className="flex gap-5">
          <motion.a
            href="https://www.linkedin.com/in/fghalandarii/"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              style={{ width: "20px", height: "20px", color: "#CA8787" }}
            />
          </motion.a>
          <motion.a
            href="https://github.com/FatemeGhalandari"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FontAwesomeIcon
              icon={faGithub}
              style={{ width: "20px", height: "20px", color: "#CA8787" }}
            />
          </motion.a>
          <motion.a
            href="https://twitter.com/fghalandarii"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FontAwesomeIcon
              icon={faXTwitter}
              style={{ width: "20px", height: "20px", color: "#CA8787" }}
            />
          </motion.a>
          <motion.a
            href="mailto:fghalandarii@gmail.com"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FontAwesomeIcon
              icon={faEnvelope}
              style={{ width: "20px", height: "20px", color: "#CA8787" }}
            />
          </motion.a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

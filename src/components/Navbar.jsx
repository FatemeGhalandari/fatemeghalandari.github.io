import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { motion } from "framer-motion";
import {
  faLinkedin,
  faXTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "./Sidebar/Sidebar";

const Navbar = () => {
  return (
    <div className="h-[100px] bg-[#1a1a2e]">
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
          <a href="https://www.linkedin.com/in/fghalandarii/">
            <FontAwesomeIcon
              icon={faLinkedin}
              style={{ width: "20px", height: "20px", color: "#9be76e" }}
            />
          </a>
          <a href="https://github.com/FatemeGhalandari">
            <FontAwesomeIcon
              icon={faGithub}
              style={{ width: "20px", height: "20px", color: "#9be76e" }}
            />
          </a>
          <a href="https://twitter.com/fghalandarii">
            <FontAwesomeIcon
              icon={faXTwitter}
              style={{ width: "20px", height: "20px", color: "#9be76e" }}
            />
          </a>
          <a href="mailto:fghalandarii@gmail.com">
            <FontAwesomeIcon
              icon={faEnvelope}
              style={{ width: "20px", height: "20px", color: "#9be76e" }}
            />
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

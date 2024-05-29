/* eslint-disable react/prop-types */
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { motion } from "framer-motion";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-500, 500]);

  return (
    <section>
      <div className="flex items-center justify-center h-[100%] w-[100%] sm:pt-0 pt-6">
        <div className="m-auto max-w-[1366px] h-[100%] flex sm:gap-12 gap-2 items-center justify-center sm:flex-row flex-col sm:p-5 p-8 ">
          <div
            className="flex-[1] h-[50%] overflow-hidden sm:w-fit w-[100%] sm:max-h-fit max-h-[300px]"
            ref={ref}
          >
            <img
              className="h-[100%] w-[100%] sm:object-cover object-contain "
              src={item.img}
              alt="{item.img}"
            />
          </div>
          <motion.div
            className="flex-[1] flex flex-col gap-5 !transform-none sm:p-0 p-2.5 sm:items-start items-center text-center"
            style={{ y }}
          >
            <h2 className="sm:text-5xl text-3xl font-mono">{item.title}</h2>
            <p className="sm:text-lg text-sm font-mono text-start font-extralight text-gray-400 max-w-[500px]">
              {item.desc}
            </p>
            <div className="flex flex-row gap-4 justify-center items-center">
              <button className="sm:p-2 p-1 sm:w-[200px] w-[150px] font-mono border-2 rounded-md border-[#9be76e] text-[#9be76e] hover:bg-[#9be76e] hover:text-[#1a1a2e] transition duration-300 ease-in-out">
                {" "}
                See Demo
              </button>
              <a href="https://github.com/FatemeGhalandari">
                <FontAwesomeIcon
                  icon={faGithub}
                  style={{ width: "25px", height: "25px" }}
                />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default Single;

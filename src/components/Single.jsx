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

  const y = useTransform(scrollYProgress, [0, 1], [0, 500]);

  return (
    <section>
      <div className="flex items-center justify-center h-[100%] w-[100%]">
        <div className="m-auto max-w-[1366px] h-[100%] flex sm:gap-12 gap-0 items-center justify-center sm:flex-row flex-col sm:p-5 px-4 ">
          <div
            className="flex-[1] flex justify-start h-[50%] overflow-hidden sm:w-fit w-[100%] sm:max-h-fit max-h-[300px] "
            ref={ref}
          >
            <img
              className="w-full sm:h-[300px] sm:w-auto object-contain sm:mt-0 mt-5"
              src={item.img}
              alt={item.title}
            />
          </div>
          <motion.div
            className="flex-[1] flex flex-col gap-5 sm:p-0 p-2.5 sm:items-start items-center text-center"
            style={{ y }}
          >
            <h2 className="sm:text-5xl text-3xl font-merriweather font-semibold text-[#CA8787]">
              {item.title}
            </h2>
            <p className="sm:text-lg font-thin text-sm font-merriweather sm:self-start self-center text-start tracking-wide text-[#88919e] max-w-[500px]">
              {item.desc}
            </p>
            <div className="flex flex-row gap-4 justify-center items-center">
              <button
                onClick={() => window.open(item.demo)}
                className="z-[3] sm:p-2 p-1 sm:w-[200px] w-[150px]  border-2 rounded-md border-[#CA8787] text-[#CA8787] hover:bg-[#CA8787] hover:text-black transition duration-300 ease-in-out"
              >
                {" "}
                <span className="font-merriweather text-lg"> See Demo</span>
              </button>
              <a href={item.git} className="z-[3]">
                <FontAwesomeIcon
                  icon={faGithub}
                  style={{ width: "25px", height: "25px", color: "#CA8787" }}
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

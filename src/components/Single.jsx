/* eslint-disable react/prop-types */
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-500, 500]);

  return (
    <section>
      <div className="flex items-center justify-center h-[100%] w-[100%]">
        <div className="m-auto max-w-[1366px] h-[100%]  flex gap-12 items-center justify-center">
          <div className="flex-[1] h-[50%] overflow-hidden" ref={ref}>
            <img
              className="h-[100%] w-[100%] object-cover"
              src={item.img}
              alt="{item.img}"
            />
          </div>
          <motion.div className="flex-[1] flex flex-col gap-5" style={{ y }}>
            <h2 className="text-5xl">{item.title}</h2>
            <p className="text-lg font-extralight text-gray-400 max-w-[500px]">
              {item.desc}
            </p>
            <button className="p-2 w-[200px] border-2 rounded-md border-[#9be76e] text-[#9be76e] hover:bg-[#9be76e] hover:text-[#1a1a2e] transition duration-300 ease-in-out">
              {" "}
              See Demo
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default Single;

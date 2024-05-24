import { motion } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 0,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Skills = () => {
  return (
    <motion.div
      className="h-[100%] bg-gradient-to-t to-[#1a1a2e] from-[#323258] flex flex-col items-center justify-between"
      variants={variants}
      initial="initial"
      animate="animate"
    >
      <motion.div
        className="flex-1 flex items-center self-end gap-5"
        variants={variants}
      >
        <p className="text-[18px] text-gray-400 font-extralight text-right">
          Adept at leveraging modern web technologies to craft exceptional user
          experiences.
        </p>
        <hr className="w-[500px] border-solid border-t-gray-400 border-t-[0.5px]" />
      </motion.div>
      <motion.div
        className="flex-[2] flex flex-col items-center"
        variants={variants}
      >
        <motion.div className="flex flex-row gap-12 items-center">
          <img
            className="h-[100px] w-[300px] rounded-[50px] object-cover"
            src="/people.webp"
            alt=""
          />
          <h1 className="text-[70px] font-thin">
            <motion.b whileHover={{ color: "#9be76e" }}>Unique</motion.b> ideas
          </h1>
        </motion.div>
        <motion.div className="flex flex-row gap-12 items-center">
          <h1 className="text-[70px] font-thin">
            <motion.b whileHover={{ color: "#9be76e" }}>For Your</motion.b>{" "}
            Business
          </h1>
          <button className="h-[100px] w-[300px] rounded-[50px] object-cover border-none bg-[#9be76e] text-[20px] cursor-pointer">
            What we do
          </button>
        </motion.div>
      </motion.div>
      <motion.div
        className="flex-[2] flex m-auto max-w-[1366px]"
        variants={variants}
      >
        <motion.div
          className="flex flex-col justify-between p-12 border-solid border-gray-400 border-[0.5px]"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p className="py-2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem
            consectetur dolor earum nostrum quaerat vero repellat impedit, atque
            nesciunt placeat, est recusandae consequatur voluptate laboriosam,
            facilis obcaecati voluptates rem fugiat!
          </p>
        </motion.div>
        <motion.div
          className="flex flex-col justify-between p-12 border-solid border-gray-400 border-[0.5px]"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p className="py-2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem
            consectetur dolor earum nostrum quaerat vero repellat impedit, atque
            nesciunt placeat, est recusandae consequatur voluptate laboriosam,
            facilis obcaecati voluptates rem fugiat!
          </p>
        </motion.div>
        <motion.div
          className="flex flex-col justify-between p-12 border-solid border-gray-400 border-[0.5px]"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p className="py-2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem
            consectetur dolor earum nostrum quaerat vero repellat impedit, atque
            nesciunt placeat, est recusandae consequatur voluptate laboriosam,
            facilis obcaecati voluptates rem fugiat!
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Skills;

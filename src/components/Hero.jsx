import { motion } from "framer-motion";

const textVariants = {
  initial: {
    opacity: 0,
    x: -500,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scroll: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const Hero = () => {
  return (
    <div className="h-[calc(100vh-100px)] bg-gradient-to-t to-[#1a1a2e] from-[#323258] overflow-hidden relative">
      <div className="max-w-[1366px] m-auto h-[100%] pl-5">
        <motion.div
          className="sm:h-[100%] h-[50%] sm:w-[50%] w-[100%] flex flex-col justify-center sm:gap-10 gap-5 items-center sm:items-start sm:text-start text-center"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2
            className="sm:text-4xl text-3xl font-playfair text-[#9be76e] tracking-wider"
            variants={textVariants}
          >
            Fateme Ghalandari
          </motion.h2>
          <motion.h1
            className="sm:text-4xl text-3xl font-playfair text-[#f5f5f5] tracking-wider"
            variants={textVariants}
          >
            Frontend Developer
          </motion.h1>
          <motion.div className="flex sm:gap-5 gap-2" variants={textVariants}>
            <motion.button
              className="sm:p-3 p-2 sm:text-lg text-sm border-2 rounded-md border-[#9be76e] text-[#9be76e] hover:bg-[#9be76e] hover:text-[#1a1a2e] transition duration-300 ease-in-out"
              variants={textVariants}
            >
              <a href="#Portfolio">See the Latest Works</a>
            </motion.button>
            <motion.button
              className="p-3 border-2 rounded-md border-[#9be76e] text-[#9be76e] hover:bg-[#9be76e] hover:text-[#1a1a2e] transition duration-300 ease-in-out"
              variants={textVariants}
            >
              <a href="#Contact">Contact Me</a>
            </motion.button>
          </motion.div>
          <motion.img
            className="w-[50px]"
            variants={textVariants}
            src="/scroll.png"
            alt="scroll"
            animate="scroll"
          />
        </motion.div>
      </div>
      <div className="sm:h-[100%] h-[50%] sm:w-fit w-[100%] sm:top-0 sm:right-0 bottom-0 absolute">
        <img
          src="/hero.png"
          alt="hero"
          className="w-[100%] h-[100%] object-cover"
        />
      </div>
    </div>
  );
};

export default Hero;

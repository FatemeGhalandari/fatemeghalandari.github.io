import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";

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
    <div className="h-[calc(100vh-100px)] bg-gradient-to-t to-[#F1F1F1] from-[#EADBC8] overflow-hidden relative">
      <div className="max-w-[1366px] m-auto h-[100%] pl-5">
        <motion.div
          className="sm:h-[100%] h-[50%] sm:w-[50%] w-[100%] flex flex-col justify-center sm:gap-10 gap-3 items-center sm:items-start sm:text-start text-center"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2
            className="sm:text-4xl text-xl font-bold font-montserrat text-[#CA8787] tracking-wider"
            variants={textVariants}
          >
            Fateme Ghalandari
          </motion.h2>
          <motion.div className="flex sm:flex-row flex-col sm:gap-2 gap-0">
            <motion.h1
              className="sm:text-2xl text-base font-semibold font-merriweather text-[#CA8787] tracking-wider"
              variants={textVariants}
            >
              Frontend Developer
            </motion.h1>
            <motion.span
              className="sm:block hidden text-2xl font-semibold text-[#CA8787]"
              variants={textVariants}
            >
              |
            </motion.span>
            <motion.h1
              className="sm:text-2xl text-base font-semibold font-merriweather text-[#CA8787] tracking-wider"
              variants={textVariants}
            >
              Computer Engineering Graduate
            </motion.h1>
          </motion.div>
          <motion.p
            className="sm:text-lg font-thin text-sm font-merriweather text-[#CA8787] tracking-tight"
            variants={textVariants}
          >
            With 1.5 years of experience in front-end development, a deep
            passion has been cultivated for blending HTML, CSS, JavaScript,
            React.js, and Tailwind CSS to create engaging web experiences.
          </motion.p>
          <motion.div className="flex sm:gap-5 gap-2" variants={textVariants}>
            <motion.button
              className="sm:p-3 p-2 sm:text-lg text-sm border-2 rounded-md border-[#CA8787] text-[#CA8787] hover:bg-[#CA8787] hover:text-black transition duration-300 ease-in-out"
              variants={textVariants}
            >
              <a className="font-merriweather" href="#Portfolio">
                See the Latest Works
              </a>
            </motion.button>
            <motion.button
              className="sm:p-3 p-2 sm:text-lg text-sm border-2 rounded-md border-[#CA8787] text-[#CA8787] hover:bg-[#CA8787] hover:text-black transition duration-300 ease-in-out"
              variants={textVariants}
            >
              <a className="font-merriweather" href="#Contact">
                Contact Me
              </a>
            </motion.button>
          </motion.div>
          <motion.div variants={textVariants} animate="scroll">
            <FontAwesomeIcon
              icon={faAnglesDown}
              size="2xl"
              className="w-[50px] text-[#CA8787]"
              variants={textVariants}
              animate="scroll"
            />
          </motion.div>
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

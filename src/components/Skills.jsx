import { motion } from "framer-motion";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiTailwindcss,
  SiFirebase,
  SiMongodb,
  SiRedux,
  SiJavascript,
  SiPython,
  SiDocker,
  SiGit,
  SiNextdotjs,
  SiFastapi,
} from "react-icons/si";
const skills = [
  {
    name: "ReactJS",
    icon: <FaReact className="text-[#61DBFB]" />,
    description: "A JavaScript library for building user interfaces.",
  },
  {
    name: "TailwindCSS",
    icon: <SiTailwindcss className="text-[#38BDF8]" />,
    description: "A utility-first CSS framework for building modern UIs.",
  },
  {
    name: "Firebase",
    icon: <SiFirebase className="text-[#FFCA28]" />,
    description:
      "A backend platform for building scalable web and mobile apps.",
  },
  {
    name: "Python",
    icon: <SiPython className="text-[#3776AB]" />,
    description:
      "A high-level programming language known for readability and versatility.",
  },
  {
    name: "Node.js",
    icon: <FaNodeJs className="text-[#3C873A]" />,
    description:
      "A JavaScript runtime environment built on Chrome's V8 engine.",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="text-[#47A248]" />,
    description: "A NoSQL document-oriented database designed for scalability.",
  },
  {
    name: "Redux",
    icon: <SiRedux className="text-[#764ABC]" />,
    description: "A predictable state container for JavaScript and React apps.",
  },
  {
    name: "JavaScript",
    icon: <SiJavascript className="text-[#F7DF1E]" />,
    description:
      "A programming language that powers dynamic behavior on the web.",
  },
  {
    name: "Docker",
    icon: <SiDocker className="text-[#2496ED]" />,
    description:
      "A platform for building and deploying containerized applications.",
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="text-black " />,
    description:
      "A React framework for building fullstack and server-rendered applications.",
  },
  {
    name: "FastAPI",
    icon: <SiFastapi className="text-[#009688]" />,
    description:
      "A fast, modern Python framework for building high-performance APIs.",
  },
  {
    name: "Git",
    icon: <SiGit className="text-[#F05032]" />,
    description:
      "A distributed version control system for managing source code.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Skills = () => {
  return (
    <motion.div
      className="max-w-[1366px] w-full h-full mx-auto sm:py-16 py-8 px-4 sm:px-6 lg:px-8"
      initial="hidden"
      whileInView="visible"
      variants={containerVariants}
    >
      <motion.h2
        className="text-5xl font-montserrat sm:font-bold text-[#CA8787] mb-8 py-4 text-center"
        variants={itemVariants}
      >
        Skills
      </motion.h2>
      <motion.div
        className="grid sm:gap-8 gap-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-3"
        variants={containerVariants}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="p-2 bg-[#F6F5F2] text-[#88919e] rounded-lg shadow-md shadow-[#CA8787] flex flex-col items-center transform transition duration-300 hover:scale-105 hover:bg-[#CA8787] hover:text-white"
            variants={itemVariants}
          >
            <div className="text-6xl mb-4">{skill.icon}</div>
            <h3 className="sm:text-lg text-sm font-semibold mb-2">
              {skill.name}
            </h3>
            {/* <p className="text-center">{skill.description}</p> */}
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Skills;

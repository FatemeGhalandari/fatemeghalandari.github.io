import { motion } from "framer-motion";
import { FaReact, FaSass, FaNodeJs } from "react-icons/fa";
import {
  SiTailwindcss,
  SiFirebase,
  SiMongodb,
  SiRedux,
  SiJavascript,
  SiHtml5,
} from "react-icons/si";

const skills = [
  {
    name: "ReactJS",
    icon: <FaReact className="text-blue-500" />,
    description: "A JavaScript library for building user interfaces.",
  },
  {
    name: "TailwindCSS",
    icon: <SiTailwindcss className="text-teal-500" />,
    description: "A utility-first CSS framework.",
  },
  {
    name: "Firebase",
    icon: <SiFirebase className="text-yellow-500" />,
    description:
      "A platform developed by Google for creating mobile and web applications.",
  },
  {
    name: "Sass",
    icon: <FaSass className="text-pink-500" />,
    description:
      "A preprocessor scripting language that is interpreted or compiled into CSS.",
  },
  {
    name: "Node.js",
    icon: <FaNodeJs className="text-green-500" />,
    description: "A JavaScript runtime built on Chrome's V8 JavaScript engine.",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="text-green-500" />,
    description:
      "A source-available cross-platform document-oriented database program.",
  },
  {
    name: "Redux",
    icon: <SiRedux className="text-purple-500" />,
    description: "A Predictable State Container for JavaScript Apps.",
  },
  {
    name: "JavaScript",
    icon: <SiJavascript className="text-yellow-500" />,
    description:
      "A programming language that conforms to the ECMAScript specification.",
  },
  {
    name: "HTML5",
    icon: <SiHtml5 className="text-orange-500" />,
    description:
      "A markup language used for structuring and presenting content on the World Wide Web.",
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

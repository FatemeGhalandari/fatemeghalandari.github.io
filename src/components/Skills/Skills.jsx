import "./Skills.scss";
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
      className="skills"
      variants={variants}
      initial="initial"
      animate="animate"
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          Adept at leveraging modern web technologies to craft exceptional user
          experiences.
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <motion.div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{ color: "#fffb12" }}>Unique</motion.b> ideas
          </h1>
        </motion.div>
        <motion.div className="title">
          <h1>
            <motion.b whileHover={{ color: "#fffb12" }}>For Your</motion.b>{" "}
            Business
          </h1>
          <button>What we do</button>
        </motion.div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem
            consectetur dolor earum nostrum quaerat vero repellat impedit, atque
            nesciunt placeat, est recusandae consequatur voluptate laboriosam,
            facilis obcaecati voluptates rem fugiat!
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem
            consectetur dolor earum nostrum quaerat vero repellat impedit, atque
            nesciunt placeat, est recusandae consequatur voluptate laboriosam,
            facilis obcaecati voluptates rem fugiat!
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem
            consectetur dolor earum nostrum quaerat vero repellat impedit, atque
            nesciunt placeat, est recusandae consequatur voluptate laboriosam,
            facilis obcaecati voluptates rem fugiat!
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Skills;

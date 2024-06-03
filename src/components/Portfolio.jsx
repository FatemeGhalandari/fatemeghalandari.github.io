/* eslint-disable react/prop-types */
import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Single from "./Single";

const items = [
  {
    id: 1,
    title: "Beautyness",
    img: "Beautyness.png",
    desc: "A modern and responsive website dedicated to beauty and body care built using ReactJS, Tailwind CSS, and Vite. The website offers a curated experience for users, delivering expertly crafted content on skincare routines and makeup tips. Rooted in a philosophy encapsulated by the slogan \"Beauty is power, a smile is its sword.\"",
    demo: "https://beautyness-bodycare.vercel.app/",
    git: "https://github.com/FatemeGhalandari/Beautyness",
  },
  {
    id: 2,
    title: "GraphHub",
    img: "GraphHub.png",
    desc: "Built with ReactJS and TailwindCSS and integrated with Firebase, GraphHub offers a seamless experience for analyzing your products, orders, user activities, and financial data.",
    demo: "https://graph-hub.vercel.app/",
    git: "https://github.com/FatemeGhalandari/GraphHub",
  },
  {
    id: 3,
    title: "HooBank",
    img: "HooBank.png",
    desc: "A responsive web application, HooBank is designed for modern banking needs and has been developed with ReactJS, TailwindCSS, and Vite. Featuring a multi-component modular structure, the project emphasizes maintainability and reusability",
    demo: "https://hoobank-payment.vercel.app/",
    git: "https://github.com/FatemeGhalandari/HooBank",
  },
];

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div className="relative" ref={ref}>
      <div className="sticky top-0 left-0 sm:pt-12 pt-[calc(100vh-100px)] text-center">
        <h1 className="sm:text-5xl text-4xl font-bold font-montserrat sm:pb-2 pt-4 text-[#CA8787]">
          Featured works
        </h1>
        <motion.div
          className="bg-[#CA8787] h-[5px]"
          style={{ scaleX }}
        ></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;

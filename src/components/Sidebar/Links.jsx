import { motion } from "framer-motion";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const Links = () => {
  const items = [
    { id: "Home", title: "Home" },
    { id: "Skills", title: "Skills" },
    { id: "Portfolio", title: "Portfolio" },
    { id: "Contact", title: "Contact" },
  ];
  return (
    <motion.div
      className="flex flex-col items-center justify-center absolute h-[100%] w-[100%] gap-5"
      variants={variants}
    >
      {items.map((item) => (
        <motion.a
          className="no-underline text-[#f8f6f5] sm:text-[30px] text-[20px] font-merriweather cursor-pointer"
          href={`#${item.title}`}
          key={item.id}
          variants={itemVariants}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          {item.title}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;

import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";

const FramerMotionApp = () => {
  const [isOpen, setOpen] = useState(false);

  const list = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
  };

  const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
  };

  return (
    <div className="w-full h-full m-0 p-0">
      <motion.div
        className="w-12 h-12 rounded-full p-4 bg-indigo-600"
        animate={{
          x: [0, 600, 300, 900, 300, 1200],
          opacity: [0, 0.2, 0.4, 0.6, 0.8, 1],
        }}
        transition={{
          ease: "easeIn",
          duration: 4,
        }}
      />
      <motion.ul
        initial="hidden"
        animate="visible"
        variants={list}
        className="p-6 bg-slate-500 font-mono font-semibold text-lg h-fit w-fit mx-auto"
      >
        <motion.li variants={item}>item 1</motion.li>
        <motion.li variants={item}>item 2</motion.li>
        <motion.li variants={item}>item 3</motion.li>
      </motion.ul>
      function Accordion(){" "}
      {
        <motion.div
          layout
          style={{
            height: isOpen ? "100px" : "500px",
            backgroundColor: "green",
          }}
          onClick={() => setOpen(!isOpen)}
        />
      }
    </div>
  );
};

export default FramerMotionApp;

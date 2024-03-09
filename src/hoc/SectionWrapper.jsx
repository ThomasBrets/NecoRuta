import React, { Component } from "react";
import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion";

const SectionWrapper = (Component, idName) => {
  const HOC = () => {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={` mx-auto max-w-7xl relative z-0`}
      >
        {/* <span className="hash-span" id={idName}>
        &nbsp;
        </span> */}
        <Component />
      </motion.section>
    );
  };
  return HOC; // Retornar el componente HOC envuelto
};

export default SectionWrapper;

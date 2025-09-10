import React from "react";
import { motion } from "framer-motion";

const Card = ({ children, className = "" }) => (
  <motion.div
    whileHover={{ y: -6, scale: 1.02 }}
    transition={{ type: "spring", stiffness: 200 }}
    className={`bg-black rounded-2xl p-8 shadow-lg flex flex-col items-center ${className}`}
  >
    {children}
  </motion.div>
);

export default Card;
  
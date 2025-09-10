import React from "react";
import { motion } from "framer-motion";

const WelcomeSection = () => (
  <motion.section
    className="w-full text-center pt-12 pb-4 px-6"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    viewport={{ once: true }}
  >
    <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
      Welcome Back, Alumni!
    </h2>
    <p className="text-black text-base md:text-lg font-normal max-w-3xl mx-auto leading-relaxed">
      We are thrilled to offer the Maker Pass at a discounted price exclusively
      for our T-Works Alumni. If you’ve worked with us for a year or more, you
      can avail a 50% discount on our membership plans using the alumni coupon
      code.
    </p>
  </motion.section>
);

export default WelcomeSection;

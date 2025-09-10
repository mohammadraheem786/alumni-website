import React from "react";
import Button from "../components/Button";
import { motion } from "framer-motion";

const CTASection = () => {
  const handleClick = () => {
    const contact = document.getElementById("contact");
    if (contact) contact.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-16 flex flex-col items-center">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <Button
          onClick={handleClick}
          ariaLabel="Get Alumni Maker Pass"
          className="px-6 py-3 bg-indigo-600 text-white rounded-xl text-lg font-semibold shadow-lg hover:bg-indigo-700 transition transform hover:scale-105"
        >
          Get Alumni Maker Pass
        </Button>
      </motion.div>
    </section>
  );
};

export default CTASection;

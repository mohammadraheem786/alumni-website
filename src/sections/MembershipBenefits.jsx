import React from "react";
import alumniCardImg from "../assets/alumni-card.png";
import { benefits } from "../utils/constants";
import { motion } from "framer-motion";

const MembershipBenefits = () => (
  <section className="w-full flex flex-col items-center justify-center py-16 px-4 bg-gray-50">
    <motion.div
      className="bg-black rounded-2xl p-10 w-full max-w-2xl flex flex-col items-center shadow-xl"
      initial={{ y: 60, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h3 className="text-white text-3xl font-bold mb-6">Membership Benefits:</h3>
      <motion.img
        src={alumniCardImg}
        alt="Alumni Maker Pass Card"
        className="w-48 h-28 object-contain mb-8 border border-gray-700 rounded-lg shadow"
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      />
      <ul className="text-white text-base md:text-lg space-y-4 text-left font-normal w-full max-w-xl mx-auto">
        {benefits.map((item, idx) => (
          <motion.li
            key={idx}
            className="flex items-start gap-3"
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
          >
            <span className="text-indigo-400 mt-1">✔</span>
            <span>{item}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  </section>
);

export default MembershipBenefits;

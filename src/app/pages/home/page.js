"use client";
import React from "react";
import { motion } from "framer-motion";
import "./home.css";

export const HomePage = () => {
  return (
    <main id="home">
      <motion.div 
        className="banner_portfolio text-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.h2 
          className="contenttitle"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        >
          “Securing the Future with Passion and Expertise”
        </motion.h2>
        <motion.div 
          className="innercontent"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        >
          <motion.p 
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            Driven by a deep passion for cybersecurity, I am on a mission to protect and empower digital spaces.
            With hands-on experience in ethical hacking, cloud security, and system defenses, I’m committed to
            staying ahead of the curve to safeguard the digital world, one system at a time.
          </motion.p>
        </motion.div>
      </motion.div>
    </main>
  );
};

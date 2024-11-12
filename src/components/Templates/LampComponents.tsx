"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "../lamp";

export function LampComponents() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: -150 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="bg-gradient-to-br from-slate-300 to-slate-500  bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        Skill & Tech Stack
      </motion.h1>
    </LampContainer>
  );
}

"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "../lamp";
import { CardHoverComponents } from "./CardHoverComponents";
import { TextRevealCardComponents } from "./TextReveralCardComponents";
import { SparklesFont } from "./SparklesFont";
import { TextRevealCard, TextRevealCardDescription, TextRevealCardTitle } from "../TextReveralCard";

export function LampComponents() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="bg-gradient-to-br from-slate-300 to-slate-500  bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        <div className="flex flex-col max-w-full w-full">
          <p>Skill and TechStack</p>
          <CardHoverComponents />
        </div>
      </motion.h1>
    </LampContainer>
  );
}

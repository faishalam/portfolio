"use client";
import React from "react";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "../TextReveralCard";
import { SparklesFont } from "./SparklesFont";

export function TextRevealCardComponents() {
  return (
    <div className="max-w-full mx-auto w-full">
      <h1 className="text-4xl md:text-4xl lg:text-5xl font-semibold max-w-full mx-auto relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
        Tech enthusiast with a passion for
        <SparklesFont>development</SparklesFont>
      </h1>
      {/* <div className="flex items-center justify-center h-[40rem] rounded-2xl w-full">
        <TextRevealCard
          text="You know the business"
          revealText="I know the chemistry "
        >
          <TextRevealCardTitle>
            Sometimes, you just need to see it.
          </TextRevealCardTitle>
          <TextRevealCardDescription>
            This is a text reveal card. Hover over the card to reveal the hidden
            text.
          </TextRevealCardDescription>
        </TextRevealCard>
      </div> */}
    </div>
  );
}

"use client";

import { FlipWords } from "@/components/FlipWord";
import { LampDemo } from "@/components/lamp";
import { SparklesCore } from "@/components/Sparkles";
import { SparklesPreview } from "@/components/SparklesPreview";
import CardPinComponents from "@/components/Templates/CardPinComponents";
import { CompareComponents } from "@/components/Templates/CompareComponents";
// import { CardPinComponents } from "@/components/Templates/CardPinComponents";
import { LampComponents } from "@/components/Templates/LampComponents";
import { MovingCardsComponents } from "@/components/Templates/MovingCardsComponents";
import { SparklesFont } from "@/components/Templates/SparklesFont";
import { StickyScrollComponents } from "@/components/Templates/StickyScrollComponents";
import { TextRevealCardComponents } from "@/components/Templates/TextReveralCardComponents";
import { WobbleCardComponents } from "@/components/Templates/WobbleCardComponents";
import { TimelineDemo } from "@/components/TimelineDemo";
import { WavyBackground } from "@/components/WavyBackground";

export default function Home() {
  const words = [
    "Software Engineer",
    "Frontend Engineer",
    "Full Stack Engineer",
  ];

  return (
    <>
      <div className="max-w-full w-full h-full">
        <WavyBackground className="max-w-7xl mx-auto h-full">
          <div className="w-full h-full flex flex-col justify-center items-center px-4 ">
            <div className="text-2xl md:text-6xl flex flex-col w-full justify-center items-center font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
              <p>Hi, I'm Faishal</p>
              <FlipWords words={words} />
            </div>
          </div>
        </WavyBackground>
      </div>

      <div className="max-w-7xl w-full h-screen mx-auto gap-10 flex justify-center items-center">
        <div className="flex w-full max-w-full justify-center items-start gap-10">
          <div className="flex flex-col justify-start items-start max-w-full w-full gap-20">
            <TextRevealCardComponents />
            <CompareComponents />
          </div>
          <WobbleCardComponents />
        </div>
      </div>

      <div className="max-w-full h-full w-full max-h-full ">
        <TimelineDemo />
      </div>

      {/* <div className="max-w-7xl w-full mx-auto flex flex-col justify-center items-center">
        <LampComponents />
      </div> */}

      <div className="max-w-7xl w-full flex h-full justify-center items-center mx-auto">
        <CardPinComponents />
      </div>

      <div className="max-w-7xl w-full flex h-screen justify-center items-center mx-auto">
        <StickyScrollComponents />
      </div>
    </>
  );
}

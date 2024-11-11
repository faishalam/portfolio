import { FlipWords } from "@/components/FlipWord";
import { LampDemo } from "@/components/lamp";
import { SparklesCore } from "@/components/Sparkles";
import { SparklesPreview } from "@/components/SparklesPreview";
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
            <div className="text-2xl md:text-5xl flex flex-col w-full justify-center items-center font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
              <p>Hi, I'm Faishal</p>
              <FlipWords words={words} />
            </div>

          </div>
        </WavyBackground>
      </div>
    </>
  );
}

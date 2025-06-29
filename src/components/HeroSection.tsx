"use client";
import { BackgroundLines } from "@/components/ui/background-lines";
import { Highlight } from "@/components/Highlight";
import { Cover } from "@/components/ui/cover";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

export const HeroSection = () => {
  const handleScrollToProjects = () => {
    const element = document.getElementById("what-ive-worked-on");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative">
      <BackgroundLines className="flex items-center justify-center w-full flex-col px-4 h-screen">
        <h1 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-4xl md:text-6xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
        Hello there! I'm{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
          Aditya
        </span>
      </h1>
      <h3 className="text-2xl md:text-2xl lg:text-4xl font-semibold max-w-7xl mx-auto text-center mt-2 relative z-20 py-3 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
        <Cover>Building</Cover> intelligent systems
      </h3>
      <p className="max-w-2xl mx-auto text-lg md:text-xl text-neutral-700 dark:text-neutral-400 text-center relative z-20 leading-relaxed">
        I'm a Software Engineer, Data Scientist, and Researcher with a passion for{" "}
        <Highlight>crafting innovative solutions</Highlight> that aid humanity in reducing redundant work with the help of AI, ML, and software solutions.
      </p>
      <p className="max-w-2xl mx-auto text-base md:text-lg text-neutral-600 dark:text-neutral-500 text-center relative z-20 mt-4 leading-relaxed">
        I have expertise in{" "}
        <Highlight>finding insights from data</Highlight>, designing scalable software solutions, and creating personalized language models.
      </p>
      <div className="mt-8 relative z-20">
        <HoverBorderGradient
          containerClassName="rounded-full"
          as="button"
          className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white flex items-center space-x-2 px-8 py-3 font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          onClick={handleScrollToProjects}
          duration={2}
          clockwise={true}
        >
          <span>What I've Worked On</span>
          <svg 
            className="w-4 h-4 animate-bounce" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </HoverBorderGradient>
      </div>
      </BackgroundLines>
    </section>
  );
};
import Image from "next/image";
import React from "react";
import { Heading } from "./Heading";
import { InfiniteScroll } from "./ui/infinite-scroll";
import StackIcon from "tech-stack-icons";

export const TechStack = () => {
  // Comprehensive tech stack with icons from sample.tex
  const techStack = [
    // Languages
    { name: "C++", iconName: "c++" },
    { name: "Python", iconName: "python" },
    { name: "Go", iconName: "go" },
    { name: "JavaScript", iconName: "js" },
    { name: "TypeScript", iconName: "typescript" },
    { name: "MySQL", iconName: "mysql" },
    { name: "Bash", iconName: "bash" },
    
    // Frameworks
    { name: "React", iconName: "react" },
    { name: "Next.js", iconName: "nextjs" },
    { name: "FastAPI", iconName: "fastapi" },
    { name: "PyTorch", iconName: "pytorch" },
    
    // Cloud & Infrastructure
    { name: "AWS", iconName: "aws" },
    { name: "Docker", iconName: "docker" },
    { name: "Kubernetes", iconName: "kubernetes" },
    { name: "Terraform", iconName: "terraform" },
    { name: "Jenkins", iconName: "jenkins" },
    { name: "GitHub Actions", iconName: "github" },
    
    // Databases
    { name: "PostgreSQL", iconName: "postgresql" },
    { name: "MongoDB", iconName: "mongodb" },
    { name: "Redis", iconName: "redis" },
    
    // Observability
    { name: "Prometheus", iconName: "prometheus" },
    { name: "Grafana", iconName: "grafana" },
    
    // Systems & Tools
    { name: "Linux", iconName: "linux" },
    { name: "Node.js", iconName: "nodejs" },
    { name: "Tailwind CSS", iconName: "tailwindcss" },
    { name: "Vercel", iconName: "vercel" },
    { name: "Figma", iconName: "figma" },
    { name: "Git", iconName: "git" },
    { name: "VS Code", iconName: "vscode" },
  ];

  const TechIcon = ({ name, iconName }: { name: string; iconName: string }) => (
    <li className="w-max flex-none">
      <div className="flex items-center gap-2 md:gap-3 px-2 md:px-4 py-2 md:py-3 bg-white dark:bg-neutral-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-neutral-200 dark:border-neutral-700 whitespace-nowrap group hover:scale-105">
        <div className="w-4 h-4 md:w-6 md:h-6 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
          <StackIcon name={iconName} />
        </div>
        <span className="text-xs md:text-sm font-medium text-neutral-700 dark:text-neutral-200">{name}</span>
      </div>
    </li>
  );

  return (
    <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden">
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-16 md:mt-20 mb-6 md:mb-8 text-center px-4"
      >
        Tech Stack & Skills
      </Heading>
      
      <div className="space-y-4 md:space-y-6">
        {/* First row - left to right */}
        <InfiniteScroll direction="left" speed="slow" pauseOnHover={true}>
          {techStack.slice(0, Math.ceil(techStack.length / 2)).map((tech, index) => (
            <TechIcon key={`row1-${index}`} name={tech.name} iconName={tech.iconName} />
          ))}
        </InfiniteScroll>

        {/* Second row - right to left */}
        <InfiniteScroll direction="right" speed="slow" pauseOnHover={true}>
          {techStack.slice(Math.ceil(techStack.length / 2)).map((tech, index) => (
            <TechIcon key={`row2-${index}`} name={tech.name} iconName={tech.iconName} />
          ))}
        </InfiniteScroll>
      </div>
    </div>
  );
};

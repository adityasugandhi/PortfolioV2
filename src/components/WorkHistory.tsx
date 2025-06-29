"use client";
import { timeline } from "@/constants/timeline";
import React from "react";
import { Paragraph } from "./Paragraph";
import { Heading } from "./Heading";
import {
  IconCheck,
  IconCheckbox,
  IconCircleCheckFilled,
} from "@tabler/icons-react";
import StackIcon from "tech-stack-icons";

export const WorkHistory = () => {
  return (
    <div>
      {timeline.map((item, index) => (
        <div
          className="flex md:flex-row flex-col space-y-10 md:space-y-0 space-x-10 my-20 relative"
          key={`timeline-${index}`}
        >
          <div className="w-48 flex-shrink-0">
            <Paragraph className="font-medium">{item.date}</Paragraph>
            {item.location === "Tallahassee, FL" ? (
              <a 
                href="https://www.google.com/maps/place/Florida+State+University/@30.4392363,-84.3226479,5451m/data=!3m1!1e3!4m6!3m5!1s0x88ecf57078f21dd3:0x9c1b0fee7f5d86c8!8m2!3d30.442087!4d-84.2979579!16zL20vMDFqcTBq?entry=ttu&g_ep=EgoyMDI1MDYyMy4yIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-neutral-600 hover:text-blue-600 hover:underline transition-colors duration-200"
              >
                {item.location}
              </a>
            ) : item.location === "Chennai, India" ? (
              <a 
                href="https://www.google.com/maps/place/Aspire+Systems/@12.8630085,80.2129064,12144m/data=!3m1!1e3!4m10!1m2!2m1!1saspire+systems+chennai+address!3m6!1s0x3a525a5d709633d1:0xd457a8c2f985c180!8m2!3d12.8301875!4d80.2232549!15sCh5hc3BpcmUgc3lzdGVtcyBjaGVubmFpIGFkZHJlc3MiBUgBiAEBkgEQc29mdHdhcmVfY29tcGFueaoBbgoNL2cvMTFjMms5anhkNwoKL20vMDdrZ3gwZBABKhIiDmFzcGlyZSBzeXN0ZW1zKAAyHxABIhvZrbO9HZgtSNf-mJfzQvQGm7A2hfmcvVialWgyGhACIhZhc3BpcmUgc3lzdGVtcyBjaGVubmFp4AEA!16s%2Fg%2F11b5yj6ywh?entry=ttu&g_ep=EgoyMDI1MDYyMy4yIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-neutral-600 hover:text-blue-600 hover:underline transition-colors duration-200"
              >
                {item.location}
              </a>
            ) : (
              <Paragraph className="text-sm text-neutral-600">{item.location}</Paragraph>
            )}
          </div>
          <div className="flex-1">
            <Heading
              as="h5"
              className="text-lg md:text-lg lg:text-lg text-blue-500"
            >
              {item.company}
            </Heading>
            <Paragraph className="text-base md:text-base lg:text-base font-semibold">
              {item.title}
            </Paragraph>
            <Paragraph className="text-sm md:text-sm lg:text-sm mb-4">
              {item.description}
            </Paragraph>

            {item.technologies && (
              <div className="flex flex-wrap gap-2 mb-4">
                {item.technologies.map((tech) => (
                  <div 
                    key={tech} 
                    className="flex items-center gap-1 bg-neutral-100 dark:bg-neutral-800 px-2 py-1 rounded-md text-xs"
                  >
                    <StackIcon name={tech} className="w-4 h-4" />
                    <span className="capitalize text-neutral-700 dark:text-neutral-200">
                      {tech.replace('-', ' ')}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {item.responsibilities.map((responsibility, index) => (
              <Step key={responsibility}>{responsibility}</Step>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

const Step = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex space-x-1 items-start my-2">
      <IconCircleCheckFilled className="h-3 w-4 mt-1 text-neutral-300" />
      <Paragraph className="text-sm md:text-sm lg:text-sm">
        {children}
      </Paragraph>
    </div>
  );
};

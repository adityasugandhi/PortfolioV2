"use client";
import React from "react";
import { Heading } from "./Heading";
import { Product } from "@/types/products";
import { products } from "@/constants/products";
import Link from "next/link";
import Image from "next/image";
import { Paragraph } from "./Paragraph";
import { motion } from "motion/react";
import { IconBrandGithub } from "@tabler/icons-react";
import StackIcon from "tech-stack-icons";

export const Products = () => {
  return (
    <div>
      <div className="grid grid-cols-1 gap-10">
        {products.map((product: Product, idx: number) => (
          <motion.div
            key={product.href}
            initial={{
              opacity: 0,
              x: -50,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{ duration: 0.2, delay: idx * 0.1 }}
          >
            <motion.div
              whileHover={{ 
                scale: 1.02,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative rounded-2xl overflow-hidden group"
            >
              <Link
                href={product.href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 bg-transparent hover:bg-gray-50 dark:bg-transparent rounded-2xl pt-4"
              >
                {/* Animated gradient overlay for dark mode hover */}
                <div
                  className="absolute inset-0 bg-gradient-to-br from-slate-900 to-teal-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out hidden dark:block z-0"
                />
                
                {/* Debug: Always visible gradient for testing */}
                <div
                  className="absolute inset-0 bg-gradient-to-br from-red-500 to-blue-500 rounded-2xl opacity-20 dark:hidden z-0"
                />
                
                {/* Content wrapper */}
                <div className="relative z-10 flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 w-full">
                  {/* Image section */}
                  <div className="flex justify-center md:justify-start w-full md:w-auto p-4">
                    <div className="relative w-full max-w-full md:w-[200px] md:max-w-[200px] h-[200px] rounded-md overflow-hidden bg-gray-100 dark:bg-gray-800">
                      <Image
                        src={product.thumbnail}
                        alt={`${product.title} project thumbnail`}
                        fill
                        className="object-cover"
                        priority={idx < 2}
                        sizes="(max-width: 768px) 100vw, 200px"
                        unoptimized
                        onError={(e) => {
                          console.error(`Failed to load image for ${product.title}:`, e);
                        }}
                      />
                    </div>
                  </div>
                  
                  {/* Content section */}
                  <div className="flex flex-col justify-between p-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <Heading
                          as="h4"
                          className="font-black text-lg md:text-lg lg:text-lg"
                        >
                          {product.title}
                        </Heading>
                        <IconBrandGithub className="w-5 h-5 text-neutral-600" />
                      </div>
                      <Paragraph className="text-sm md:text-sm lg:text-sm mt-2 max-w-xl">
                        {product.description}
                      </Paragraph>
                    </div>
                    <div className="flex flex-wrap gap-2 md:mb-1 mt-2 md:mt-0">
                      {product.stack?.map((stack: string) => {
                        // Map display names to tech-stack-icons naming convention
                        const getIconName = (tech: string) => {
                          const techMap: { [key: string]: string } = {
                            'Python': 'python',
                            'WebSockets': 'websocket',
                            'Network Protocols': 'network',
                            'System Programming': 'c',
                            'Django': 'django',
                            'Tax Processing': 'calculator',
                            'Web Development': 'html5',
                            'TensorFlow': 'tensorflow',
                            'Computer Vision': 'opencv',
                            'CNN': 'tensorflow',
                            'RAG': 'ai',
                            'LLM': 'openai',
                            'PDF Processing': 'pdf',
                            'Next.js': 'nextjs',
                            'TypeScript': 'typescript',
                            'FastAPI': 'fastapi',
                            'JavaScript': 'js',
                            'React': 'react',
                            'Node.js': 'nodejs',
                          };
                          return techMap[tech] || tech.toLowerCase().replace(/\s+/g, '-');
                        };

                        return (
                          <div
                            key={stack}
                            className="flex items-center gap-1 bg-gray-50 dark:bg-neutral-700 px-2 py-1 rounded-md text-xs"
                          >
                            <StackIcon name={getIconName(stack)} className="w-4 h-4" />
                            <span className="capitalize text-neutral-700 dark:text-neutral-200">
                              {stack}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
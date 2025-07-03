"use client";

import React, { useState, useEffect, useCallback } from "react";

import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

export interface ContainerTextFlipProps {
  /** Array of words to cycle through in the animation */
  words?: string[];
  /** Time in milliseconds between word transitions */
  interval?: number;
  /** Additional CSS classes to apply to the container */
  className?: string;
  /** Additional CSS classes to apply to the text */
  textClassName?: string;
  /** Duration of the transition animation in milliseconds */
  animationDuration?: number;
}

export function ContainerTextFlip({
  words = ["better", "modern", "beautiful", "awesome"],
  interval = 3000,
  className,
  textClassName,
  animationDuration = 700,
}: ContainerTextFlipProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [maxWidth, setMaxWidth] = useState(0);
  const measureRef = React.useRef<HTMLDivElement>(null);

  const calculateMaxWidth = useCallback(() => {
    if (measureRef.current) {
      let maxCalculatedWidth = 0;
      
      // Create temporary span to measure each word
      const tempSpan = document.createElement('span');
      tempSpan.style.visibility = 'hidden';
      tempSpan.style.position = 'absolute';
      tempSpan.style.whiteSpace = 'nowrap';
      tempSpan.className = measureRef.current.className;
      document.body.appendChild(tempSpan);
      
      words.forEach(word => {
        tempSpan.textContent = word;
        const width = tempSpan.offsetWidth;
        if (width > maxCalculatedWidth) {
          maxCalculatedWidth = width;
        }
      });
      
      document.body.removeChild(tempSpan);
      setMaxWidth(maxCalculatedWidth + 20); // Add padding
    }
  }, [words]);

  useEffect(() => {
    // Calculate max width on mount and when words change
    const timer = setTimeout(() => {
      calculateMaxWidth();
    }, 100); // Small delay to ensure styles are loaded
    
    return () => clearTimeout(timer);
  }, [calculateMaxWidth]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      // Width will be updated in the effect that depends on currentWordIndex
    }, interval);

    return () => clearInterval(intervalId);
  }, [words, interval]);

  return (
    <span 
      className={cn(
        "relative inline-block font-bold text-neutral-900 dark:text-white bg-transparent align-baseline",
        className,
      )}
      style={{ width: maxWidth > 0 ? `${maxWidth}px` : 'auto', display: 'inline-block', verticalAlign: 'text-bottom' }}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={words[currentWordIndex]}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -5 }}
          transition={{
            duration: animationDuration / 1000,
            ease: "easeInOut",
          }}
          className={cn("inline-block", textClassName)}
          ref={measureRef}
          style={{ verticalAlign: 'text-bottom' }}
        >
          <span className="inline-block">
            {words[currentWordIndex].split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{
                  opacity: 0,
                  filter: "blur(10px)",
                }}
                animate={{
                  opacity: 1,
                  filter: "blur(0px)",
                }}
                transition={{
                  delay: index * 0.02,
                }}
                style={{ display: 'inline-block' }}
              >
                {letter}
              </motion.span>
            ))}
          </span>
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

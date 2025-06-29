"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Cover } from "@/components/ui/cover";

export const LoadingScreen = ({ onLoadingComplete }: { onLoadingComplete: () => void }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Loading screen duration - enough time to show the cover animation
    const timer = setTimeout(() => {
      setIsVisible(false);
      // Wait for exit animation to complete before calling onLoadingComplete
      setTimeout(() => {
        onLoadingComplete();
      }, 500);
    }, 3500); // 3.5 seconds total loading time

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ 
            duration: 0.5,
            ease: "easeInOut"
          }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
        >
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold text-white mb-4"
            >
              <Cover className="text-white" autoAnimate={true}>Building</Cover> at Warp Speed
            </motion.h1>
            
            {/* Loading dots animation */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.4 }}
              className="flex justify-center space-x-2 mt-8"
            >
              {[0, 1, 2].map((index) => (
                <motion.div
                  key={index}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: index * 0.2,
                  }}
                  className="w-3 h-3 bg-blue-500 rounded-full"
                />
              ))}
            </motion.div>

            {/* Progress bar */}
            <motion.div 
              initial={{ opacity: 0, width: "0%" }}
              animate={{ opacity: 1, width: "100%" }}
              transition={{ delay: 1, duration: 2.5, ease: "easeInOut" }}
              className="mt-8 mx-auto h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full max-w-xs"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
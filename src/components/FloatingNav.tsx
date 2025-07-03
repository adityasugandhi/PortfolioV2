"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navlinks } from "@/constants/navlinks";
import { Navlink } from "@/types/navlink";
import { SmoothLink } from "./SmoothLink";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { ThemeToggle } from "@/components/theme-toggle";
import { SoundToggle } from "@/components/SoundToggle";

export const FloatingNav = () => {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          // Scrolling down and past 100px
          setVisible(false);
        } else {
          // Scrolling up
          setVisible(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      return () => window.removeEventListener('scroll', controlNavbar);
    }
  }, [lastScrollY]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed top-4 left-0 right-0 z-50 hidden lg:flex justify-center"
        >
          <div className="flex items-center justify-center gap-2 bg-white/80 dark:bg-black/80 backdrop-blur-md border border-neutral-200 dark:border-neutral-700 rounded-full px-6 py-3 shadow-lg">
            {navlinks.map((link: Navlink) => (
              <SmoothLink
                key={link.href}
                href={link.href}
                className={twMerge(
                  "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
                  "hover:bg-neutral-100 dark:hover:bg-neutral-800",
                  isActive(link.href) 
                    ? "bg-neutral-900 dark:bg-white text-white dark:text-black shadow-md" 
                    : "text-neutral-700 dark:text-neutral-300"
                )}
              >
                <link.icon className="w-4 h-4" />
                <span className="hidden xl:block">{link.label}</span>
              </SmoothLink>
            ))}
            
            <div className="w-px h-6 bg-neutral-300 dark:bg-neutral-600 mx-2" />
            
            <ThemeToggle />
            <SoundToggle />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
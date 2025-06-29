"use client";
import { navlinks } from "@/constants/navlinks";
import { Navlink } from "@/types/navlink";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
import { twMerge } from "tailwind-merge";
import { Heading } from "./Heading";
import { socials } from "@/constants/socials";
import { Badge } from "./Badge";
import { AnimatePresence, motion } from "framer-motion";
import { IconLayoutSidebarRightCollapse, IconLayoutSidebarLeftCollapse, IconMenu2 } from "@tabler/icons-react";
import { isMobile } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";

export const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    setOpen(!isMobile());
  }, []);

  const shouldExpand = !collapsed || isHovering;

  // Handle text animation timing
  useEffect(() => {
    if (shouldExpand) {
      // Start text animation at 100ms while sidebar is still expanding
      const timer = setTimeout(() => setShowText(true), 100);
      return () => clearTimeout(timer);
    } else {
      // Hide text immediately when collapsing
      setShowText(false);
    }
  }, [shouldExpand]);

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: -200 }}
            animate={{ 
              x: 0,
              width: shouldExpand ? "14rem" : "4rem"
            }}
            transition={{ 
              x: { duration: 0.3, ease: "linear" },
              width: { duration: 0.45, ease: "easeOut" }
            }}
            exit={{ x: -200 }}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            className={twMerge(
              "z-[100] py-10 bg-neutral-100 dark:bg-neutral-900 fixed lg:relative h-screen left-0 flex-col justify-between overflow-hidden hidden lg:flex",
              shouldExpand ? "px-6" : "px-2"
            )}
          >
            <div className="flex-1 overflow-auto">
              <SidebarHeader collapsed={!shouldExpand} showText={showText} />
              <Navigation setOpen={setOpen} collapsed={!shouldExpand} showText={showText} />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-center mb-2">
                <ThemeToggle />
              </div>
              {showText && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  onClick={() => isMobile() && setOpen(false)}
                >
                  <Badge href="/resume" text="Read Resume" />
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Mobile toggle */}
      <button
        className="fixed lg:hidden bottom-4 right-4 h-10 w-10 border border-neutral-200 dark:border-neutral-700 rounded-full backdrop-blur-sm bg-white dark:bg-neutral-800 flex items-center justify-center z-50 shadow-lg"
        onClick={() => setOpen(!open)}
      >
        <IconMenu2 className="h-5 w-5 text-secondary" />
      </button>
    </>
  );
};

export const Navigation = ({
  setOpen,
  collapsed,
  showText,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  collapsed: boolean;
  showText: boolean;
}) => {
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  return (
    <div className="flex flex-col space-y-1 my-10 relative z-[100]">
      {navlinks.map((link: Navlink) => (
        <Link
          key={link.href}
          href={link.href}
          onClick={() => isMobile() && setOpen(false)}
          className={twMerge(
            "text-secondary hover:text-primary transition duration-200 flex items-center py-2 px-2 rounded-md text-sm",
            collapsed ? "justify-center" : "space-x-2",
            isActive(link.href) && "bg-white dark:bg-neutral-700 shadow-lg text-primary"
          )}
          title={collapsed ? link.label : undefined}
        >
          <link.icon
            className={twMerge(
              "h-4 w-4 flex-shrink-0",
              isActive(link.href) && "text-sky-500"
            )}
          />
          <AnimatePresence>
            {showText && (
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="whitespace-nowrap"
              >
                {link.label}
              </motion.span>
            )}
          </AnimatePresence>
        </Link>
      ))}

      {showText && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, ease: "easeOut", delay: 0.1 }}
        >
          <Heading as="p" className="text-sm md:text-sm lg:text-sm pt-10 px-2">
            Socials
          </Heading>
        </motion.div>
      )}
      {socials.map((link: Navlink) => (
        <Link
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={twMerge(
            "text-secondary hover:text-primary transition duration-200 flex items-center py-2 px-2 rounded-md text-sm",
            collapsed ? "justify-center" : "space-x-2"
          )}
          title={collapsed ? link.label : undefined}
        >
          <link.icon
            className={twMerge(
              "h-4 w-4 flex-shrink-0",
              isActive(link.href) && "text-sky-500"
            )}
          />
          <AnimatePresence>
            {showText && (
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="whitespace-nowrap"
              >
                {link.label}
              </motion.span>
            )}
          </AnimatePresence>
        </Link>
      ))}
    </div>
  );
};

const SidebarHeader = ({ collapsed, showText }: { collapsed: boolean; showText: boolean }) => {
  return (
    <div className={twMerge("flex transition-all duration-300", collapsed ? "justify-center" : "space-x-2")}>
      <Image
        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
        alt="Avatar"
        height="40"
        width="40"
        className="object-cover object-top rounded-full flex-shrink-0"
      />
      <AnimatePresence>
        {showText && (
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="flex text-sm flex-col"
          >
            <p className="font-bold text-primary whitespace-nowrap">Aditya Sugandhi</p>
            <p className="font-light text-secondary whitespace-nowrap">Software Engineer</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

"use client";

import React, { useState, useEffect } from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import { navlinks } from "@/constants/navlinks";
import { socials } from "@/constants/socials";
import { IconSun, IconMoon, IconVolume, IconVolumeOff } from "@tabler/icons-react";
import { useTheme } from "next-themes";
import { useMusicContext } from "@/context/MusicContext";

export function PortfolioFloatingDock() {
  const { theme, setTheme } = useTheme();
  const { isPlaying, toggleMusic } = useMusicContext();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  
  const handleThemeToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  // Don't render until mounted to avoid hydration issues
  if (!mounted) {
    return null;
  }
  
  // Combine navigation and social links for the floating dock
  const dockItems = [
    // Main navigation links
    ...navlinks.map((link) => ({
      title: link.label,
      icon: (
        <link.icon className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: link.href,
    })),
    
    // Theme toggle as a dock item
    {
      title: "Toggle Theme",
      icon: theme === "dark" ? (
        <IconSun className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ) : (
        <IconMoon className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
      onClick: handleThemeToggle,
    },
    
    // Sound toggle as a dock item
    {
      title: isPlaying ? "Mute Music" : "Play Music",
      icon: isPlaying ? (
        <IconVolume className="h-full w-full text-blue-500 dark:text-blue-400" />
      ) : (
        <IconVolumeOff className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
      onClick: toggleMusic,
    },
    
    // Social links (limited to key ones for mobile)
    ...socials.slice(0, 2).map((social) => ({
      title: social.label,
      icon: React.createElement(social.icon, {
        className: "h-full w-full text-neutral-500 dark:text-neutral-300"
      }),
      href: social.href,
    })),
  ];

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 lg:hidden">
      <FloatingDock
        items={dockItems}
        mobileClassName="translate-y-0"
      />
    </div>
  );
}
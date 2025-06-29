"use client";

import React, { useState, useEffect } from "react";
import { LoadingScreen } from "@/components/LoadingScreen";
import { usePathname } from "next/navigation";

export const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const pathname = usePathname();

  const handleLoadingComplete = () => {
    setIsInitialLoading(false);
    setHasLoaded(true);
    // Small delay to ensure smooth transition
    setTimeout(() => {
      setShowContent(true);
    }, 100);
  };

  // Only show loading screen on initial app load, not on route changes
  useEffect(() => {
    if (hasLoaded) {
      // If we've already loaded once, immediately show content on route changes
      setShowContent(true);
      setIsInitialLoading(false);
    }
  }, [pathname, hasLoaded]);

  // Prevent showing content on server-side to avoid hydration issues
  useEffect(() => {
    if (!isInitialLoading) {
      setShowContent(true);
    }
  }, [isInitialLoading]);

  return (
    <>
      {isInitialLoading && !hasLoaded && (
        <LoadingScreen onLoadingComplete={handleLoadingComplete} />
      )}
      {showContent && children}
    </>
  );
};
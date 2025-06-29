"use client";
import React from "react";
import { cn } from "@/lib/utils";

interface InfiniteScrollProps {
  children: React.ReactNode;
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}

export const InfiniteScroll = ({
  children,
  direction = "left",
  speed = "normal",
  pauseOnHover = true,
  className,
}: InfiniteScrollProps) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  const getDirection = React.useCallback(() => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty("--animation-direction", "forwards");
      } else {
        containerRef.current.style.setProperty("--animation-direction", "reverse");
      }
    }
  }, [direction]);

  const getSpeed = React.useCallback(() => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  }, [speed]);

  const addAnimation = React.useCallback(() => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setAnimation();
    }
  }, [getDirection, getSpeed]);

  React.useEffect(() => {
    addAnimation();
  }, [addAnimation]);


  const setAnimation = () => {
    if (containerRef.current && scrollerRef.current) {
      containerRef.current.setAttribute("data-animated", "true");

      scrollerRef.current.style.animationName = "scroll";
      scrollerRef.current.style.animationDuration = "var(--animation-duration)";
      scrollerRef.current.style.animationTimingFunction = "linear";
      scrollerRef.current.style.animationIterationCount = "infinite";
      scrollerRef.current.style.animationDirection = "var(--animation-direction)";
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {children}
      </ul>
      <style jsx>{`
        @keyframes scroll {
          to {
            transform: translate(calc(-50% - 0.5rem));
          }
        }
      `}</style>
    </div>
  );
};
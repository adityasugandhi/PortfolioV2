"use client";
import { useEffect, useRef, useState } from "react";

interface VinylRecordProps {
  onLoadComplete?: () => void;
}

export const VinylRecord = ({ onLoadComplete }: VinylRecordProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleCanPlayThrough = () => {
      setIsLoaded(true);
      onLoadComplete?.();
    };

    const handleLoadedData = () => {
      // Start the animation after a brief delay
      setTimeout(() => {
        setIsVisible(true);
        video.play().catch(console.error);
      }, 500);
    };

    const handleError = (e: Event) => {
      console.error("Vinyl video failed to load:", e);
    };

    video.addEventListener('canplaythrough', handleCanPlayThrough);
    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('error', handleError);

    return () => {
      video.removeEventListener('canplaythrough', handleCanPlayThrough);
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('error', handleError);
    };
  }, [onLoadComplete]);

  return (
    <div 
      className={`absolute top-4 right-4 md:top-8 md:right-8 w-36 h-24 md:w-48 md:h-32 lg:w-56 lg:h-40 transition-all duration-1000 ease-out z-30 ${
        isVisible ? 'opacity-100 transform scale-100' : 'opacity-0 transform scale-50'
      }`}
    >
      <video
        ref={videoRef}
        className="w-full h-full object-cover rounded-lg shadow-2xl"
        loop
        muted
        playsInline
        preload="auto"
      >
        <source src="/vecteezy_a-smooth-minimal-animation-of-a-vinyl-record-disc-moving-out_35643433.mp4" type="video/mp4" />
        
        {/* Fallback for older browsers */}
        <div className="w-full h-full bg-gray-800 rounded-lg flex items-center justify-center">
          <span className="text-white text-xs">♪</span>
        </div>
      </video>
      
      {/* Subtle glow effect */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-600/20 blur-lg -z-10" />
    </div>
  );
};
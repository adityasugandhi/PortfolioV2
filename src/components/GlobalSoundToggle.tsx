"use client";
import { useState } from "react";
import { IconVolume, IconVolumeOff } from "@tabler/icons-react";
import { useMusicContext } from "@/context/MusicContext";

export const GlobalSoundToggle = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { isPlaying, toggleMusic } = useMusicContext();

  return (
    <button
      onClick={toggleMusic}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        fixed bottom-6 right-6 z-50
        w-12 h-12 rounded-full
        bg-white/10 dark:bg-black/20 backdrop-blur-md
        border border-white/20 dark:border-gray-700/50
        flex items-center justify-center
        transition-all duration-300 ease-out
        hover:bg-white/20 dark:hover:bg-black/30
        hover:scale-110 hover:shadow-lg
        ${isHovered ? 'shadow-xl' : 'shadow-md'}
        ${isPlaying ? 'animate-pulse' : ''}
      `}
      title={isPlaying ? 'Mute music' : 'Play music'}
    >
      {isPlaying ? (
        <IconVolume 
          className="w-5 h-5 text-blue-600 dark:text-blue-400" 
          stroke={1.5}
        />
      ) : (
        <IconVolumeOff 
          className="w-5 h-5 text-gray-600 dark:text-gray-400" 
          stroke={1.5}
        />
      )}
      
      {/* Audio wave animation when playing */}
      {isPlaying && (
        <div className="absolute inset-0 rounded-full">
          <div className="absolute inset-0 rounded-full bg-blue-500/20 animate-ping" />
          <div className="absolute inset-0 rounded-full bg-blue-500/10 animate-ping animation-delay-75" />
        </div>
      )}
    </button>
  );
};